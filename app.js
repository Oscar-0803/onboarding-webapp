const data = window.HANDBOOK_DATA;

const content = document.getElementById("appContent");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

const favorites = new Set(
  JSON.parse(localStorage.getItem("handbook-favorites") || "[]")
);

let state = {
  view: "home",
  category: null,
  query: "",
  procedureId: null
};

function categoryById(id) {
  return data.categories.find((category) => category.id === id);
}

function procedureById(id) {
  return data.procedures.find((procedure) => procedure.id === id);
}

function categoryCount(id) {
  return data.procedures.filter(
    (procedure) => procedure.category === id
  ).length;
}

function saveFavorites() {
  localStorage.setItem(
    "handbook-favorites",
    JSON.stringify([...favorites])
  );
}

function toggleFavorite(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }

  saveFavorites();
  render();
}

function buildNavigation() {
  const categoryNav = document.getElementById("categoryNav");

  categoryNav.innerHTML = data.categories
    .map(
      (category) => `
        <button
          class="nav-item"
          data-category="${category.id}"
        >
          <span>${category.icon}</span>
          <span>${category.label}</span>

          <span class="nav-count">
            ${categoryCount(category.id)}
          </span>
        </button>
      `
    )
    .join("");

  document
    .querySelectorAll("[data-view]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        state = {
          view: button.dataset.view,
          category: null,
          query: "",
          procedureId: null
        };

        searchInput.value = "";

        render();
      });
    });

  document
    .querySelectorAll("[data-category]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        state = {
          view: "category",
          category: button.dataset.category,
          query: "",
          procedureId: null
        };

        searchInput.value = "";

        render();
      });
    });
}

function updateNavigation() {
  document
    .querySelectorAll(".nav-item")
    .forEach((item) => {
      item.classList.remove("active");
    });

  if (state.view === "home") {
    document
      .querySelector('[data-view="home"]')
      ?.classList.add("active");
  }

  if (state.view === "favorites") {
    document
      .querySelector('[data-view="favorites"]')
      ?.classList.add("active");
  }

  if (state.view === "category") {
    document
      .querySelector(
        `[data-category="${state.category}"]`
      )
      ?.classList.add("active");
  }
}

function procedureCard(procedure) {
  const category = categoryById(procedure.category);

  return `
    <article
      class="procedure-card"
      data-procedure-card="${procedure.id}"
    >

      <div class="card-top">

        <span class="badge">
          ${category.icon}
          ${category.label}
        </span>

        <button
          class="favorite-button ${
            favorites.has(procedure.id)
              ? "active"
              : ""
          }"
          data-favorite="${procedure.id}"
          title="Toevoegen aan favorieten"
        >
          ★
        </button>

      </div>

      <h3>
        ${procedure.title}
      </h3>

      <p>
        ${procedure.summary}
      </p>

      <div class="card-footer">

        <span>
          ${procedure.duration}
          ·
          ${procedure.frequency}
        </span>

        <button
          class="open-button"
          data-open="${procedure.id}"
        >
          Openen →
        </button>

      </div>

    </article>
  `;
}

function categoryCard(category) {
  return `
    <button
      class="category-card"
      data-open-category="${category.id}"
    >

      <div class="category-icon">
        ${category.icon}
      </div>

      <strong>
        ${category.label}
      </strong>

      <span>
        ${category.description}
      </span>

      <small>
        ${categoryCount(category.id)}
        procedures
      </small>

    </button>
  `;
}

function homeView() {
  const featured = data.procedures.filter(
    (procedure) => procedure.featured
  );

  content.innerHTML = `
    <div class="hero">

      <div>

        <p class="eyebrow">
          ONBOARDING HANDBOEK
        </p>

        <h1>
          Wat wil je vandaag doen?
        </h1>

        <p class="hero-copy">
          Vind snel de juiste werkinstructie zonder
          door een lang Word-document te zoeken.
        </p>

      </div>

      <div class="hero-stat">

        <strong>
          ${data.procedures.length}
        </strong>

        <span>
          procedures in dit concept
        </span>

      </div>

    </div>

    <div class="section-heading">

      <div>

        <p class="eyebrow">
          SNEL STARTEN
        </p>

        <h2>
          Veelgebruikte procedures
        </h2>

      </div>

    </div>


    <div class="procedure-grid">

      ${featured
        .map(procedureCard)
        .join("")}

    </div>


    <div class="section-heading categories-heading">

      <div>

        <p class="eyebrow">
          BLADEREN
        </p>

        <h2>
          Alle categorieën
        </h2>

      </div>

    </div>


    <div class="category-grid">

      ${data.categories
        .map(categoryCard)
        .join("")}

    </div>
  `;
}

