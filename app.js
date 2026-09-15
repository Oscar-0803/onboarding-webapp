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
// NAVIGATION
// =========================================================

function categoryButton(category) {
  return `
    <button
      class="nav-item category-child"
      data-category="${category.id}"
      type="button"
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
      data-category="${category.id}"
      type="button"
    >
      <span class="nav-icon">
        ${category.icon}
      </span>

      <span class="nav-label">
        Handboek
      </span>

      <span class="nav-count">
        ${categoryCount(category.id)}
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

  const organicCategory =
    data.categories.find(
      (category) =>
        category.id ===
        "organic-social"
    );

  const retailCategories =
    data.categories.filter(
      (category) =>
        category.id !==
        "organic-social"
    );

  categoryNav.innerHTML = `

    <!-- RETAIL MEDIA -->

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

        ${retailCategories
          .map(categoryButton)
          .join("")}

      </div>

    </div>


    <!-- ORGANIC SOCIAL MEDIA -->

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
          organicCategory
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
// HOME
// =========================================================

function homeView() {
  const featured =
    topLevelProcedures().filter(
      (procedure) =>
        procedure.featured
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
          Vind snel de juiste
          werkinstructie zonder door
          lange documenten te zoeken.
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


    <div
      class="section-heading categories-heading"
    >

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
  return `
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

      ${
        parent
          ? `
            <button
              data-open="${parent.id}"
              type="button"
            >
              ${parent.title}
            </button>

            <span>/</span>
          `
          : ""
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

          <span class="meta-pill">
            Bijgewerkt:
            ${data.meta.lastUpdated}
          </span>

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
            query: "",
            procedureId: null
          };

          render();

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
            query: "",
            procedureId: null
          };

          render();

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
