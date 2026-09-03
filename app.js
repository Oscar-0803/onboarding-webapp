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


// =========================================================
// HELPERS
// =========================================================

function categoryById(id) {
  return data.categories.find(
    (category) => category.id === id
  );
}

function procedureById(id) {
  return data.procedures.find(
    (procedure) => procedure.id === id
  );
}

function topLevelProcedures() {
  return data.procedures.filter(
    (procedure) => !procedure.parent
  );
}

function categoryCount(id) {
  return data.procedures.filter(
    (procedure) =>
      procedure.category === id &&
      !procedure.parent
  ).length;
}

function childProcedures(parentId) {
  return data.procedures.filter(
    (procedure) =>
      procedure.parent === parentId
  );
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


// =========================================================
// NAVIGATION
// =========================================================

function buildNavigation() {
  const categoryNav =
    document.getElementById("categoryNav");

  if (!categoryNav) {
    return;
  }

  categoryNav.innerHTML = data.categories
    .map(
      (category) => `
        <button
          class="nav-item"
          data-category="${category.id}"
        >
          <span class="nav-icon">
            ${category.icon}
          </span>

          <span class="nav-label">
            ${category.label}
          </span>

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
      button.addEventListener(
        "click",
        () => {
          state = {
            view: button.dataset.view,
            category: null,
            query: "",
            procedureId: null
          };

          if (searchInput) {
            searchInput.value = "";
          }

          render();
        }
      );
    });

  document
    .querySelectorAll("[data-category]")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          state = {
            view: "category",
            category:
              button.dataset.category,
            query: "",
            procedureId: null
          };

          if (searchInput) {
            searchInput.value = "";
          }

          render();
        }
      );
    });
}

function updateNavigation() {
  document
    .querySelectorAll(".nav-item")
    .forEach((item) => {
      item.classList.remove("active");
    });

  document
    .querySelectorAll("[data-view]")
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


// =========================================================
// CARDS
// =========================================================

function procedureCard(procedure) {
  const category =
    categoryById(procedure.category);

  const folder =
    procedure.type === "folder";

  return `
    <article
      class="procedure-card ${
        folder ? "folder-card" : ""
      }"
      data-procedure-card="${procedure.id}"
    >

      <div class="card-top">

        <span class="badge">
          ${category?.icon || ""}
          ${category?.label || ""}
        </span>

        <button
          class="favorite-button ${
            favorites.has(procedure.id)
              ? "active"
              : ""
          }"
          data-favorite="${procedure.id}"
          title="Toevoegen aan favorieten"
          aria-label="Toevoegen aan favorieten"
        >
          ★
        </button>

      </div>

      <h3>
        ${procedure.title}
      </h3>

      <p>
        ${procedure.summary || ""}
      </p>

      <div class="card-footer">

        <span>
          ${
            folder
              ? `${
                  childProcedures(
                    procedure.id
                  ).length
                } processen`
              : `${procedure.duration || ""} · ${
                  procedure.frequency || ""
                }`
          }
        </span>

        <button
          class="open-button"
          data-open="${procedure.id}"
        >
          ${folder ? "Bekijken →" : "Openen →"}
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


// =========================================================
// HOME
// =========================================================

function homeView() {
  const featured =
    topLevelProcedures().filter(
      (procedure) => procedure.featured
    );

  const visibleProcedureCount =
    topLevelProcedures().length;

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
          Vind snel de juiste werkinstructie
          zonder door een lang Word-document
          te zoeken.
        </p>

      </div>

      <div class="hero-stat">

        <strong>
          ${visibleProcedureCount}
        </strong>

        <span>
          onderdelen in dit concept
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


// =========================================================
// LIST VIEW
// =========================================================

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
              Er zijn nog geen procedures
              toegevoegd.
            </p>

          </div>
        `
    }
  `;
}


// =========================================================
// FOLDER VIEW
// =========================================================

function folderView(folder) {
  const children =
    childProcedures(folder.id);

  content.innerHTML = `
    <div class="breadcrumb">

      <button data-home>
        Overzicht
      </button>

      <span>/</span>

      <span>
        ${folder.title}
      </span>

    </div>


    <div class="page-title-row folder-title">

      <div>

        <p class="eyebrow">
          PROCEDUREMAP
        </p>

        <h1>
          ${folder.title}
        </h1>

        <p>
          ${folder.summary}
        </p>

      </div>

    </div>


    <div class="section-heading">

      <div>

        <p class="eyebrow">
          PROCESSEN
        </p>

        <h2>
          Kies een werkinstructie
        </h2>

      </div>

    </div>


    ${
      children.length
        ? `
          <div class="procedure-grid">

            ${children
              .map(procedureCard)
              .join("")}

          </div>
        `
        : `
          <div class="empty-state">

            <h2>
              Nog geen processen
            </h2>

            <p>
              Aan deze map zijn nog geen
              processen toegevoegd.
            </p>

          </div>
        `
    }
  `;
}


// =========================================================
// SEARCH
// =========================================================

function searchView() {
  const query =
    state.query
      .trim()
      .toLowerCase();

  const results =
    data.procedures.filter(
      (procedure) => {

        const steps =
          procedure.steps || [];

        const bulletText =
          steps.flatMap(
            (step) =>
              step.bullets || []
          );

        const infoBoxText =
          procedure.infoBox
            ? [
                procedure.infoBox.title,
                procedure.infoBox.text,
                ...(procedure.infoBox.items || [])
                  .flatMap(
                    (item) => [
                      item.amount,
                      item.discount
                    ]
                  )
              ]
            : [];

        const searchableText = [
          procedure.title,
          procedure.summary,
          procedure.system,
          procedure.frequency,
          ...(procedure.tags || []),

          ...steps.flatMap(
            (step) => [
              step.title,
              step.text
            ]
          ),

          ...bulletText,
          ...infoBoxText
        ]
          .filter(Boolean)
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
          resultaat${
            results.length === 1
              ? ""
              : "en"
          }
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
              "Trade", "cadeaukaart",
              "korting" of "betaling".
            </p>

          </div>
        `
    }
  `;
}


// =========================================================
// INFO BOX
// =========================================================

function renderInfoBox(infoBox) {
  if (!infoBox) {
    return "";
  }

  return `
    <div class="procedure-info-box">

      <div class="info-box-header">

        <div class="info-box-icon">
          i
        </div>

        <div>

          <h3>
            ${infoBox.title}
          </h3>

          ${
            infoBox.text
              ? `
                <p>
                  ${infoBox.text}
                </p>
              `
              : ""
          }

        </div>

      </div>

      ${
        infoBox.items?.length
          ? `
            <div class="discount-table">

              ${infoBox.items
                .map(
                  (item) => `
                    <div class="discount-row">

                      <span>
                        ${item.amount}
                      </span>

                      <strong>
                        ${item.discount}
                      </strong>

                    </div>
                  `
                )
                .join("")}

            </div>
          `
          : ""
      }

    </div>
  `;
}


// =========================================================
// DETAIL VIEW
// =========================================================

function detailView(procedure) {
  if (!procedure) {
    content.innerHTML = `
      <div class="empty-state">
        <h2>
          Procedure niet gevonden
        </h2>
      </div>
    `;

    return;
  }

  const category =
    categoryById(procedure.category);

  const related =
    data.procedures
      .filter(
        (item) =>
          item.id !== procedure.id &&
          (
            item.parent ===
              procedure.parent ||
            (
              !procedure.parent &&
              !item.parent &&
              item.category ===
                procedure.category
            )
          )
      )
      .slice(0, 4);

  const parent =
    procedure.parent
      ? procedureById(
          procedure.parent
        )
      : null;

  const steps =
    procedure.steps || [];

  content.innerHTML = `
    <div class="breadcrumb">

      <button data-home>
        Overzicht
      </button>

      <span>/</span>

      ${
        parent
          ? `
            <button
              data-open="${parent.id}"
            >
              ${parent.title}
            </button>

            <span>/</span>
          `
          : `
            <button
              data-breadcrumb-category="${category.id}"
            >
              ${category.label}
            </button>

            <span>/</span>
          `
      }

      <span>
        ${procedure.title}
      </span>

    </div>


    <div class="page-title-row">

      <div>

        <p class="eyebrow">
          ${
            parent
              ? parent.title.toUpperCase()
              : category.label.toUpperCase()
          }
        </p>

        <h1>
          ${procedure.title}
        </h1>

        <p>
          ${procedure.summary || ""}
        </p>


        <div class="meta-row">

          ${
            procedure.system
              ? `
                <span class="meta-pill">
                  Systeem:
                  ${procedure.system}
                </span>
              `
              : ""
          }

          ${
            procedure.frequency
              ? `
                <span class="meta-pill">
                  ${procedure.frequency}
                </span>
              `
              : ""
          }

          ${
            procedure.duration
              ? `
                <span class="meta-pill">
                  ${procedure.duration}
                </span>
              `
              : ""
          }

          <span class="meta-pill">
            Bijgewerkt:
            ${data.meta.lastUpdated}
          </span>

        </div>

      </div>


      <button
        class="favorite-button detail-favorite ${
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

        ${steps
          .map(
            (step, index) => `
              <div class="step">

                <div class="step-number">
                  ${index + 1}
                </div>

                <div class="step-content">

                  <h3>
                    ${step.title}
                  </h3>

                  ${
                    step.text
                      ? `
                        <p>
                          ${step.text}
                        </p>
                      `
                      : ""
                  }

                  ${
                    step.bullets?.length
                      ? `
                        <ul class="step-bullets">

                          ${step.bullets
                            .map(
                              (bullet) => `
                                <li>
                                  ${bullet}
                                </li>
                              `
                            )
                            .join("")}

                        </ul>
                      `
                      : ""
                  }

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


        ${renderInfoBox(
          procedure.infoBox
        )}

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


// =========================================================
// BUTTON EVENTS
// =========================================================

function openProcedure(id) {
  const procedure =
    procedureById(id);

  if (!procedure) {
    return;
  }

  state = {
    view: "detail",
    category: null,
    query: "",
    procedureId: id
  };

  if (searchInput) {
    searchInput.value = "";
  }

  render();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function bindContentButtons() {
  content
    .querySelectorAll("[data-open]")
    .forEach((button) => {
      button.addEventListener(
        "click",
        (event) => {
          event.stopPropagation();

          openProcedure(
            button.dataset.open
          );
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

          openProcedure(
            card.dataset.procedureCard
          );
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


// =========================================================
// RENDER
// =========================================================

function render() {
  updateNavigation();

  if (state.query) {
    searchView();
  }

  else if (
    state.view === "home"
  ) {
    homeView();
  }

  else if (
    state.view === "favorites"
  ) {
    const favoriteProcedures =
      data.procedures.filter(
        (procedure) =>
          favorites.has(
            procedure.id
          )
      );

    listView(
      "Favorieten",
      "Je meest gebruikte werkinstructies op één plek.",
      favoriteProcedures
    );
  }

  else if (
    state.view === "category"
  ) {
    const category =
      categoryById(
        state.category
      );

    if (!category) {
      homeView();
    } else {
      const procedures =
        data.procedures.filter(
          (procedure) =>
            procedure.category ===
              category.id &&
            !procedure.parent
        );

      listView(
        category.label,
        category.description,
        procedures
      );
    }
  }

  else if (
    state.view === "detail"
  ) {
    const procedure =
      procedureById(
        state.procedureId
      );

    if (!procedure) {
      homeView();
    }

    else if (
      procedure.type === "folder"
    ) {
      folderView(procedure);
    }

    else {
      detailView(procedure);
    }
  }

  if (clearSearch) {
    clearSearch.classList.toggle(
      "hidden",
      !state.query
    );
  }

  bindContentButtons();
}


// =========================================================
// SEARCH EVENTS
// =========================================================

if (searchInput) {
  searchInput.addEventListener(
    "input",
    () => {
      state.query =
        searchInput.value;

      render();
    }
  );
}

if (clearSearch) {
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
}

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "/" &&
      document.activeElement !==
        searchInput
    ) {
      event.preventDefault();

      searchInput?.focus();
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


// =========================================================
// START APP
// =========================================================

buildNavigation();
render();