function listView(
  title,
  description,
  procedures
) {
  content.innerHTML = `
    <div class="page-title-row">

      <div>

        <p class="eyebrow">
          WERKINSTRUCTIES
        </p>

        <h1>
          ${title}
        </h1>

        <p>
          ${description}
        </p>

      </div>

    </div>

    ${
      procedures.length
        ? `
          <div class="procedure-grid">

            ${procedures
              .map(procedureCard)
              .join("")}

          </div>
        `
        : `
          <div class="empty-state">

            <h2>
              Nog niets hier
            </h2>

            <p>
              Markeer een procedure met ★
              om hem hier terug te vinden.
            </p>

          </div>
        `
    }
  `;
}

function searchView() {
  const query = state.query
    .trim()
    .toLowerCase();

  const results =
    data.procedures.filter(
      (procedure) => {
        const searchableText = [
          procedure.title,
          procedure.summary,
          procedure.system,
          procedure.frequency,
          ...(procedure.tags || []),
          ...procedure.steps.flatMap(
            (step) => [
              step.title,
              step.text
            ]
          )
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(
          query
        );
      }
    );

  content.innerHTML = `
    <div class="page-title-row">

      <div>

        <p class="eyebrow">
          ZOEKEN
        </p>

        <h1>
          Zoekresultaten
        </h1>

        <p class="search-summary">
          ${results.length}
          resultaat${results.length === 1 ? "" : "en"}
          voor “${state.query}”
        </p>

      </div>

    </div>

    ${
      results.length
        ? `
          <div class="procedure-grid">

            ${results
              .map(procedureCard)
              .join("")}

          </div>
        `
        : `
          <div class="empty-state">

            <h2>
              Geen resultaten
            </h2>

            <p>
              Probeer bijvoorbeeld
              "Trade",
              "cadeaukaart",
              "Google"
              of "betaling".
            </p>

          </div>
        `
    }
  `;
}

function detailView(procedure) {
  const category = categoryById(
    procedure.category
  );

  const related =
    data.procedures
      .filter(
        (item) =>
          item.category ===
            procedure.category &&
          item.id !== procedure.id
      )
      .slice(0, 4);

  content.innerHTML = `
    <div class="breadcrumb">

      <button data-home>
        Overzicht
      </button>

      /

      <button
        data-breadcrumb-category="${category.id}"
      >
        ${category.label}
      </button>

      /

      ${procedure.title}

    </div>


    <div class="page-title-row">

      <div>

        <p class="eyebrow">
          ${category.label.toUpperCase()}
        </p>

        <h1>
          ${procedure.title}
        </h1>

        <p>
          ${procedure.summary}
        </p>


        <div class="meta-row">

          <span class="meta-pill">
            Systeem:
            ${procedure.system}
          </span>

          <span class="meta-pill">
            ${procedure.frequency}
          </span>

          <span class="meta-pill">
            ${procedure.duration}
          </span>

          <span class="meta-pill">
            Bijgewerkt:
            ${data.meta.lastUpdated}
          </span>

        </div>

      </div>


      <button
        class="favorite-button ${
          favorites.has(procedure.id)
            ? "active"
            : ""
        }"
        data-favorite="${procedure.id}"
      >
        ★
      </button>

    </div>


    ${
      procedure.caution
        ? `
          <div class="notice warning">

            <div class="notice-icon">
              !
            </div>

            <div>

              <strong>
                Let op
              </strong>

              <p>
                ${procedure.caution}
              </p>

            </div>

          </div>
        `
        : ""
    }


    <div class="detail-layout">

      <section class="steps-panel">

        ${procedure.steps
          .map(
            (step, index) => `
              <div class="step">

                <div class="step-number">
                  ${index + 1}
                </div>

                <div>

                  <h3>
                    ${step.title}
                  </h3>

                  <p>
                    ${step.text}
                  </p>
                  ${
  step.image
    ? `
      <div class="step-image-wrapper">
        <img
          class="step-image"
          src="${step.image}"
          alt="${step.title}"
          loading="lazy"
        >
      </div>
    `
    : ""
}

                </div>

              </div>
            `
          )
          .join("")}

      </section>


      <aside class="side-panel">

        <h3>
          Over deze instructie
        </h3>

        <p>
          Deze pagina is onderdeel van
          het digitale onboarding-handboek.
        </p>


        <hr>


        <h3>
          Bronstatus
        </h3>

        <p>
          ${data.meta.sourceStatus}
        </p>


        <hr>


        <h3>
          Gerelateerde procedures
        </h3>

        ${
          related.length
            ? related
                .map(
                  (item) => `
                    <button
                      class="related-link"
                      data-open="${item.id}"
                    >
                      → ${item.title}
                    </button>
                  `
                )
                .join("")
            : `
              <p>
                Geen gerelateerde procedures.
              </p>
            `
        }

      </aside>

    </div>
  `;
}

function bindContentButtons() {
  content
    .querySelectorAll("[data-open]")
    .forEach((button) => {
      button.addEventListener(
        "click",
        (event) => {
          event.stopPropagation();

          state = {
            view: "detail",
            category: null,
            query: "",
            procedureId:
              button.dataset.open
          };

          searchInput.value = "";

          render();

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      );
    });

  content
    .querySelectorAll(
      "[data-procedure-card]"
    )
    .forEach((card) => {
      card.addEventListener(
        "click",
        (event) => {

          if (
            event.target.closest(
              "[data-favorite]"
            ) ||
            event.target.closest(
              "[data-open]"
            )
          ) {
            return;
          }

          state = {
            view: "detail",
            category: null,
            query: "",
            procedureId:
              card.dataset.procedureCard
          };

          searchInput.value = "";

          render();

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      );
    });

  content
    .querySelectorAll(
      "[data-favorite]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        (event) => {
          event.stopPropagation();

          toggleFavorite(
            button.dataset.favorite
          );
        }
      );
    });

  content
    .querySelectorAll(
      "[data-open-category]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          state = {
            view: "category",
            category:
              button.dataset.openCategory,
            query: "",
            procedureId: null
          };

          render();
        }
      );
    });

  content
    .querySelectorAll(
      "[data-breadcrumb-category]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          state = {
            view: "category",
            category:
              button.dataset
                .breadcrumbCategory,
            query: "",
            procedureId: null
          };

          render();
        }
      );
    });

  content
    .querySelectorAll("[data-home]")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          state = {
            view: "home",
            category: null,
            query: "",
            procedureId: null
          };

          render();
        }
      );
    });
}

