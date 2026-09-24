const data = window.HANDBOOK_DATA;

const content =
  document.getElementById("appContent");

const searchInput =
  document.getElementById("searchInput");

const clearSearch =
  document.getElementById("clearSearch");

const favorites = new Set(
  JSON.parse(
    localStorage.getItem(
      "handbook-favorites"
    ) || "[]"
  )
);

let state = {
  view: "home",
  category: null,
  department: null,
  query: "",
  procedureId: null
};


// =========================================================
// HELPERS
// =========================================================

function categoryById(id) {
  return data.categories.find(
    (category) =>
      category.id === id
  );
}

function procedureById(id) {
  return data.procedures.find(
    (procedure) =>
      procedure.id === id
  );
}

function topLevelProcedures() {
  return data.procedures.filter(
    (procedure) =>
      !procedure.parent
  );
}

function childProcedures(parentId) {
  return data.procedures.filter(
    (procedure) =>
      procedure.parent === parentId
  );
}

function categoryCount(id) {
  return data.procedures.filter(
    (procedure) =>
      procedure.category === id &&
      !procedure.parent
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


// =========================================================
// DEPARTMENTS
// =========================================================

function retailCategories() {
  return data.categories.filter(
    (category) =>
      category.id !== "organic-social"
  );
}

function organicCategory() {
  return data.categories.find(
    (category) =>
      category.id === "organic-social"
  );
}

function retailProcedureCount() {
  const ids =
    retailCategories().map(
      (category) => category.id
    );

  return data.procedures.filter(
    (procedure) =>
      ids.includes(
        procedure.category
      ) &&
      !procedure.parent
  ).length;
}

function organicProcedureCount() {
  return categoryCount(
    "organic-social"
  );
}

// =========================================================
// HEMA ICONEN
// =========================================================

function hemaIcon(name) {
  const icons = {

    dagelijks: `
      <svg
        class="hema-icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <rect
          x="9"
          y="11"
          width="30"
          height="28"
          rx="4"
        />
        <path d="M15 7v8" />
        <path d="M33 7v8" />
        <path d="M9 19h30" />

        <circle cx="17" cy="26" r="1.5" />
        <circle cx="24" cy="26" r="1.5" />
        <circle cx="31" cy="26" r="1.5" />

        <circle cx="17" cy="33" r="1.5" />
        <circle cx="24" cy="33" r="1.5" />
      </svg>
    `,

    orders: `
      <svg
        class="hema-icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="
            M10 18
            L14 38
            H34
            L38 18
            Z
          "
        />
        <path d="M17 18l7-11 7 11" />
        <path d="M14 25h20" />
        <circle cx="19" cy="31" r="1.5" />
        <circle cx="29" cy="31" r="1.5" />
      </svg>
    `,

    betalingen: `
      <svg
        class="hema-icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <rect
          x="7"
          y="12"
          width="34"
          height="25"
          rx="4"
        />
        <path d="M7 20h34" />
        <path d="M13 30h8" />
        <circle cx="34" cy="29" r="3" />
      </svg>
    `,

    klantenservice: `
      <svg
        class="hema-icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="
            M10 27
            V23
            C10 15
            16 9
            24 9
            C32 9
            38 15
            38 23
            V28
          "
        />
        <rect
          x="7"
          y="23"
          width="7"
          height="11"
          rx="3"
        />
        <rect
          x="34"
          y="23"
          width="7"
          height="11"
          rx="3"
        />
        <path
          d="
            M37 34
            C36 39
            32 41
            27 41
          "
        />
        <circle cx="24" cy="41" r="2" />
      </svg>
    `,

    uitingen: `
      <svg
        class="hema-icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="
            M8 22
            H16
            L35 13
            V35
            L16 27
            H8
            Z
          "
        />
        <path d="M16 27l3 12" />
        <path d="M39 19c2 3 2 7 0 10" />
      </svg>
    `,

    advertising: `
      <svg
        class="hema-icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path d="M8 39V28h7v11" />
        <path d="M19 39V21h7v18" />
        <path d="M30 39V11h8v28" />
        <path d="M6 39h35" />
      </svg>
    `,

    banners: `
      <svg
        class="hema-icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <rect
          x="7"
          y="8"
          width="34"
          height="32"
          rx="3"
        />
        <circle cx="33" cy="16" r="3" />
        <path d="M10 36l10-11 7 7 6-6 8 10" />
      </svg>
    `,

    ticketcampagnes: `
      <svg
        class="hema-icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="
            M8 18
            L31 7
            L36 14
            C33 16 33 20 36 22
            L40 28
            L17 41
            L12 33
            C15 31 15 27 12 25
            Z
          "
        />
        <path d="M22 15l12 19" stroke-dasharray="3 4" />
      </svg>
    `,

    organic: `
      <svg
        class="hema-icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <circle cx="24" cy="14" r="6" />
        <circle cx="11" cy="19" r="4" />
        <circle cx="37" cy="19" r="4" />

        <path
          d="
            M14 39
            V32
            C14 26
            18 23
            24 23
            C30 23
            34 26
            34 32
            V39
            Z
          "
        />

        <path
          d="
            M7 36
            V30
            C7 26
            9 24
            13 24
          "
        />

        <path
          d="
            M41 36
            V30
            C41 26
            39 24
            35 24
          "
        />
      </svg>
    `,

    retail: `
      <svg
        class="hema-icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="
            M8 19
            L12 8
            H36
            L40 19
          "
        />

        <path d="M9 19h30v21H9z" />

        <path
          d="
            M8 19
            C8 23
            14 23
            14 19

            C14 23
            20 23
            20 19

            C20 23
            26 23
            26 19

            C26 23
            32 23
            32 19

            C32 23
            40 23
            40 19
          "
        />

        <rect
          x="19"
          y="28"
          width="10"
          height="12"
        />
      </svg>
    `

  };

  return (
    icons[name] ||
    icons.banners
  );
}


function categoryIcon(categoryId) {
  const iconMap = {
    "dagelijks":
      "dagelijks",

    "orders":
      "orders",

    "betalingen":
      "betalingen",

    "klantenservice":
      "klantenservice",

    "uitingen":
      "uitingen",

    "advertising":
      "advertising",

    "banners":
      "banners",

    "ticketcampagnes":
      "ticketcampagnes",

    "organic-social":
      "organic"
  };

  return hemaIcon(
    iconMap[categoryId] ||
    "banners"
  );
}


function departmentIcon(
  departmentId
) {
  if (
    departmentId ===
    "retail-media"
  ) {
    return hemaIcon(
      "retail"
    );
  }

  if (
    departmentId ===
    "organic-social-media"
  ) {
    return hemaIcon(
      "organic"
    );
  }

  return "";
}

// =========================================================
// NAVIGATION
// =========================================================

function categoryButton(
  category
) {
  return `
    <button
      class="nav-item category-child"
      data-category="${category.id}"
      type="button"
    >

      <span class="nav-icon">
        ${categoryIcon(
          category.id
        )}
      </span>

      <span class="nav-label">
        ${category.label}
      </span>

      <span class="nav-count">
        ${categoryCount(
          category.id
        )}
      </span>

    </button>
  `;
}

function organicHandbookButton(
  category
) {
  if (!category) {
    return "";
  }

  return `
    <button
      class="nav-item category-child"
      data-organic-department="organic-social-media"
      type="button"
    >

      <span class="nav-icon">
        ${hemaIcon(
          "organic"
        )}
      </span>

      <span class="nav-label">
        Handboek
      </span>

      <span class="nav-count">
        ${categoryCount(
          category.id
        )}
      </span>

    </button>
  `;
}

function setupNavFolder(
  buttonId,
  contentId
) {
  const button =
    document.getElementById(
      buttonId
    );

  const folderContent =
    document.getElementById(
      contentId
    );

  if (!button || !folderContent) {
    return;
  }

  button.addEventListener(
    "click",
    () => {
      const isOpen =
        button.classList.toggle(
          "open"
        );

      folderContent.classList.toggle(
        "collapsed",
        !isOpen
      );

      button.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      const icon =
        button.querySelector(
          ".nav-folder-icon"
        );

      if (icon) {
        icon.textContent =
          isOpen ? "▾" : "▸";
      }
    }
  );
}

function buildNavigation() {
  const categoryNav =
    document.getElementById(
      "categoryNav"
    );

  if (!categoryNav) {
    return;
  }

  const organic =
    organicCategory();

  const retail =
    retailCategories();

  categoryNav.innerHTML = `

    <div class="nav-folder">

      <button
        id="retailMediaToggle"
        class="nav-folder-button open"
        type="button"
        aria-expanded="true"
      >
        <span class="nav-folder-icon">
          ▾
        </span>

        <span class="nav-folder-title">
          Retail Media
        </span>
      </button>

      <div
        id="retailMediaCategories"
        class="nav-folder-content"
      >
        ${retail
          .map(categoryButton)
          .join("")}
      </div>

    </div>


    <div class="nav-folder">

      <button
        id="organicSocialToggle"
        class="nav-folder-button open"
        type="button"
        aria-expanded="true"
      >
        <span class="nav-folder-icon">
          ▾
        </span>

        <span class="nav-folder-title">
          Organic Social Media
        </span>
      </button>

      <div
        id="organicSocialCategories"
        class="nav-folder-content"
      >
        ${organicHandbookButton(
          organic
        )}
      </div>

    </div>
  `;


  document
    .querySelectorAll(
      "[data-view]"
    )
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          state = {
            view:
              button.dataset.view,
            category: null,
            department: null,
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
    .querySelectorAll(
      "[data-category]"
    )
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          state = {
            view: "category",
            category:
              button.dataset.category,
            department: null,
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
const organicDepartmentButton =
  document.querySelector(
    "[data-organic-department]"
  );

if (organicDepartmentButton) {
  organicDepartmentButton.addEventListener(
    "click",
    () => {
      state = {
        view: "department",
        category: null,
        department:
          "organic-social-media",
        query: "",
        procedureId: null
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
  );
}

  setupNavFolder(
    "retailMediaToggle",
    "retailMediaCategories"
  );

  setupNavFolder(
    "organicSocialToggle",
    "organicSocialCategories"
  );
}


function updateNavigation() {
  document
    .querySelectorAll(".nav-item")
    .forEach((item) => {
      item.classList.remove(
        "active"
      );
    });


  if (
    state.view === "home"
  ) {
    document
      .querySelector(
        '[data-view="home"]'
      )
      ?.classList.add(
        "active"
      );
  }


  if (
    state.view === "favorites"
  ) {
    document
      .querySelector(
        '[data-view="favorites"]'
      )
      ?.classList.add(
        "active"
      );
  }


  if (
    state.view === "category"
  ) {
    document
      .querySelector(
        `[data-category="${state.category}"]`
      )
      ?.classList.add(
        "active"
      );
  }
}


// =========================================================
// PROCEDURE CARDS
// =========================================================

function procedureCard(procedure) {
  const category =
    categoryById(
      procedure.category
    );

  const isFolder =
    procedure.type === "folder";

  return `
    <article
      class="procedure-card ${
        isFolder
          ? "folder-card"
          : ""
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
            favorites.has(
              procedure.id
            )
              ? "active"
              : ""
          }"
          data-favorite="${procedure.id}"
          type="button"
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
            isFolder
              ? `${childProcedures(
                  procedure.id
                ).length} processen`
              : `${procedure.duration || ""}${
                  procedure.duration &&
                  procedure.frequency
                    ? " · "
                    : ""
                }${procedure.frequency || ""}`
          }
        </span>


        <button
          class="open-button"
          data-open="${procedure.id}"
          type="button"
        >
          ${
            isFolder
              ? "Bekijken →"
              : "Openen →"
          }
        </button>

      </div>

    </article>
  `;
}


// =========================================================
// CATEGORY CARDS
// =========================================================

function categoryCard(category) {
  return `
    <button
      class="category-card"
      data-open-category="${category.id}"
      type="button"
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
        ${categoryCount(
          category.id
        )} procedures
      </small>

    </button>
  `;
}


// =========================================================
// DEPARTMENT CARDS
// =========================================================

function departmentCard(
  id,
  title,
  icon,
  description,
  countText
) {
  return `
    <button
      class="category-card department-card"
      data-department="${id}"
      type="button"
    >

      <div class="category-icon">
        ${icon}
      </div>

      <strong>
        ${title}
      </strong>

      <span>
        ${description}
      </span>

      <small>
        ${countText}
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
      (procedure) =>
        procedure.featured
    );

  content.innerHTML = `
    <section class="hero hero-banner">

      <div class="hero-banner-content">

        <p class="eyebrow">
          ONBOARDING HANDBOEK
        </p>

        <h1>
          Wat wil je vandaag doen?
        </h1>

        <p class="hero-copy">
          Vind snel de juiste werkinstructie zonder door lange documenten te zoeken.
        </p>

      </div>

      <div class="hero-stat">
        <strong>
          ${topLevelProcedures().length}
        </strong>
        <span>
          onderdelen in dit concept
        </span>
      </div>

    </section>


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


    <section class="departments-banner">

      <div class="section-heading categories-heading categories-heading-invert">

        <div>
          <p class="eyebrow">
            BLADEREN
          </p>

          <h2>
            Alle afdelingen
          </h2>
        </div>

      </div>


      <div class="category-grid category-grid-in-banner">

        ${departmentCard(
          "retail-media",
          "Retail Media",
          "▦",
          "Werkinstructies, systemen en processen voor Retail Media.",
          `${retailCategories().length} categorieën`
        )}

        ${departmentCard(
          "organic-social-media",
          "Organic Social Media",
          "●",
          "Strategisch en praktisch handboek voor het Organic Social Media team.",
          `${organicProcedureCount()} procedures`
        )}

      </div>

    </section>
  `;
}


// =========================================================
// DEPARTMENT VIEW
// =========================================================

function departmentView(
  department
) {

  if (
    department ===
    "retail-media"
  ) {

    content.innerHTML = `
      <div class="breadcrumb">

        <button
          data-home
          type="button"
        >
          Overzicht
        </button>

        <span>/</span>

        <span>
          Retail Media
        </span>

      </div>


      <div class="page-title-row">

        <div>

          <p class="eyebrow">
            AFDELING
          </p>

          <h1>
            Retail Media
          </h1>

          <p>
            Kies een categorie om de
            bijbehorende werkinstructies
            te bekijken.
          </p>

        </div>

      </div>


      <div class="category-grid">

        ${retailCategories()
          .map(categoryCard)
          .join("")}

      </div>
    `;

    return;
  }


 if (
  department ===
  "organic-social-media"
) {

  const category =
    organicCategory();

  if (!category) {
    homeView();
    return;
  }

  const procedures =
    data.procedures.filter(
      (procedure) =>
        procedure.category ===
          "organic-social" &&
        !procedure.parent
    );

  content.innerHTML = `
    <div class="breadcrumb">

      <button
        data-home
        type="button"
      >
        Overzicht
      </button>

      <span>/</span>

      <span>
        Organic Social Media
      </span>

    </div>


<div class="page-title-row">

  <div>

    <p class="eyebrow">
      WERKINSTRUCTIES
    </p>

    <h1>
      Organic Social Media
    </h1>

    <p>
      ${category.description}
    </p>

  </div>

</div>


${
  category.introduction?.length
    ? `
      <section class="organic-introduction">

        <h2>
          Introductie
        </h2>

        ${category.introduction
          .map(
            (paragraph) => `
              <p>
                ${paragraph}
              </p>
            `
          )
          .join("")}

      </section>
    `
    : ""
}


<div class="procedure-grid">

  ${procedures
    .map(procedureCard)
    .join("")}

</div>
  `;

  return;
}


  homeView();
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
          ${description || ""}
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
    childProcedures(
      folder.id
    );

  content.innerHTML = `
    <div class="breadcrumb">

      <button
        data-home
        type="button"
      >
        Overzicht
      </button>

      <span>/</span>

      <span>
        ${folder.title}
      </span>

    </div>


    <div class="page-title-row">

      <div>

        <p class="eyebrow">
          PROCEDUREMAP
        </p>

        <h1>
          ${folder.title}
        </h1>

        <p>
          ${folder.summary || ""}
        </p>

      </div>

    </div>


    <div class="procedure-grid">

      ${children
        .map(procedureCard)
        .join("")}

    </div>
  `;
}


// =========================================================
// SEARCH
// =========================================================

function searchableText(
  procedure
) {
  return JSON.stringify(
    procedure
  ).toLowerCase();
}


function searchView() {
  const query =
    state.query
      .trim()
      .toLowerCase();

  const results =
    data.procedures.filter(
      (procedure) =>
        searchableText(
          procedure
        ).includes(query)
    );

  listView(
    `Zoeken naar “${state.query}”`,
    `${results.length} resultaat${
      results.length === 1
        ? ""
        : "en"
    }`,
    results
  );
}


// =========================================================
// LINKS
// =========================================================

function renderLinks(links) {
  if (!links?.length) {
    return "";
  }

  return `
    <div class="resource-links">

      ${links
        .map(
          (link) => `
            <a
              class="resource-link"
              href="${link.href}"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${link.label}
              <span>↗</span>
            </a>
          `
        )
        .join("")}

    </div>
  `;
}


// =========================================================
// INFO CARDS
// =========================================================

function renderInfoCards(cards) {
  if (!cards?.length) {
    return "";
  }

  return `
    <div class="step-info-cards">

      ${cards
        .map(
          (card) => `
            <div class="step-info-card">

              <h4>
                ${card.title}
              </h4>

              ${
                card.items?.length
                  ? `
                    <ul>

                      ${card.items
                        .map(
                          (item) =>
                            `<li>${item}</li>`
                        )
                        .join("")}

                    </ul>
                  `
                  : ""
              }

              ${
                card.note
                  ? `
                    <div class="step-info-card-note">
                      ${card.note}
                    </div>
                  `
                  : ""
              }

            </div>
          `
        )
        .join("")}

    </div>
  `;
}


// =========================================================
// STEP SUBSECTION
// =========================================================

function renderStepSubsection(
  subsection
) {
  if (!subsection) {
    return "";
  }

  return `
    <div class="step-subsection">

      <h4>
        ${subsection.title}
      </h4>

      ${
        subsection.steps?.length
          ? `
            <ol class="step-numbered-list">

              ${subsection.steps
                .map(
                  (step) =>
                    `<li>${step}</li>`
                )
                .join("")}

            </ol>
          `
          : ""
      }

      ${
        subsection.note
          ? `
            <div class="step-important-note">
              ${subsection.note}
            </div>
          `
          : ""
      }

    </div>
  `;
}


// =========================================================
// NORMAL STEP
// =========================================================

function renderStep(
  step,
  index
) {

  const hasNumber =
    step.number !== false;

  const displayedNumber =
    step.number !== undefined &&
    step.number !== false
      ? step.number
      : index + 1;

  return `
    <div class="step ${
      !hasNumber
        ? "step-without-number"
        : ""
    }">

      ${
        hasNumber
          ? `
            <div class="step-number">
              ${displayedNumber}
            </div>
          `
          : ""
      }


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
                    (bullet) =>
                      `<li>${bullet}</li>`
                  )
                  .join("")}

              </ul>
            `
            : ""
        }


        ${renderLinks(
          step.links
        )}


        ${renderInfoCards(
          step.infoCards
        )}


        ${renderStepSubsection(
          step.subsection
        )}


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
  `;
}

// =========================================================
// INTRO BOX
// =========================================================

function renderIntroBox(box) {
  if (!box) {
    return "";
  }

  return `
    <div class="intro-box">

      <div class="intro-box-icon">
        i
      </div>

      <div>

        <h2>
          ${box.title}
        </h2>

        <p>
          ${box.text || ""}
        </p>

      </div>

    </div>
  `;
}


// =========================================================
// INFO SECTIONS
// =========================================================

function renderInfoSections(
  sections
) {
  if (!sections?.length) {
    return "";
  }

  return `
    <div class="info-sections-grid">

      ${sections
        .map(
          (section) => `
            <div
              class="contact-info-box ${
                section.type ===
                "warning"
                  ? "contact-warning"
                  : ""
              }"
            >

              <h3>
                ${section.title}
              </h3>

              ${
                section.text
                  ? `
                    <p>
                      ${section.text}
                    </p>
                  `
                  : ""
              }

              ${
                section.items?.length
                  ? `
                    <div class="contact-list">

                      ${section.items
                        .map(
                          (item) => `
                            <div class="contact-row">

                              <strong>
                                ${item.label}
                              </strong>

                              ${
                                item.href
                                  ? `
                                    <a
                                      href="${item.href}"
                                      ${
                                        item.href.startsWith(
                                          "http"
                                        )
                                          ? `target="_blank" rel="noopener noreferrer"`
                                          : ""
                                      }
                                    >
                                      ${item.value}
                                    </a>
                                  `
                                  : `
                                    <span>
                                      ${item.value}
                                    </span>
                                  `
                              }

                            </div>
                          `
                        )
                        .join("")}

                    </div>
                  `
                  : ""
              }

            </div>
          `
        )
        .join("")}

    </div>
  `;
}


// =========================================================
// INFO BOX
// =========================================================

function renderInfoBox(box) {
  if (!box) {
    return "";
  }

  return `
    <div class="procedure-info-box">

      <h3>
        ${box.title}
      </h3>

      ${
        box.text
          ? `
            <p>
              ${box.text}
            </p>
          `
          : ""
      }

      ${
        box.items?.length
          ? `
            <div class="discount-table">

              ${box.items
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
// PROCEDURE SUBSECTIONS
// =========================================================

function renderSubsections(
  sections
) {
  if (!sections?.length) {
    return "";
  }

  return sections
    .map(
      (section) => `
        <div class="procedure-subsection">

          <div class="procedure-subsection-header">

            <p class="eyebrow">
              ONDERDEEL
            </p>

            <h2>
              ${section.title}
            </h2>

            ${
              section.text
                ? `
                  <p>
                    ${section.text}
                  </p>
                `
                : ""
            }

            ${renderLinks(
              section.links
            )}

          </div>


          ${
            section.steps?.length
              ? `
                <div class="subsection-steps">

                  ${section.steps
                    .map(
                      (step, index) =>
                        renderStep(
                          step,
                          index
                        )
                    )
                    .join("")}

                </div>
              `
              : ""
          }


          ${
            section.subsection
              ? `
                <div class="nested-subsection">

                  <h3>
                    ${section.subsection.title}
                  </h3>

                  ${
                    section.subsection.steps?.length
                      ? `
                        <ol class="step-numbered-list">

                          ${section.subsection.steps
                            .map(
                              (step) =>
                                `<li>${step}</li>`
                            )
                            .join("")}

                        </ol>
                      `
                      : ""
                  }

                  ${
                    section.subsection.note
                      ? `
                        <div class="step-important-note">
                          ${section.subsection.note}
                        </div>
                      `
                      : ""
                  }

                </div>
              `
              : ""
          }


          ${
            section.cards?.length
              ? `
                <div class="summary-cards">

                  ${section.cards
                    .map(
                      (card) => `
                        <article class="summary-card">

                          <h3>
                            ${card.title}
                          </h3>

                          ${
                            card.lines?.length
                              ? `
                                <ul>

                                  ${card.lines
                                    .map(
                                      (line) =>
                                        `<li>${line}</li>`
                                    )
                                    .join("")}

                                </ul>
                              `
                              : ""
                          }

                        </article>
                      `
                    )
                    .join("")}

                </div>
              `
              : ""
          }


          ${
            section.note
              ? `
                <div class="subsection-note">
                  ${section.note}
                </div>
              `
              : ""
          }

        </div>
      `
    )
    .join("");
}


// =========================================================
// DETAIL VIEW
// =========================================================

function detailView(procedure) {
  const category =
    categoryById(
      procedure.category
    );

  const parent =
    procedure.parent
      ? procedureById(
          procedure.parent
        )
      : null;

  const related =
    data.procedures
      .filter(
        (item) =>
          item.id !==
            procedure.id &&
          item.category ===
            procedure.category &&
          !item.parent
      )
      .slice(0, 4);

  content.innerHTML = `
    <div class="breadcrumb">

      <button
        data-home
        type="button"
      >
        Overzicht
      </button>

      <span>/</span>

      <span>
        ${procedure.title}
      </span>

    </div>


    <div class="page-title-row">

      <div>

        <p class="eyebrow">
          ${
            parent
              ? parent.title
              : category?.label || ""
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

          ${
            data.meta?.lastUpdated
              ? `
                <span class="meta-pill">
                  Bijgewerkt:
                  ${data.meta.lastUpdated}
                </span>
              `
              : ""
          }

        </div>

      </div>


      <button
        class="favorite-button detail-favorite ${
          favorites.has(
            procedure.id
          )
            ? "active"
            : ""
        }"
        data-favorite="${procedure.id}"
        type="button"
      >
        ★
      </button>

    </div>


    ${
      procedure.caution
        ? `
          <div class="notice warning">

            <strong>
              Let op
            </strong>

            <p>
              ${procedure.caution}
            </p>

          </div>
        `
        : ""
    }


    ${renderIntroBox(
      procedure.introBox
    )}


    ${renderInfoSections(
      procedure.infoSections
    )}


    <div class="detail-layout">

      <section class="steps-panel">

        ${(procedure.steps || [])
          .map(
            (step, index) =>
              renderStep(
                step,
                index
              )
          )
          .join("")}


        ${renderSubsections(
          procedure.subsections
        )}


        ${renderInfoBox(
          procedure.infoBox
        )}

      </section>


      <aside class="side-panel">

        <h3>
          Over deze instructie
        </h3>

        <p>
          Deze pagina is onderdeel
          van het digitale
          onboarding-handboek.
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
                      type="button"
                    >
                      → ${item.title}
                    </button>
                  `
                )
                .join("")
            : `
              <p>
                Geen gerelateerde
                procedures.
              </p>
            `
        }

      </aside>

    </div>
  `;
}


// =========================================================
// OPEN PROCEDURE
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
    department: null,
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


// =========================================================
// CONTENT BUTTON EVENTS
// =========================================================

function bindContentButtons() {

  content
    .querySelectorAll(
      "[data-open]"
    )
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
            card.dataset
              .procedureCard
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
              button.dataset
                .openCategory,
            department: null,
            query: "",
            procedureId: null
          };

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
      "[data-department]"
    )
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          state = {
            view: "department",
            category: null,
            department:
              button.dataset.department,
            query: "",
            procedureId: null
          };

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
      "[data-home]"
    )
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          state = {
            view: "home",
            category: null,
            department: null,
            query: "",
            procedureId: null
          };

          render();

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });

        }
      );

    });
}


// =========================================================
// MAIN RENDER
// =========================================================

function render() {

  updateNavigation();


  if (
    state.query.trim()
  ) {

    searchView();

  }


  else if (
    state.view === "home"
  ) {

    homeView();

  }


  else if (
    state.view === "department"
  ) {

    departmentView(
      state.department
    );

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
      "Je opgeslagen procedures.",
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
      procedure.type ===
      "folder"
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
        department: null,
        query: "",
        procedureId: null
      };

      render();

    }
  );

}


// =========================================================
// KEYBOARD
// =========================================================

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
// START
// =========================================================

buildNavigation();
render();
