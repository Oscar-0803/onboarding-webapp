window.HANDBOOK_DATA = {
  meta: {
    lastUpdated: "14 september 2026",
    sourceStatus:
      "Gebaseerd op interne onboarding- en teamdocumentatie."
  },

  categories: [
    {
      id: "dagelijks",
      label: "Dagelijks",
      icon: "☀",
      description:
        "Dagelijkse inboxen en terugkerende werkzaamheden"
    },
    {
      id: "orders",
      label: "Orders",
      icon: "⇄",
      description:
        "GDL-orders en interne Trade-orders"
    },
    {
      id: "betalingen",
      label: "Betalingen",
      icon: "€",
      description:
        "Bankbetalingen verwerken"
    },
    {
      id: "klantenservice",
      label: "Klantenservice",
      icon: "✉",
      description:
        "HEMA Tickets en herroepingen"
    },
    {
      id: "uitingen",
      label: "Uitingen",
      icon: "▤",
      description:
        "Broadsign en rCOS"
    },
    {
      id: "advertising",
      label: "Advertising",
      icon: "◎",
      description:
        "Google Ad Manager"
    },
    {
      id: "banners",
      label: "Online Banners",
      icon: "◇",
      description:
        "Online banners maken en verwerken"
    },
    {
      id: "organic-social-belgie",
      label: "België",
      icon: "🇧🇪",
      description:
        "Strategisch en praktisch handboek voor Organic Social Media België"
    }
  ],

  procedures: [

    // =====================================================
    // RETAIL MEDIA - HEM GIFTCARDS
    // =====================================================

    {
      id: "hem-giftcards",
      category: "dagelijks",

      title: "HEM Giftcards",

      summary:
        "Werkwijze voor een online bestelde cadeaukaart die niet is aangekomen.",

      system: "Consumenten Trade",
      frequency: "Wanneer nodig",
      duration: "± 5–10 min",

      featured: false,

      tags: [
        "hem giftcards",
        "giftcards",
        "cadeaukaart",
        "consumenten trade",
        "blokkeren"
      ],

      caution:
        "Controleer altijd eerst of de cadeaukaart is gebruikt voordat je deze blokkeert.",

      steps: [
        {
          title: "Ontvang de melding",
          text:
            "Je krijgt een mail, vaak vanuit klantenservice of consumentenservice, dat een online bestelde cadeaukaart nog niet is aangekomen.",
          image: ""
        },
        {
          title: "Zoek de order op",
          text:
            "Zoek de order op in Consumenten Trade onder 'Orders' → 'Alle orders'.",
          image: ""
        },
        {
          title: "Vul het ordernummer in",
          text:
            "Vul het ordernummer zonder spaties in en klik op zoeken.",
          image: ""
        },
        {
          title: "Open de orderdetails",
          text:
            "Dubbelklik op de order. Je krijgt vervolgens de details van de order te zien.",
          image:
            "images/hem-giftcards/04-orderdetails.png"
        },
        {
          title: "Controleer de orderdatum",
          text:
            "Check de orderdatum. Is de order meer dan een week geleden geplaatst? Dan is de order waarschijnlijk zoekgeraakt met de post en moet de cadeaukaart worden geblokkeerd.",
          image: ""
        },
        {
          title:
            "Controleer eerst of de cadeaukaart is gebruikt",
          text:
            "Klik één keer op het product onder 'Producten', zodat deze grijs gearceerd is. Klik vervolgens op 'Toon Kaarten'.",
          image:
            "images/hem-giftcards/06-toon-kaarten.png"
        },
        {
          title:
            "Controleer de status van de cadeaukaart",
          text:
            "Arceer de cadeaukaart grijs en klik vervolgens op 'Kaartinformatie'.",
          image:
            "images/hem-giftcards/07-kaartinformatie-openen.png"
        },
        {
          title: "Bekijk de kaartinformatie",
          text:
            "Controleer in de kaartinformatie onder andere de huidige balans van de cadeaukaart.",
          image:
            "images/hem-giftcards/08-kaartinformatie.png"
        },
        {
          title:
            "Blokkeer de cadeaukaart indien deze niet is gebruikt",
          text:
            "Is de huidige balans hetzelfde als de originele waarde? Dan is de cadeaukaart niet gebruikt en kan deze worden geblokkeerd. Ga terug naar het vorige venster, selecteer de cadeaukaart opnieuw en klik op 'Blokkeer kaart'.",
          image: ""
        },
        {
          title:
            "Bevestig de afhandeling per mail",
          text:
            "Mail terug dat de cadeaukaart is geblokkeerd en dat klantenservice of consumentenservice de klant kan vergoeden. Zet altijd de mailbox in CC.",
          image: ""
        }
      ]
    },

    // =====================================================
    // HEMA ZAKELIJK
    // =====================================================

    {
      id: "hema-zakelijk",
      category: "dagelijks",

      title: "HEMA Zakelijk",

      summary:
        "Werkinstructies voor verschillende processen binnen HEMA Zakelijk.",

      system: "HEMA Zakelijk",
      frequency: "Wanneer nodig",
      duration: "Meerdere processen",

      featured: true,
      type: "folder",

      tags: [
        "hema zakelijk",
        "zakelijk",
        "orders"
      ]
    },

    {
      id: "zakelijke-order-annuleren",
      category: "dagelijks",
      parent: "hema-zakelijk",

      title:
        "Annuleren van zakelijke orders",

      summary:
        "Stappenplan voor het annuleren van een zakelijke cadeaukaartorder.",

      system: "Zakelijk Trade",
      frequency: "Wanneer nodig",
      duration: "± 5 min",

      featured: false,

      caution:
        "Controleer zorgvuldig of je het juiste ordernummer hebt geselecteerd voordat je de order annuleert.",

      steps: [
        {
          title: "Ontvang de aanvraag",
          text:
            "Je krijgt een mail, vaak vanuit klantenservice of consumentenservice, met het verzoek om een cadeaukaart te annuleren.",
          image:
            "images/hema-zakelijk/annuleren/01-aanvraag.png"
        },
        {
          title: "Zoek de order op",
          text:
            "Zoek de order op in Zakelijk Trade onder 'Orders' → 'Afgehandeld'.",
          image: ""
        },
        {
          title: "Vul het ordernummer in",
          text:
            "Vul het ordernummer zonder spaties in en klik op zoeken.",
          image: ""
        },
        {
          title:
            "Selecteer en annuleer de order",
          text:
            "Selecteer de order zodat deze donkergrijs gearceerd is. Klik vervolgens op 'Order annuleren' en daarna op 'OK'.",
          image: ""
        },
        {
          title: "Bevestig de annulering",
          text:
            "De order is geannuleerd en de cadeaukaart is geblokkeerd of gerefund. Stuur vervolgens een bevestiging naar de betreffende inbox.",
          image: ""
        }
      ]
    },

    {
      id: "nieuwe-relatie-toevoegen",
      category: "dagelijks",
      parent: "hema-zakelijk",

      title: "Nieuwe relatie toevoegen",

      summary:
        "Stappenplan voor het toevoegen van een nieuwe zakelijke relatie in Trade.",

      system: "Zakelijk Trade",
      frequency: "Wanneer nodig",
      duration: "± 5–10 min",

      featured: false,

      caution:
        "Controleer het laatst gebruikte klantnummer zorgvuldig voordat je een nieuwe debtor code aanmaakt.",

      steps: [
        {
          title: "Open Relaties in Trade",
          text:
            "Ga naar Trade en klik bovenin op 'Relaties'.",
          image: ""
        },
        {
          title:
            "Zoek de actieve zakelijke relaties",
          text:
            "Selecteer bij het veld 'Actief' de waarde 'Ja' en klik op 'Zoeken'.",
          image:
            "images/hema-zakelijk/nieuwe-relatie/02-actieve-relaties.png"
        },
        {
          title: "Sorteer op klantnummer",
          text:
            "Klik op 'Klantnummer'. Alle relaties worden nu op klantnummer gesorteerd. Kopieer het laatste klantnummer.",
          image:
            "images/hema-zakelijk/nieuwe-relatie/03-klantnummer.png"
        },
        {
          title:
            "Maak een nieuwe relatie aan",
          text:
            "Klik bovenaan op 'Nieuw'. Vul bij 'Debtor code' het gekopieerde klantnummer in en tel hier 1 bij op.",
          image: ""
        },
        {
          title:
            "Vul de relatiegegevens in",
          text:
            "Vul de overige gegevens van de nieuwe relatie in.",
          bullets: [
            "Klantnaam",
            "E-mailadres",
            "KvK nummer",
            "BTW nummer",
            "Voeg bij 'Adressen' een adres toe",
            "Voeg bij 'Contactpers.' een contactpersoon toe"
          ],
          image: ""
        },
        {
          title:
            "Sla de nieuwe relatie op",
          text:
            "Klik op 'Opslaan'. Je kunt nu een order invoeren en de nieuwe relatie gebruiken.",
          image: ""
        }
      ]
    },

    {
      id: "orders-handmatig-invoeren",
      category: "dagelijks",
      parent: "hema-zakelijk",

      title:
        "Orders handmatig invoeren",

      summary:
        "Stappenplan voor het handmatig invoeren van een zakelijke order in Trade.",

      system: "Zakelijk Trade",
      frequency: "Wanneer nodig",
      duration: "± 5–10 min",

      featured: false,

      steps: [
        {
          title: "Ga naar Orders",
          text:
            "Ga in Trade naar 'Orders'.",
          image: ""
        },
        {
          title:
            "Maak een nieuwe order aan",
          text:
            "Klik op 'Nieuw' en vul de gemarkeerde gegevens in bij 'Klant type' en 'Gewenste leverdatum'. Gebruik klanttype 'Zakelijk'.",
          image: ""
        },
        {
          title: "Selecteer de klant",
          text:
            "Klik op het pijltje bij 'Klant'. Zoek de juiste klant op en selecteer deze.",
          image: ""
        },
        {
          title:
            "Vul eventuele referenties in",
          text:
            "Vul indien aanwezig de order- of factuurreferentie in bij 'Klant order referentie' en/of 'Klant factuur referentie'.",
          image: ""
        },
        {
          title:
            "Voeg de cadeaukaarten toe",
          text:
            "Klik op 'Voeg toe' om soort, aantal en waarde van de cadeaukaarten toe te voegen. Kies daarna bij 'Verpakking/sjabloon' of verpakking nodig is.",
          image: ""
        },
        {
          title: "Sla de order op",
          text: "Klik op 'Opslaan'.",
          image: ""
        },
        {
          title:
            "Controleer eventuele korting",
          text:
            "Is er sprake van korting buiten de kortingsstaffel? Volg dan de instructie 'Korting'.",
          image: ""
        },
        {
          title:
            "Controleer of een PO-nummer nodig is",
          text:
            "Is een PO-nummer nodig? Controleer en verwerk dit voordat de order definitief wordt opgeslagen.",
          image: ""
        },
        {
          title:
            "Controleer het subtotaal",
          text:
            "Controleer of het subtotaalbedrag klopt.",
          image: ""
        },
        {
          title:
            "Sla de gecontroleerde order definitief op",
          text:
            "Alles dubbel gecontroleerd? Klik opnieuw op 'Opslaan'.",
          image: ""
        }
      ]
    },

    {
      id: "korting",
      category: "dagelijks",
      parent: "hema-zakelijk",

      title: "Korting",

      summary:
        "Werkwijze voor het toevoegen van korting buiten de kortingsstaffel.",

      system: "Zakelijk Trade",
      frequency: "Wanneer nodig",
      duration: "± 2–5 min",

      featured: false,

      steps: [
        {
          title:
            "Schakel de orderwaardekorting uit",
          text:
            "Vink 'Bereken Orderwaardekorting in deze order' uit.",
          image:
            "images/hema-zakelijk/korting/01-orderwaardekorting.png"
        },
        {
          title: "Voeg de korting toe",
          text:
            "Voeg de korting in euro's toe bij 'Productkorting (incl.)'. Bereken eerst het kortingsbedrag.",
          image:
            "images/hema-zakelijk/korting/02-productkorting.png"
        }
      ],

      infoBox: {
        title: "Staffelkorting",
        text:
          "Gebruik onderstaande staffel om het kortingspercentage te controleren.",
        items: [
          {
            amount: "> €5.000",
            discount: "4%"
          },
          {
            amount: "> €25.000",
            discount: "5%"
          },
          {
            amount: "> €50.000",
            discount: "6%"
          },
          {
            amount: "> €100.000",
            discount: "7%"
          },
          {
            amount: "> €250.000",
            discount: "8%"
          },
          {
            amount: "> €500.000",
            discount: "9%"
          }
        ]
      }
    },

    // =====================================================
    // ORDERS
    // =====================================================

    {
      id: "gdl-order",
      category: "orders",

      title:
        "Order invoeren Goede Doelen Loterijen (GDL)",

      summary:
        "Stappenplan voor het verwerken en invoeren van orders van de Nationale Postcode Loterij en VriendenLoterij.",

      system: "Zakelijk Trade",
      frequency:
        "Wanneer een GDL-order binnenkomt",
      duration: "± 15–20 min",

      featured: true,

      caution:
        "Controleer klant, PO-nummer, geldigheid, afleverdatum en afleveradres zorgvuldig.",

      steps: [
        {
          title:
            "Open de ontvangen inkooporder",
          text:
            "In de inbox *HEM zakelijk ontvang je nieuwe inkooporders van de Goede Doelen Loterijen. Gebruik de inkooporder als bron voor de ordergegevens.",
          image:
            "images/gdl/01-inkooporder.png"
        },
        {
          title:
            "Maak een nieuwe zakelijke order aan",
          text:
            "Ga naar Zakelijk Trade → Orders → Nieuw → + Nieuw.",
          image: ""
        },
        {
          title:
            "Selecteer het juiste klanttype",
          text:
            "Selecteer bij klanttype 'Zakelijk'.",
          image: ""
        },
        {
          title:
            "Selecteer de juiste klant",
          text:
            "De klant is altijd 'NPL - GDL' of 'VL - GDL'.",
          image: ""
        },
        {
          title: "Vul het PO-nummer in",
          text:
            "Vul bij 'Klant Order Referentie' en 'Klant factuur referentie' het PO-nummer in.",
          image: ""
        },
        {
          title:
            "Vul aanvullende orderinformatie in",
          text:
            "Open 'Meer informatie' en vul bij 'Instructies voor Uitvoerder' de geldigheid en afleverdatum in.",
          bullets: [
            "Kaart geldig t/m: afleverdatum + 2 dagen + 2 jaar",
            "Gebruik de leverdatum van de inkooporder"
          ],
          image: ""
        },
        {
          title:
            "Voeg het juiste product toe",
          text:
            "Ga naar 'Product' → 'Voeg toe' en selecteer 'NPL/VL - fysieke cadeaukaarten redemptie'.",
          image:
            "images/gdl/07-product-toevoegen.png"
        },
        {
          title:
            "Vul aantal en waarde in",
          text:
            "Vul het aantal cadeaukaarten en de waarde per cadeaukaart in.",
          image: ""
        },
        {
          title:
            "Vul de expiratiedatum in",
          text:
            "Ga naar 'Opties', vul de expiratiedatum in, vink 'Afw. Afleveradres' aan en ga naar 'Afleveradres'.",
          bullets: [
            "Expiratiedatum = datum geldigheid + 1 dag",
            "Controleer 'Ship to' op de inkooporder",
            "Adres kan van Sidekix of Pondres zijn"
          ],
          image: ""
        },
        {
          title:
            "Vul het afleveradres in",
          text:
            "Gebruik altijd het afleveradres dat op de inkooporder staat.",
          image:
            "images/gdl/10-afleveradres.png"
        },
        {
          title: "Sla de order op",
          text: "Klik op 'Opslaan'.",
          image: ""
        },
        {
          title:
            "Controleer alle gegevens",
          text:
            "Controleer alle ingevoerde gegevens aan de hand van de inkooporder.",
          image: ""
        },
        {
          title:
            "Sla de order definitief op",
          text:
            "Als alles klopt, klik je opnieuw op 'Opslaan'.",
          image: ""
        },
        {
          title:
            "Mail de orderinformatie intern",
          text:
            "Stuur een e-mail met het Trade-ordernummer en de expiratiedatum. Voeg de inkooporder bij en zet *HEM zakelijk in CC.",
          image:
            "images/gdl/14-interne-mail.png"
        },
        {
          title:
            "Mail de order naar Prisma",
          text:
            "Mail Prisma het inkooporderformulier en vermeld het Trade-ordernummer, de leverdatum en geldigheid.",
          bullets: [
            "info@prismadirect.nl",
            "lizette@prismadirect.nl"
          ],
          subsection: {
            title:
              "Activeren van de order",
            steps: [
              "Ga naar Trade → Afgehandeld en vul het ordernummer in.",
              "Dubbelklik op de order en kopieer de activatiecode.",
              "Sluit de order, selecteer de order en klik op 'Activeer order'.",
              "Plak de activatiecode en klik op 'Activeren'."
            ],
            note:
              "Controleer op de geplande leverdatum de activatie en activeer de order handmatig."
          },
          image: ""
        }
      ]
    },

    {
      id: "trade-order",
      category: "orders",

      title:
        "Nieuwe interne order invoeren in Trade",

      summary:
        "Stappenplan voor het invoeren en afhandelen van een interne order in Trade.",

      system: "Zakelijk Trade",
      frequency: "Wanneer nodig",
      duration: "± 10–15 min",

      featured: true,

      caution:
        "Controleer of het interne bestelformulier volledig is ingevuld en toestemming bevat.",

      steps: [
        {
          title:
            "Controleer het interne bestelformulier",
          text:
            "Je ontvangt van een interne afdeling een ingevuld intern bestelformulier met toestemming van de kostenplaatsverantwoordelijke.",
          image: ""
        },
        {
          title:
            "Maak een nieuwe order aan",
          text:
            "Ga naar Trade → Orders → Nieuw → + Nieuw.",
          image: ""
        },
        {
          title:
            "Selecteer klanttype en klant",
          text:
            "Klanttype: Zakelijk. Klant: 'HEMA BV New Services - interne orders'.",
          image: ""
        },
        {
          title:
            "Voeg het gewenste product toe",
          text:
            "Ga naar Producten → Voeg toe en vul product en eventueel afleveradres in.",
          bullets: [
            "Digitaal: E-gift Stippen",
            "Fysiek: HEMA cadeaukaart logo"
          ],
          image: ""
        },
        {
          title:
            "Verwijder verzend- en handelingskosten",
          text:
            "Ga na opslaan naar Toeslagen, zet automatische toeslagen uit en verwijder verzend- en handelingskosten.",
          image: ""
        },
        {
          title:
            "Vul de klant order referentie in",
          text:
            "Vul bij 'Klant Order Referentie' de kostenplaats in.",
          image: ""
        },
        {
          title: "Sla de order op",
          text:
            "De order kan nu worden opgeslagen.",
          image: ""
        },
        {
          title:
            "Mail de orderinformatie",
          text:
            "Stuur het ordernummer en de kostenplaats en voeg het interne bestelformulier bij.",
          bullets: [
            "b2b-cadeaukaarten@hema.nl",
            "henneke.velthove@hema.nl"
          ],
          image: ""
        },
        {
          title:
            "Controleer de verwerking in Trade",
          text:
            "De order wordt direct doorgezet in Trade.",
          image: ""
        },
        {
          title:
            "Lever digitale cadeaukaarten zelf uit",
          text:
            "Houd digitale cadeaukaarten goed in de gaten en lever deze zelf aan de collega van de betreffende afdeling.",
          image: ""
        },
        {
          title:
            "Controleer fysiek afleveradres",
          text:
            "Bij fysieke cadeaukaarten stuurt Prisma de kaarten naar het opgegeven afleveradres.",
          image: ""
        }
      ],

      subsections: [
        {
          title:
            "Digitale cadeaukaart uitleveren",

          text:
            "Gebruik onderstaande stappen wanneer de interne order digitale cadeaukaarten bevat.",

          steps: [
            {
              title:
                "Open de ontvangen e-mail",
              text:
                "Je ontvangt een e-mail in de *HEMA zakelijk inbox.",
              image:
                "images/trade-order/01-digitale-cadeaukaart-mail.png"
            },
            {
              title:
                "Download de bestanden",
              text:
                "Download de digitale cadeaukaartbestanden en controleer het ordernummer.",
              image: ""
            },
            {
              title:
                "Deel met de aanvrager",
              text:
                "Zet de bestanden in een map en deel deze per e-mail met de aanvrager.",
              image: ""
            }
          ],

          subsection: {
            title:
              "Activeren van de order",
            steps: [
              "Ga naar Trade → Afgehandeld en zoek het ordernummer.",
              "Dubbelklik op de order en kopieer de activatiecode.",
              "Sluit de order, selecteer deze en klik op 'Activeer order'.",
              "Plak de activatiecode en klik op 'Activeren'."
            ]
          }
        }
      ]
    },

    // =====================================================
    // BETALINGEN
    // =====================================================

    {
      id: "bank-betalingen",
      category: "betalingen",

      title: "Bank betalingen",

      summary:
        "Stappenplan voor het controleren en verwerken van binnengekomen betalingen.",

      system: "Zakelijk Trade",
      frequency:
        "Wanneer betalingen binnenkomen",
      duration: "± 5 min",

      featured: true,

      caution:
        "Controleer altijd of het betaalde bedrag overeenkomt met de order.",

      steps: [
        {
          title:
            "Open de e-mail met de betaling",
          text:
            "Open het mailtje van Anita of Henneke, vaak met onderwerp 'Bank'.",
          image:
            "images/bank-betalingen/01-bankmail.png"
        },
        {
          title: "Zoek het ordernummer",
          text:
            "Zoek het betreffende ordernummer in de e-mail.",
          image: ""
        },
        {
          title: "Ga naar Orders",
          text:
            "Ga in Trade naar 'Orders'.",
          image: ""
        },
        {
          title:
            "Zoek bij Wacht op betaling",
          text:
            "Ga naar 'Wacht op betaling' en vul het ordernummer in.",
          image: ""
        },
        {
          title:
            "Controleer de betaling",
          text:
            "Controleer of het betaalde bedrag overeenkomt met de order.",
          image: ""
        },
        {
          title: "Lever de order uit",
          text:
            "Selecteer de order en klik op 'Uitleveren'.",
          image: ""
        }
      ],

      infoBox: {
        title:
          "Klant zegt betaling te hebben gedaan?",
        text:
          "Vraag dit na bij Anita, Henneke, b2b.cadeaukaarten@hema.nl of henneke.velthove@hema.nl. Vermeld het ordernummer en vraag de klant om een betaalbewijs."
      }
    },

    // =====================================================
    // KLANTENSERVICE
    // =====================================================

    {
      id: "hema-tickets",
      category: "klantenservice",

      title:
        "Mailbox Klantenservice HEMA Tickets",

      summary:
        "Werkinstructies voor vragen, niet ontvangen tickets, herroepingen en SnowWorld.",

      system:
        "HEMA Tickets / Tickets CMS",
      frequency: "Dagelijks",
      duration:
        "Afhankelijk van de aanvraag",

      featured: true,

      introBox: {
        title: "*HEM Tickets CS",
        text:
          "In de tickets inbox komen met name vragen vanuit klantenservice omtrent orders/codes die geblokkeerd moeten worden of orders die door een typefout niet juist zijn afgeleverd."
      },

      infoSections: [
        {
          title:
            "Contactgegevens partners",
          items: [
            {
              label: "Center Parcs",
              value:
                "sales.nl@groupepvcp.com",
              href:
                "mailto:sales.nl@groupepvcp.com"
            },
            {
              label: "SnowWorld",
              value:
                "resellers@snowworld.com",
              href:
                "mailto:resellers@snowworld.com"
            },
            {
              label:
                "Flywise / GCT & GoVolta",
              value:
                "partners@flywise.nl",
              href:
                "mailto:partners@flywise.nl"
            }
          ]
        },
        {
          title: "Let op",
          text:
            "Mail altijd vanuit de inbox en zet de inbox altijd in CC zodat communicatie teruggevonden kan worden.",
          type: "warning"
        },
        {
          title:
            "Contactgegevens HappyFlow",
          items: [
            {
              label: "Edo",
              value: "Edo@happyflow.io",
              href:
                "mailto:Edo@happyflow.io"
            },
            {
              label: "Francis",
              value:
                "francis@happyflow.io",
              href:
                "mailto:francis@happyflow.io"
            }
          ]
        },
        {
          title: "Linkjes",
          items: [
            {
              label: "Tickets CMS",
              value: "Open Tickets CMS",
              href:
                "https://cms.tickets-shop.ui.hema.digital/admin/auth/login?redirectTo=%2Fcontent-manager%2FcollectionType%2Fapi%3A%3Aproduct.product%2F3"
            }
          ]
        }
      ],

      subsections: [
        {
          title:
            "Binnenkomende aanvragen Tickets inbox",

          subsection: {
            title:
              "E-mail met ticket niet ontvangen",
            steps: [
              "Ga naar Tickets CMS → Admin → Order overview.",
              "Vul het ordernummer zonder spaties in. Twee groene kruisjes betekent dat betaling is ontvangen en tickets zijn verzonden.",
              "Ga naar de inbox *HEMA Tickets en zoek het ordernummer.",
              "Klik op 'Doorsturen' en stuur de mail opnieuw naar het opgegeven e-mailadres."
            ]
          }
        },

        {
          title: "Tickets herroepen",

          subsection: {
            title: "Tickets herroepen",
            steps: [
              "Controleer of de klant binnen de herroepingstermijn van 14 dagen zit.",
              "Zoek het ordernummer in Tickets CMS en open de order.",
              "Kopieer de betreffende codes en mail deze naar de partner.",
              "Na akkoord op annulering kan klantenservice de klant vergoeden."
            ]
          }
        },

        {
          title:
            "1.1 Handleiding herroeping SnowWorld",

          links: [
            {
              label:
                "Handleiding Vintia SnowWorld partners_versie1.pdf",
              href:
                "https://hemaoffice.sharepoint.com/:b:/r/sites/RetailMedia/Gedeelde%20documenten/General/Stages/Handleiding%20Vintia%20SnowWorld%20partners_versie1.pdf?d=w3f82d46d0ba441a0a344d1ae6e3f1153&csf=1&web=1&e=M7WBu5"
            }
          ],

          cards: [
            {
              title:
                "1. Account koppelen",
              lines: [
                "Maak een account aan in Enviso.",
                "Kies 'reseller' en vul bedrijfsgegevens in.",
                "Zoek en koppel met SnowWorld.",
                "Na goedkeuring kun je de deals gebruiken."
              ]
            },
            {
              title:
                "2. Vouchercodes aanvragen",
              lines: [
                "Ga in Enviso naar de Trade-omgeving.",
                "Kies de juiste SnowWorld-deal.",
                "Bestel codes via het winkelwagen-icoon.",
                "Maximaal 5.000 codes per bestelling."
              ]
            },
            {
              title:
                "3. Codes annuleren",
              lines: [
                "Zoek de juiste batch.",
                "Selecteer de codes.",
                "Maximaal 25 codes tegelijk annuleren.",
                "Gebruikte codes kunnen niet worden geannuleerd."
              ]
            }
          ],

          note:
            "Visuele uitleg is te vinden in de handleiding."
        }
      ]
    },

    // =====================================================
    // UITINGEN
    // =====================================================

    {
      id: "broadsign",
      category: "uitingen",

      title:
        "Broadsign (DOOH puischermen)",

      summary:
        "Stappenplan voor het inregelen en publiceren van uitingen op DOOH-pu schermen.",

      system: "Broadsign Publish",
      frequency: "Wanneer nodig",
      duration: "± 10–15 min",

      featured: true,

      steps: [
        {
          title:
            "Open Broadsign Publish",
          text:
            "Ga naar Broadsign Publish en log in.",
          image: ""
        },
        {
          title:
            "Maak een nieuw bericht aan",
          text:
            "Klik op 'Creëer een nieuw bericht'.",
          image:
            "images/broadsign/02-nieuw-bericht.png"
        },
        {
          title:
            "Selecteer en upload de uiting",
          text:
            "Upload de juiste uiting in 1080 × 1920 pixels.",
          image:
            "images/broadsign/03-uiting-uploaden.png"
        },
        {
          title:
            "Selecteer de juiste schermen",
          text:
            "Selecteer via 'Met mij gedeeld' de juiste schermen. Doe dit altijd in overleg.",
          image:
            "images/broadsign/04-schermen-selecteren.png"
        },
        {
          title:
            "Stel looptijd en planning in",
          text:
            "Kies 'Specifiek', stel looptijd, dagen en frequentie in.",
          image:
            "images/broadsign/05-planning-instellen.png"
        },
        {
          title:
            "Geef de uiting een naam",
          text:
            "Gebruik de afgesproken naamconventie.",
          bullets: [
            "Formaat: WEEK_NAAM UITING",
            "Voorbeeld: WK34_Jumbo_Prijzenstorm_Robijn"
          ],
          image: ""
        },
        {
          title:
            "Keur goed en publiceer",
          text:
            "Klik op 'Goedkeuren & publiceren'.",
          image: ""
        }
      ]
    },

    {
      id: "rcos",
      category: "uitingen",

      title:
        "Rcos (DOOH kassaschermen)",

      summary:
        "Stappenplan voor het inregelen en publiceren van kassaschermuitingen via rCOS.",

      system: "rCOS",
      frequency: "Wanneer nodig",
      duration: "± 10–15 min",

      featured: false,

      caution:
        "De keuze van filmschema wordt altijd afgestemd. Bestand: 1024 × 768 pixels.",

      steps: [
        {
          title: "Log in bij rCOS",
          text:
            "Log in met jouw HEMA-account via HEMA Azure AD.",
          image:
            "images/rcos/01-inloggen.png"
        },
        {
          title: "Open Filmschema's",
          text:
            "Ga naar Systeembeheer → Filmschema's.",
          image:
            "images/rcos/02-filmschemas.png"
        },
        {
          title:
            "Kies het juiste filmschema",
          text:
            "Kies het juiste Cadeaukaart- of Retail Media-filmschema. Dit gebeurt altijd in overleg.",
          infoCards: [
            {
              title: "Cadeaukaarten",
              items: [
                "Cadeaukaart_NL_05_2025",
                "Cadeaukaart_BE_NL_04_2025",
                "Cadeaukaart_BE_FR_04_2024",
                "Cadeaukaart_BE_NL_FR_04_2024"
              ],
              note:
                "Opbouw: CATEGORIE_LAND_TAAL."
            },
            {
              title: "Retail Media",
              items: [
                "Retail Media EV ONLY — alleen eigen HEMA-filialen",
                "Retail Media - TIJDELIJK — eigen + franchise-filialen"
              ]
            }
          ],
          image: ""
        },
        {
          title:
            "Upload de gewenste uiting",
          text:
            "Upload de uiting in het gestippelde vak.",
          image:
            "images/rcos/04-uiting-uploaden.png"
        },
        {
          title:
            "Geef de uiting een naam en sla op",
          text:
            "Gebruik NAAM UITING-WEEK. Kopieer 'Naam' ook naar 'Toelichting kassa'.",
          image:
            "images/rcos/05-uiting-naamgeven.png"
        },
        {
          title:
            "Controleer of de uiting live staat",
          text:
            "Na opslaan staat de uiting meteen live.",
          image: ""
        }
      ]
    },

    // =====================================================
    // ADVERTISING
    // =====================================================

    {
      id: "google-admanager",
      category: "advertising",

      title: "Google Ad Manager",

      summary:
        "Stappenplan voor het aanmaken, instellen, vullen en monitoren van campagnes.",

      system: "Google Ad Manager",
      frequency: "Wanneer nodig",
      duration: "± 20–30 min",

      featured: true,

      subsections: [
        {
          title: "1. Order aanmaken",

          steps: [
            {
              title:
                "Open Google Ad Manager",
              text:
                "Ga naar Google Ad Manager en log in.",
              image: ""
            },
            {
              title: "Ga naar Orders",
              text:
                "Ga naar Delivery → Orders.",
              image:
                "images/google-admanager/02-orders.png"
            },
            {
              title:
                "Maak een nieuwe order aan",
              text:
                "Klik op 'New order'.",
              image:
                "images/google-admanager/03-new-order.png"
            },
            {
              title:
                "Vul General settings in",
              text:
                "Vul de algemene campagnegegevens in.",
              bullets: [
                "Naam: adverteerder_jaar_weeknummers_typecampagne",
                "Selecteer de adverteerder",
                "Labels leeg laten",
                "Advanced settings leeg laten"
              ],
              image:
                "images/google-admanager/04-general-settings.png"
            }
          ]
        },

        {
          title:
            "2. Line item instellen",

          steps: [
            {
              title:
                "Maak een nieuw line item",
              text:
                "Select display ad; template leeg; line item type Standard.",
              image:
                "images/google-admanager/05-line-item-basis.png"
            },
            {
              title:
                "Vul Expected creatives in",
              text:
                "Voeg alle benodigde formaten toe.",
              image:
                "images/google-admanager/05-expected-creatives.png"
            },
            {
              title:
                "Stel Delivery settings in",
              text:
                "Vul start/eind, quantity, CPM en eventueel discount in.",
              image:
                "images/google-admanager/05-delivery-settings.png"
            },
            {
              title:
                "Open Add targeting",
              text:
                "Open de targetinginstellingen.",
              image:
                "images/google-admanager/05-targeting.png"
            },
            {
              title:
                "Selecteer inventory-locaties",
              text:
                "Selecteer de juiste 2PLP-plekken en/of Thank You Page.",
              image:
                "images/google-admanager/05-targeting-locaties.png"
            },
            {
              title:
                "Stel categorie-targeting in",
              text:
                "Gebruik categorie-targeting indien nodig.",
              image:
                "images/google-admanager/05-categorie-targeting.png"
            },
            {
              title:
                "Controleer inventory",
              text:
                "Klik op 'Check inventory' en controleer of het doel haalbaar is.",
              image:
                "images/google-admanager/05-check-inventory.png"
            }
          ]
        },

        {
          title:
            "3. Creatives toevoegen",

          steps: [
            {
              title: "Ga naar Creatives",
              text:
                "Gebruik Add creative of Bulk upload creatives.",
              image:
                "images/google-admanager/06-creatives-overzicht.png"
            },
            {
              title:
                "Upload en gebruik Bulk edit",
              text:
                "Upload de beelden en selecteer alle creatives om instellingen gezamenlijk aan te passen.",
              image:
                "images/google-admanager/06-bulk-edit.png"
            },
            {
              title:
                "Vul Destination in",
              text:
                "Vul de juiste bestemmings-URL/UTM in, test de URL en sla op.",
              image:
                "images/google-admanager/06-destination.png"
            }
          ]
        },

        {
          title:
            "4. Goedkeuren en monitoren",

          text:
            "Rond de campagne af en controleer daarna de campagnestatus.",

          steps: [
            {
              title:
                "Approve de campagne",
              text:
                "Ga terug naar de order en klik op 'Approve'.",
              image: ""
            },
            {
              title:
                "Monitor de campagne",
              text:
                "Controleer regelmatig de status.",
              bullets: [
                "Ready: campagne staat klaar",
                "Delivering: campagne is live"
              ],
              image: ""
            }
          ]
        }
      ]
    },

    // =====================================================
    // ONLINE BANNERS
    // =====================================================

    {
      id: "online-banners",
      category: "banners",

      title:
        "Stappenplan Online Banners",

      summary:
        "Stappenplan voor het maken, aanpassen, dupliceren en downloaden van banners in Adobe Express.",

      system: "Adobe Express",
      frequency: "Wanneer nodig",
      duration: "± 15–20 min",

      featured: true,

      steps: [
        {
          title: "Open Adobe Express",
          text:
            "Ga naar Adobe Express via https://new.express.adobe.com/.",
          image: ""
        },
        {
          title:
            "Open Banner Sjablonen",
          text:
            "Klik op 'Jouw spullen' en kies 'Banner Sjablonen'.",
          image:
            "images/online-banners/02-banner-sjablonen.png"
        },
        {
          title:
            "Kies de juiste categorie",
          text:
            "Gebruik de juiste kleur voor de actie.",
          infoCards: [
            {
              title: "Paars",
              items: ["Nachtje weg"]
            },
            {
              title: "Roze",
              items: ["Uit eten"]
            },
            {
              title: "Groen",
              items: ["Dagje weg"]
            }
          ],
          image: ""
        },
        {
          title:
            "Pas de banner aan",
          text:
            "Pas titel, subtitel, prijsblok en afbeelding aan. Pagina 1 is reguliere banner; pagina 2 is laatste-kans-banner.",
          image:
            "images/online-banners/04-banner-aanpassen.png"
        },
        {
          title:
            "Dupliceer naar alle formaten",
          text:
            "Gebruik 'Formaat wijzigen' en 'Dupliceren en formaat wijzigen'.",
          infoCards: [
            {
              title: "Bannerformaten",
              items: [
                "1240 × 248",
                "971 × 194",
                "903 × 180",
                "806 × 202",
                "740 × 148",
                "728 × 182",
                "720 × 144",
                "667 × 167",
                "473 × 118"
              ]
            },
            {
              title: "Appformaten",
              items: [
                "600 × 500",
                "450 × 375",
                "300 × 250"
              ]
            }
          ],
          image:
            "images/online-banners/05-formaten-dupliceren.png"
        },
        {
          title:
            "Download alle banners",
          text:
            "Download de banners en zet ze in de map 'beginactie banners' van de betreffende actie.",
          image: ""
        }
      ]
    },

    // =====================================================
    // ORGANIC SOCIAL MEDIA BELGIË
    // =====================================================

    {
      id: "organic-be-introductie",
      category: "organic-social-belgie",

      title:
        "Introductie & Vrindinnestrategie",

      summary:
        "Strategische basis van Organic Social Media voor HEMA België.",

      system:
        "Organic Social Media België",
      frequency: "Naslag",
      duration: "± 5 min",

      featured: true,

      introBox: {
        title:
          "Strategisch Social Media Handboek België",
        text:
          "Dit handboek is een strategische leidraad en praktisch handvat voor iedereen die betrokken is bij het creëren, publiceren en optimaliseren van de sociale media voor HEMA België."
      },

      steps: [
        {
          title:
            "De Vrindinnestrategie",
          text:
            "HEMA België presenteert zich op sociale media als een toegankelijke Belgische vriendin die probeert een glimlach op het gezicht van anderen te toveren. Deze strategie loopt door in zowel eigen content als communicatie met creators.",
          bullets: [
            "Toegankelijk",
            "Informeel",
            "Vrolijk",
            "Humoristisch",
            "Inspirerend",
            "Herkenbaar als HEMA"
          ],
          image: ""
        },
        {
          title:
            "Doel van het handboek",
          text:
            "Gebruik dit document als strategische leidraad én als praktisch naslagwerk voor dagelijkse werkzaamheden.",
          image: ""
        },
        {
          title:
            "Werk met de actuele versie",
          text:
            "Het handboek kan worden bijgewerkt. Controleer daarom altijd of je de meest actuele versie gebruikt.",
          image: ""
        }
      ]
    },

    // =====================================================
    // 1. ORGANISCHE SOCIALE MEDIA
    // =====================================================

    {
      id:
        "organic-be-organische-social-media",
      category: "organic-social-belgie",

      title:
        "1. Organische sociale media binnen HEMA",

      summary:
        "Kanalen, postfrequentie, contentkalender, bureaucommunicatie en assets.",

      system:
        "Instagram / TikTok / Facebook / Pinterest / YouTube",

      frequency: "Dagelijks",
      duration: "Naslag",

      featured: true,

      steps: [
        {
          title:
            "Actieve kanalen",
          text:
            "HEMA België is voor Organic Social actief op verschillende kanalen.",
          bullets: [
            "Instagram",
            "TikTok",
            "Facebook Vlaams",
            "Facebook Waals",
            "Pinterest",
            "YouTube Shorts"
          ],
          image: ""
        },
        {
          title:
            "1.1 Postfrequentie",
          text:
            "Er wordt gestreefd naar minimaal dagelijks posten op de feed en minimaal zes stories per week. Per kanaal kunnen nuances gelden: Facebook heeft een hogere frequentie en Pinterest een lagere.",
          image: ""
        },
        {
          title:
            "1.2 Contentkalender",
          text:
            "De contentkalender is de plek waar je dagelijks naar kijkt voor Organic Social. Hierin staat de volledige planning voor ieder sociaal mediakanaal.",
          image: ""
        },
        {
          title:
            "1.3 Communiceren met bureaus",
          text:
            "De communicatie met Social Sky, Paloma en UnCool loopt via verschillende kanalen.",
          infoCards: [
            {
              title: "E-mail",
              items: [
                "Belangrijke zaken",
                "Afstemming",
                "Overleg over werkzaamheden"
              ]
            },
            {
              title: "Meetings",
              items: [
                "Nieuwe concepten",
                "Uitgewerkte concepten bespreken",
                "Goedkeuring en check-ins"
              ]
            },
            {
              title: "WhatsApp",
              items: [
                "Snelle updates",
                "Korte vragen",
                "Informele communicatie"
              ]
            }
          ],
          image: ""
        },
        {
          title:
            "1.4 Waar zijn assets te vinden?",
          text:
            "De verschillende agencies leveren assets via hun eigen vaste locaties.",
          links: [
            {
              label:
                "Paloma – Notion Client Page",
              href:
                "https://www.notion.so/CLIENT-PAGE-HEMA-Social-Content-31364daa31bc80039044e08d77bc22e5"
            },
            {
              label:
                "Social Sky – Content Hub",
              href:
                "https://www.notion.so/Content-Hub-2026-HEMA-30a27acb3a6180bc8b43d7583bd865ba"
            }
          ],
          bullets: [
            "UnCool: concepten en assets via Vimeo per e-mail",
            "Nederlandse reposts: I:\\Marketing & Communication\\PR + SOCIAL\\5. SOCIAL\\01 SOCIAL CONTENT\\01 CONTENT"
          ],
          image: ""
        }
      ]
    },

    // =====================================================
    // 2. WORKFLOW
    // =====================================================

    {
      id: "organic-be-workflow",
      category: "organic-social-belgie",

      title:
        "2. Workflow & verantwoordelijkheden",

      summary:
        "Verdeling van kanalen, contentplanning, agencies en aanspreekpunten.",

      system:
        "Organic Social Media België",
      frequency: "Doorlopend",
      duration: "Naslag",

      featured: true,

      steps: [
        {
          title:
            "2.1 Organic Social",
          text:
            "De contentkalender is het centrale werkdocument en wordt tweewekelijks besproken en voortdurend geüpdatet tijdens Content Meetings.",
          bullets: [
            "Instagram & TikTok: Organic Social Marketeer België en deels Stagiair Online Marketing BE & FR",
            "Facebook NL-BE/FR-BE, Pinterest en YouTube Shorts: Social Media Coördinator België"
          ],
          image: ""
        },
        {
          title:
            "2.1.1 Feed inplannen",
          text:
            "Content wordt grotendeels gemaakt door agencies. Het Belgische team plant de goedgekeurde content vervolgens in.",
          infoCards: [
            {
              title: "TikTok",
              items: [
                "Video's via TikTok Studio",
                "Carrousels via TikTok-app"
              ]
            },
            {
              title: "Instagram",
              items: [
                "Video's via Instagram",
                "Carrousels via Instagram"
              ]
            },
            {
              title:
                "Facebook / Pinterest / YouTube",
              items: [
                "Facebook: Meta Business Suite",
                "Pinterest: Pinterest-app",
                "YouTube Shorts: YouTube-app"
              ]
            }
          ],
          image: ""
        },
        {
          title:
            "2.1.1.2 Stories",
          text:
            "Stories worden voornamelijk gemaakt door de Stagiair Online Marketing BE & FR, meestal in Canva. Wekelijks wordt met de Stagiair Visual Creative afgestemd welke stories gecrosspost kunnen worden tussen Nederland en België. Tijdens deze meeting worden ook resultaten en cijfers vergeleken.",
          image: ""
        },
        {
          title:
            "2.2 Workflow met agencies",
          text:
            "De samenwerking met agencies volgt een vaste route.",
          subsection: {
            title: "Agency workflow",
            steps: [
              "Agencies pitchen wekelijks of maandelijks nieuwe concepten.",
              "Het team geeft feedback.",
              "De agencies werken de concepten uit en leveren ze via Notion of Vimeo.",
              "Het Belgische socialmediateam geeft feedback of approval.",
              "Goedgekeurde content wordt in de contentkalender ingepland.",
              "Na publicatie wordt de asset beoordeeld en waar nodig feedback gegeven."
            ]
          },
          image: ""
        },
        {
          title:
            "2.2.1 Verdeling & meetings",
          text:
            "De agencies functioneren als vaste contentleveranciers.",
          infoCards: [
            {
              title: "PALOMA",
              items: [
                "22 assets per maand",
                "Elke 2 weken nieuwe input",
                "Wekelijkse check-in"
              ]
            },
            {
              title: "Social Sky",
              items: [
                "8 assets per maand",
                "Elke 2 weken nieuwe input",
                "Tweewekelijkse check-in"
              ]
            },
            {
              title: "UnCool",
              items: [
                "4 assets per maand",
                "Elke 2 weken nieuwe input",
                "Tweewekelijkse check-in"
              ]
            }
          ],
          image: ""
        },
        {
          title:
            "2.3 Rollen & aanspreekpunten",
          text:
            "De verantwoordelijkheden zijn verdeeld over verschillende rollen.",
          infoCards: [
            {
              title: "Organic Social",
              items: [
                "Social Media Marketeer België & Frankrijk",
                "Social Media Coördinator België",
                "Stagiair Online Marketing BE & FR"
              ]
            },
            {
              title: "Paid Social",
              items: [
                "Lead Paid Advertising",
                "Channel Marketeer TikTok",
                "Online Marketeer Meta"
              ]
            },
            {
              title: "Creator Marketing",
              items: [
                "Channel Marketeer"
              ]
            },
            {
              title:
                "Communitymanagement",
              items: [
                "Comments via socialmedia-agency",
                "DM's via Social Media Coördinator België"
              ]
            },
            {
              title:
                "Legal & contracten",
              items: [
                "Projectmanager Marketing BE & FR"
              ]
            },
            {
              title:
                "Budgettaire zaken",
              items: [
                "Lead Paid Advertising"
              ]
            }
          ],
          image: ""
        }
      ]
    },

    // =====================================================
    // 3. CONTENTRICHTLIJNEN
    // =====================================================

    {
      id:
        "organic-be-contentrichtlijnen",
      category: "organic-social-belgie",

      title: "3. Contentrichtlijnen",

      summary:
        "Vrindinnestrategie, visuele identiteit, formats, captions, hashtags en emoji's.",

      system: "Organic Social Media",
      frequency:
        "Bij iedere contentcreatie",
      duration: "Naslag",

      featured: true,

      caution:
        "Gebruik onder posts altijd rechtenvrije muziek en sounds.",

      steps: [
        {
          title:
            "Vrindinnestrategie",
          text:
            "De overkoepelende strategie is de toegankelijke Belgische vriendin: content moet mensen laten lachen, inspireren en op een informele manier communiceren.",
          image: ""
        },
        {
          title:
            "3.1 Visuele identiteit",
          text:
            "Voor grafische posts en stories wordt dezelfde HEMA-identiteit gebruikt als in Nederland. Gebruik BeeldBinkie als bron voor beeldgebruik, kleuren en typografie.",
          image: ""
        },
        {
          title:
            "3.2 Contentrichtlijnen",
          text:
            "Houd bij alle content rekening met vaste technische en juridische uitgangspunten.",
          bullets: [
            "Muziek en sounds altijd rechtenvrij",
            "Reels: 9:16",
            "Carrousels: 4:5"
          ],
          image: ""
        },
        {
          title: "3.3 Caption",
          text:
            "Houd captions kort, krachtig en slim. Bij productposts op Instagram en TikTok is zowel een Vlaamse als een Waalse caption nodig. Benoem relevante promoties kort.",
          image: ""
        },
        {
          title: "3.3.1 Hashtags",
          text:
            "Hashtags worden voornamelijk op TikTok gebruikt. #HEMA wordt standaard toegepast. Gebruik overige hashtags alleen wanneer ze relevant zijn voor de content, het algoritme en de vindbaarheid.",
          image: ""
        },
        {
          title: "3.3.2 Emoji's",
          text:
            "Emoji's zijn geen verplicht decoratief element. Gebruik ze alleen als ze echt iets toevoegen. Informatieve of serieuze content kan sterker zijn zonder emoji's; luchtige productcontent en sketches kunnen er juist baat bij hebben.",
          image: ""
        }
      ]
    },

    // =====================================================
    // 4. CONTENTFORMATS
    // =====================================================

    {
      id:
        "organic-be-contentformats",
      category: "organic-social-belgie",

      title: "4. Contentformats",

      summary:
        "Uitleg over de contentmix voor feed en stories, gamificatie, resultaten en Highlights.",

      system: "Organic Social Media",
      frequency: "Doorlopend",
      duration: "Naslag",

      featured: true,

      introBox: {
        title:
          "Waarom verschillende contentformats?",
        text:
          "Een sterke Organic Social-strategie bestaat niet uit één soort post. De feed en stories hebben ieder een eigen functie. Door verschillende formats, onderwerpen en interactieve elementen af te wisselen blijft het kanaal interessant en wordt zowel bereik als engagement opgebouwd."
      },

      steps: [
        {
          title: "4.1 Feed",
          text:
            "Er wordt minimaal één keer per dag op de feed gepost. Zorg voor een goede mix tussen carrousels en reels én tussen verschillende inhoudelijke soorten content. De feed moet niet alleen verkopen, maar vooral content brengen die views oplevert, engagement stimuleert en een glimlach oproept.",
          bullets: [
            "Sketches",
            "Promoties",
            "Productposts",
            "Winkelopeningen",
            "Content gericht op views",
            "Content gericht op engagement",
            "Content die de HEMA-glimlach oproept"
          ],
          image: ""
        },
        {
          title: "4.2 Stories",
          text:
            "Stories zijn een onmisbaar dagelijks touchpoint om interactie te genereren. Ze worden relatief vaak gebruikt voor commerciële onderwerpen zoals promoties en productposts, maar onderzoek laat zien dat stories niet alleen uit 'koop dit nu'-boodschappen moeten bestaan. Gamificatie werkt juist goed voor interactie en zichtbaarheid.",
          infoCards: [
            {
              title:
                "Voorbeelden gamificatie",
              items: [
                "Raad het Product",
                "Dit of Dat",
                "Woordzoekers",
                "Woordrebussen",
                "Geheugenspel",
                "Zoek de verschillen",
                "Zoekspel"
              ]
            }
          ],
          image: ""
        },
        {
          title:
            "Afstemming Nederland – België",
          text:
            "Stem goed af met het Nederlandse socialmediateam omdat bepaalde stories van NL naar BE of van BE naar NL gecrosspost kunnen worden. Voor taalchecks in het Frans kun je terecht bij de Social Media Coördinator en Social Media Marketeer.",
          image: ""
        },
        {
          title:
            "Resultaten van stories",
          text:
            "Resultaten worden via het moederbestand en uitgebreider via het story-bestand bijgehouden. Houd Instagram- en Facebookviews wekelijks bij via Meta. Voor cijfers zoals average completion rate en prestaties per type story gebruik je Iconosquare.",
          image: ""
        },
        {
          title:
            "Instagram Highlights bijhouden",
          text:
            "Het beheren van stories betekent ook dat Instagram Highlights actueel moeten blijven. Nieuwe promotionele stories vervang je in de highlight 'promoties'. Wallpapers, fanposts, spellen en andere blijvende content kunnen worden toegevoegd zonder steeds de oudere stories te verwijderen.",
          image: ""
        }
      ]
    },

    // =====================================================
    // 5. DATA
    // =====================================================

    {
      id:
        "organic-be-data-analyse",
      category: "organic-social-belgie",

      title:
        "5. Data, Analyse & Optimalisatie",

      summary:
        "KPI's, kanaaldoelen en wekelijkse rapportage.",

      system:
        "Meta / Iconosquare",
      frequency: "Wekelijks",
      duration: "Naslag",

      featured: false,

      steps: [
        {
          title:
            "5.1 Belangrijkste KPI's",
          text:
            "Views zijn de belangrijkste KPI voor Organic Social België. Engagement rate blijft relevant, maar follower growth is belangrijker dan alleen likes en comments omdat volgersgroei laat zien of content aanslaat en of mensen het account willen blijven volgen.",
          image: ""
        },
        {
          title:
            "Instagram 2026",
          text:
            "Doelstellingen voor HEMA België Instagram.",
          infoCards: [
            {
              title: "Instagram",
              items: [
                "Minimaal 7x per week",
                "110.000 volgers",
                "17,5 miljoen views"
              ]
            }
          ],
          image: ""
        },
        {
          title: "TikTok 2026",
          text:
            "Doelstellingen voor HEMA België TikTok.",
          infoCards: [
            {
              title: "TikTok",
              items: [
                "Minimaal 7x per week",
                "40.000 volgers",
                "30 miljoen views"
              ]
            }
          ],
          image: ""
        },
        {
          title: "Facebook 2026",
          text:
            "Doelstellingen voor HEMA België Facebook.",
          infoCards: [
            {
              title: "Facebook",
              items: [
                "Minimaal 5x per week",
                "160.000 volgers",
                "37,5 miljoen views"
              ]
            }
          ],
          image: ""
        },
        {
          title:
            "5.2 Reporting structuur",
          text:
            "Bekijk wekelijks de performance via Meta Statistieken en Iconosquare en noteer de resultaten in het moederbestand waarin ook de contentkalender staat.",
          image: ""
        }
      ]
    },

    // =====================================================
    // 6. COMMUNITYMANAGEMENT
    // =====================================================

    {
      id:
        "organic-be-communitymanagement",
      category: "organic-social-belgie",

      title: "6. Communitymanagement",

      summary:
        "Tone of voice en omgaan met vragen, klachten en negatieve reacties.",

      system: "Social Media",
      frequency: "Dagelijks",
      duration: "Naslag",

      featured: false,

      steps: [
        {
          title:
            "6.1 Tone of voice",
          text:
            "Communitymanagement is belangrijk voor contact met kijkers en andere accounts. Houd altijd de HEMA-tone of voice aan. Goede interactie ondersteunt relatiemanagement én vergroot de zichtbaarheid.",
          image: ""
        },
        {
          title:
            "6.2 Negatieve reacties",
          text:
            "Niet iedere negatieve reactie hoeft een antwoord te krijgen. Beoordeel wat passend is op basis van de ernst en het karakter van de reactie.",
          infoCards: [
            {
              title:
                "Ernstige klacht",
              items: [
                "Stuur door naar klantenservice"
              ]
            },
            {
              title:
                "Gezonde discussie",
              items: [
                "Laat lopen zolang deze respectvol blijft"
              ]
            },
            {
              title:
                "Intimidatie of schelden",
              items: [
                "Verwijder comment",
                "Blokkeer account",
                "Rapporteer account"
              ]
            },
            {
              title:
                "Veel dezelfde vragen",
              items: [
                "Plaats een openbare nette reactie",
                "Zo krijgt iedereen meteen antwoord"
              ]
            }
          ],
          image: ""
        }
      ]
    },

    // =====================================================
    // 7. CREATORS
    // =====================================================

    {
      id:
        "organic-be-ugc-creators",
      category: "organic-social-belgie",

      title: "7. (UGC-) creators",

      summary:
        "Rol, selectie, briefing, workflow, legal en dataverwerking.",

      system: "Creator Marketing",
      frequency: "Wanneer nodig",
      duration: "Naslag",

      featured: true,

      steps: [
        {
          title:
            "7.1 Rol van creators",
          text:
            "(UGC-)creators worden primair ingezet als verlengstuk van paid advertising. Zij maken video-first content zoals Reels, TikToks en Shorts. Publicatie via hun eigen kanalen maakt versterking via Spark Ads en Partnership Ads mogelijk en kan authentieker overkomen dan merkcommunicatie vanuit HEMA zelf.",
          image: ""
        },
        {
          title:
            "7.2 Selectiecriteria",
          text:
            "Let bij het recruiten van creators op kwaliteit, prestaties en professionaliteit.",
          bullets: [
            "Kwaliteit van videocontent",
            "Effectiviteit van bestaande content",
            "Ervaring met merkcontent",
            "Professionaliteit",
            "Sterk portfolio met verhalende kwaliteit",
            "Doelgroepgericht kunnen creëren",
            "Aantoonbare ervaring met sociale media"
          ],
          image: ""
        },
        {
          title:
            "7.3 Briefing & beoordeling",
          text:
            "Creators krijgen veel creatieve vrijheid, maar een aantal elementen moet altijd worden gecontroleerd bij briefing en oplevering.",
          bullets: [
            "Content moet natuurlijk aanvoelen en niet als advertentie",
            "Belangrijke producten moeten in beeld komen",
            "Video mag niet onnodig lang zijn",
            "Merkherkenning moet snel zichtbaar zijn"
          ],
          image: ""
        },
        {
          title:
            "7.4 Workflow creators",
          text:
            "Werk altijd volgens dezelfde route van selectie tot rapportage.",
          subsection: {
            title: "Workflow",
            steps: [
              "Opdracht/dropping → creators selecteren via formulier/portal.",
              "Briefing → via e-mail.",
              "Sample verzending → tracking delen.",
              "Previews → maximaal 1–2 revisies; feedback binnen 48 uur.",
              "Go-live → post + correcte disclosure.",
              "Asset-download & archief → bestandsnamen + metadata.",
              "Repurposing → paid, e-mail, site of retail waar toegestaan.",
              "Rapportage → KPI's, learnings en tagging in DAM."
            ],
            note:
              "SLA's: briefing accepteren <48u; feedback op preview <48u; publicatie na go/no-go <24u."
          },
          image: ""
        },
        {
          title:
            "7.5 Wetgeving & legal",
          text:
            "Controleer alle samenwerkingen op de belangrijkste juridische voorwaarden.",
          bullets: [
            "Geen ongefundeerde claims",
            "Geen gevoelige hoofdboodschap rond politieke voorkeuren, religie of duurzaamheid",
            "Correcte disclosure: #ad of betaalde samenwerking",
            "Muziek en licenties controleren"
          ],
          image: ""
        },
        {
          title:
            "7.6 Data noteren en verwerken",
          text:
            "Gebruik de vaste bestanden om resultaten en tracking goed vast te leggen.",
          bullets: [
            "Moederbestand: campagnes en resultaten",
            "Linkbuilding-document: juiste trackinglinks maken wanneer video's worden geboost"
          ],
          image: ""
        }
      ]
    },

    // =====================================================
    // LOKALE KANALEN
    // =====================================================

    {
      id:
        "organic-be-lokale-kanalen",
      category: "organic-social-belgie",

      title:
        "Lokale sociale mediakanalen",

      summary:
        "Richtlijnen voor eigen socialmediakanalen van lokale HEMA-winkels.",

      system:
        "Lokale Social Media",
      frequency: "Wanneer nodig",
      duration: "Naslag",

      featured: false,

      steps: [
        {
          title:
            "Lokale winkels monitoren",
          text:
            "Houd in de gaten wat lokale winkels posten. Employee Generated Content is welkom en winkels mogen experimenteren met wat volgens hen goed werkt.",
          image: ""
        },
        {
          title:
            "Let op releasedatums",
          text:
            "Wordt een nieuwe collectie te vroeg gepubliceerd? Neem direct contact op, vraag de winkel om de content offline te halen en herinner hen aan de officiële releasedatum.",
          image: ""
        }
      ]
    },

    // =====================================================
    // 8. BIJLAGEN
    // =====================================================

    {
      id: "organic-be-bijlagen",
      category: "organic-social-belgie",

      title: "8. Bijlagen",

      summary:
        "Storytemplates, creatorprocessen en aanvullende tools.",

      system:
        "Canva / TradeTracker",
      frequency: "Naslag",
      duration: "Naslag",

      featured: false,

      subsections: [
        {
          title:
            "8.1 Organic Social",

          steps: [
            {
              title:
                "8.1.1 Feed & data",
              text:
                "Resultaten van feedposts en stories worden in het moederbestand verzameld. Voor stories wordt dieper geanalyseerd via het story-bestand. Houd Instagram- en Facebookviews wekelijks bij via Meta; gebruik Iconosquare voor onder andere average completion rate.",
              image: ""
            },
            {
              title:
                "8.1.2 Storytemplates",
              text:
                "Maak voor iedere Canva-template eerst een kopie naar je eigen Canva-account.",
              links: [
                {
                  label:
                    "Raad het product",
                  href:
                    "https://canva.link/0iyugdfdr06iiho"
                },
                {
                  label:
                    "Raad het product – Stapelgek editie",
                  href:
                    "https://canva.link/gdijsiwt6i8ul75"
                },
                {
                  label:
                    "Zoek de verschillen",
                  href:
                    "https://canva.link/pe5qyw4bqkvxg5m"
                },
                {
                  label: "Dit of Dat",
                  href:
                    "https://canva.link/g2t9k0pvn0emuxq"
                },
                {
                  label:
                    "Dit of Dat – Stapelgek editie",
                  href:
                    "https://canva.link/mojfzjzi29rzzjo"
                },
                {
                  label: "Fanstories",
                  href:
                    "https://canva.link/k7r48mzyv3xi4gf"
                },
                {
                  label: "Zoekspel",
                  href:
                    "https://canva.link/eb8b1xltu8oajrn"
                },
                {
                  label:
                    "Woordrebussen & feestdagen",
                  href:
                    "https://canva.link/fuh7i7um3bmbq5c"
                },
                {
                  label: "Geheugenspel",
                  href:
                    "https://canva.link/xae5kkoz1f6qm8k"
                }
              ],
              image: ""
            }
          ]
        },

        {
          title:
            "8.2 (UGC-) creators NL-BE",

          steps: [
            {
              title:
                "Aanmelding nieuwe creator",
              text:
                "Nieuwe creators maken eerst een TradeTracker-account aan via het HEMA België affiliateprogramma. Na goedkeuring ontvangen ze een Affiliate-ID. Dit ID is nodig voor creatorregistratie en vergoedingen.",
              links: [
                {
                  label:
                    "HEMA België affiliateprogramma",
                  href:
                    "https://www.hema.com/nl-be/affiliate"
                }
              ],
              bullets: [
                "Geen affiliate links nodig voor creatoropdrachten",
                "Vergoeding wordt als fixed fee geregistreerd"
              ],
              image: ""
            },
            {
              title:
                "Vergoedingsproces NL-BE",
              text:
                "Vergoedingen lopen via TradeTracker en de creator hoeft geen factuur te sturen.",
              bullets: [
                "Betaaltermijn ongeveer 90 dagen",
                "Betaalgegevens volledig invullen",
                "Betaalinstellingen controleren",
                "BTW-nummer toevoegen indien van toepassing"
              ],
              image: ""
            }
          ]
        },

        {
          title:
            "8.3 (UGC-) creators FR-BE",

          steps: [
            {
              title:
                "Aanmelding nieuwe creator FR-BE",
              text:
                "Franstalige creators maken een TradeTracker-account aan via het Franstalige Belgische affiliateprogramma en ontvangen na goedkeuring een Affiliate ID.",
              links: [
                {
                  label:
                    "Programme d'affiliation HEMA Belgique",
                  href:
                    "https://www.hema.com/fr-be/affiliation"
                }
              ],
              image: ""
            },
            {
              title:
                "Vergoedingsproces FR-BE",
              text:
                "De vergoeding wordt na goedkeuring van de content als fixed fee in TradeTracker geregistreerd.",
              bullets: [
                "Geen factuur nodig",
                "Betaaltermijn ongeveer 90 dagen",
                "Bankgegevens volledig invullen",
                "Betaalinstellingen controleren",
                "BTW-nummer toevoegen indien van toepassing"
              ],
              image: ""
            }
          ]
        },

        {
          title: "8.4 Overig",

          cards: [
            {
              title: "Keeper",
              lines: [
                "Veilige wachtwoordkluis.",
                "Zorg dat je een account hebt."
              ]
            },
            {
              title: "Yext",
              lines: [
                "Systeem voor beheer van bedrijfs- en locatiegegevens.",
                "Helpt openingstijden, adressen en andere informatie consistent te houden op online platforms en zoekmachines."
              ]
            }
          ]
        }
      ]
    }

  ]
};