function render() {
  updateNavigation();

  if (state.query) {
    searchView();
  }

  else if (state.view === "home") {
    homeView();
  }

  else if (
    state.view === "favorites"
  ) {
    listView(
      "Favorieten",
      "Je meest gebruikte werkinstructies op één plek.",
      data.procedures.filter(
        (procedure) =>
          favorites.has(procedure.id)
      )
    );
  }

  else if (
    state.view === "category"
  ) {
    const category =
      categoryById(state.category);

    listView(
      category.label,
      category.description,
      data.procedures.filter(
        (procedure) =>
          procedure.category ===
          category.id
      )
    );
  }

  else if (
    state.view === "detail"
  ) {
    detailView(
      procedureById(
        state.procedureId
      )
    );
  }

  clearSearch.classList.toggle(
    "hidden",
    !state.query
  );

  bindContentButtons();
}

searchInput.addEventListener(
  "input",
  () => {
    state.query = searchInput.value;

    render();
  }
);

clearSearch.addEventListener(
  "click",
  () => {
    searchInput.value = "";

    state = {
      view: "home",
      category: null,
      query: "",
      procedureId: null
    };

    render();
  }
);

document.addEventListener(
  "keydown",
  (event) => {
    if (
      event.key === "/" &&
      document.activeElement !==
        searchInput
    ) {
      event.preventDefault();

      searchInput.focus();
    }

    if (
      event.key === "Escape" &&
      document.activeElement ===
        searchInput
    ) {
      searchInput.blur();
    }
  }
);

buildNavigation();
render();
