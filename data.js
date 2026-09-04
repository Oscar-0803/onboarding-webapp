window.HANDBOOK_DATA = {
  meta: {
    lastUpdated: "3 september 2026",
    sourceStatus: "Gebaseerd op het interne onboardingdocument."
  },

  categories: [
    {
      id: "dagelijks",
      label: "Dagelijks",
      icon: "☀",
      description: "Dagelijkse inboxen en terugkerende werkzaamheden"
    },
    {
      id: "orders",
      label: "Orders",
      icon: "⇄",
      description: "GDL-orders en interne Trade-orders"
    },
    {
      id: "betalingen",
      label: "Betalingen",
      icon: "€",
      description: "Bankbetalingen verwerken"
    },
    {
      id: "klantenservice",
      label: "Klantenservice",
      icon: "✉",
      description: "HEMA Tickets en herroepingen"
    },
    {
      id: "uitingen",
      label: "Uitingen",
      icon: "▤",
      description: "Broadsign en Rcos"
    },
    {
      id: "advertising",
      label: "Advertising",
      icon: "◎",
      description: "Google Ad Manager"
    },
    {
      id: "banners",
      label: "Online Banners",
      icon: "◇",
      description: "Online banners maken en verwerken"
    }
  ],

  procedures: [

    // =========================================================
    // HEM GIFTCARDS
    // =========================================================

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
        "blokkeren",
        "niet aangekomen"
      ],

      caution:
        "Controleer altijd eerst of de cadeaukaart is gebruikt voordat je deze blokkeert.",

      steps: [
        {
          title: "Ontvang de melding",
          text:
            "Je krijgt een mail (vaak) vanuit klantenservice of consumentenservice dat een online bestelde cadeaukaart nog niet is aangekomen.",
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
            "Vul het ordernummer in zonder spaties en klik op zoeken.",
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
          title: "Controleer eerst of de cadeaukaart is gebruikt",
          text:
            "Klik één keer op het product onder 'Producten', zodat deze grijs gearceerd is. Klik vervolgens op 'Toon Kaarten'.",
          image:
            "images/hem-giftcards/06-toon-kaarten.png"
        },

        {
          title: "Controleer de status van de cadeaukaart",
          text:
            "Arceer de cadeaukaart grijs en klik vervolgens op 'Kaartinformatie'.",
          image:
            "images/hem-giftcards/07-kaartinformatie-openen.png"
        },

        {
          title: "Bekijk de kaartinformatie",
          text:
            "Vervolgens krijg je de kaartinformatie te zien. Controleer hier onder andere de huidige balans van de cadeaukaart.",
          image:
            "images/hem-giftcards/08-kaartinformatie.png"
        },

        {
          title: "Blokkeer de cadeaukaart indien deze niet is gebruikt",
          text:
            "Is de huidige balans hetzelfde als de originele waarde? Dan is de cadeaukaart niet gebruikt en kan deze worden geblokkeerd. Ga terug naar het vorige venster, arceer de cadeaukaart opnieuw grijs en klik op 'Blokkeer kaart'.",
          image: ""
        },

        {
          title: "Bevestig de afhandeling per mail",
          text:
            "Mail terug dat de cadeaukaart is geblokkeerd en dat klantenservice/consumentenservice de klant kan vergoeden. Zet altijd de mailbox in CC, zodat teruggevonden kan worden wat er eerder is gemaild.",
          image: ""
        }
      ]
    },

    // =========================================================
    // HEMA ZAKELIJK - FOLDER
    // =========================================================

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

    // =========================================================
    // HEMA ZAKELIJK - ANNULEREN VAN ZAKELIJKE ORDERS
    // =========================================================

    {
      id: "zakelijke-order-annuleren",
      category: "dagelijks",
      parent: "hema-zakelijk",

      title: "Annuleren van zakelijke orders",

      summary:
        "Stappenplan voor het annuleren van een zakelijke cadeaukaartorder.",

      system: "Zakelijk Trade",
      frequency: "Wanneer nodig",
      duration: "± 5 min",

      featured: false,

      tags: [
        "hema zakelijk",
        "zakelijke order",
        "annuleren",
        "cadeaukaart",
        "trade"
      ],

      caution:
        "Controleer zorgvuldig of je het juiste ordernummer hebt geselecteerd voordat je de order annuleert.",

      steps: [
        {
          title: "Ontvang de aanvraag",
          text:
            "Je krijgt een mail, vaak vanuit klantenservice of consumentenservice, met het verzoek om een cadeaukaart te annuleren die door hen is aangeboden ter compensatie of coulance.",
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
          title: "Selecteer en annuleer de order",
          text:
            "Selecteer de order door er één keer op te klikken zodat deze donkergrijs gearceerd is. Klik vervolgens op 'Order annuleren' en daarna op 'OK'.",
          image: ""
        },

        {
          title: "Bevestig de annulering",
          text:
            "De order is nu geannuleerd en de cadeaukaart is geblokkeerd/gerefund. Stuur vervolgens een bevestiging naar de betreffende inbox.",
          image: ""
        }
      ]
    },

    // =========================================================
    // HEMA ZAKELIJK - NIEUWE RELATIE TOEVOEGEN
    // =========================================================

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

      tags: [
        "hema zakelijk",
        "nieuwe relatie",
        "trade",
        "zakelijke klant",
        "debtor code",
        "klantnummer"
      ],

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
          title: "Zoek de actieve zakelijke relaties",
          text:
            "Selecteer bij het veld 'Actief' de waarde 'Ja' en klik op 'Zoeken'.",
          image:
            "images/hema-zakelijk/nieuwe-relatie/02-actieve-relaties.png"
        },

        {
          title: "Sorteer op klantnummer",
          text:
            "Klik op 'Klantnummer'. Alle relaties worden nu op klantnummer gesorteerd. Kopieer het laatste klantnummer; dit nummer heb je nodig voor het aanmaken van een nieuwe relatie.",
          image:
            "images/hema-zakelijk/nieuwe-relatie/03-klantnummer.png"
        },

        {
          title: "Maak een nieuwe relatie aan",
          text:
            "Klik bovenaan op 'Nieuw'. Vul rechtsboven bij 'Debtor code' het gekopieerde klantnummer in en tel hier 1 bij op. Bijvoorbeeld: klantnummer 17654 wordt 17655.",
          image: ""
        },

        {
          title: "Vul de relatiegegevens in",
          text:
            "Vul de overige gegevens van de nieuwe relatie in.",

          bullets: [
            "Klantnaam",
            "Emailadres",
            "KvK nummer",
            "BTW nummer",
            "Ga naar het tabje 'Adressen' en klik op 'Nieuw' om een adres toe te voegen",
            "Ga naar 'Contactpers.' en klik op 'Nieuw' om een contactpersoon toe te voegen"
          ],

          image: ""
        },

        {
          title: "Sla de nieuwe relatie op",
          text:
            "Klik op 'Opslaan'. Je kunt nu een order invoeren en de nieuwe relatie gebruiken.",
          image: ""
        }
      ]
    },

    // =========================================================
    // HEMA ZAKELIJK - ORDERS HANDMATIG INVOEREN
    // =========================================================

    {
      id: "orders-handmatig-invoeren",
      category: "dagelijks",
      parent: "hema-zakelijk",

      title: "Orders handmatig invoeren",

      summary:
        "Stappenplan voor het handmatig invoeren van een zakelijke order in Trade.",

      system: "Zakelijk Trade",
      frequency: "Wanneer nodig",
      duration: "± 5–10 min",

      featured: false,

      tags: [
        "hema zakelijk",
        "order",
        "handmatig invoeren",
        "trade",
        "zakelijke order"
      ],

      steps: [
        {
          title: "Ga naar Orders",
          text:
            "Ga in Trade naar 'Orders'.",
          image: ""
        },

        {
          title: "Maak een nieuwe order aan",
          text:
            "Klik op 'Nieuw' en vul de gemarkeerde gegevens in bij 'Klant type' en 'Gewenste leverdatum'. Gebruik bij klanttype 'Zakelijk'.",
          image: ""
        },

        {
          title: "Selecteer de klant",
          text:
            "Klik op het pijltje bij 'Klant'. Zoek vervolgens de juiste klant op en selecteer deze.",
          image: ""
        },

        {
          title: "Vul eventuele referenties in",
          text:
            "Als er een order- of factuurreferentie is, vul deze direct in bij 'Klant order referentie' en/of 'Klant factuur referentie'.",
          image: ""
        },

        {
          title: "Voeg de cadeaukaarten toe",
          text:
            "Klik op 'Voeg toe' om het soort cadeaukaart, het aantal en de waarde van de cadeaukaarten toe te voegen. Kies daarna bij 'Verpakking/sjabloon' of er wel of geen verpakking nodig is.",
          image: ""
        },

        {
          title: "Sla de order op",
          text:
            "Klik daarna op 'Opslaan'.",
          image: ""
        },

        {
          title: "Controleer eventuele korting",
          text:
            "Is er sprake van korting buiten de kortingsstaffel? Volg dan de aparte instructie voor 'Korting'.",
          image: ""
        },

        {
          title: "Controleer of een PO-nummer nodig is",
          text:
            "Is een PO-nummer nodig? Volg dan de aparte instructie voor 'PO-nummer'.",
          image: ""
        },

        {
          title: "Controleer het subtotaal",
          text:
            "Controleer aan het einde of het subtotaalbedrag klopt.",
          image: ""
        },

        {
          title: "Sla de gecontroleerde order definitief op",
          text:
            "Heb je alles dubbel gecontroleerd? Klik dan opnieuw op 'Opslaan'.",
          image: ""
        }
      ]
    },

    // =========================================================
    // HEMA ZAKELIJK - KORTING
    // =========================================================

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

      tags: [
        "hema zakelijk",
        "korting",
        "staffelkorting",
        "orderwaardekorting",
        "productkorting",
        "trade"
      ],

      caution:
        "Gebruik deze werkwijze wanneer korting buiten de normale kortingsstaffel moet worden toegevoegd.",

      steps: [
        {
          title: "Schakel de orderwaardekorting uit",
          text:
            "Vink eerst 'Bereken Orderwaardekorting in deze order' uit.",
          image:
            "images/hema-zakelijk/korting/01-orderwaardekorting.png"
        },

        {
          title: "Voeg de korting toe",
          text:
            "Voeg de korting in euro's toe bij 'Productkorting (incl.)'. Bereken eerst het kortingsbedrag. Voorbeeld: 10% korting van €10 is €10 × 0,1 = €1.",
          image:
            "images/hema-zakelijk/korting/02-productkorting.png"
        }
      ],

      infoBox: {
        title: "Staffelkorting",

        text:
          "Gebruik onderstaande staffel om te controleren welk kortingspercentage van toepassing is op basis van de orderwaarde.",

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

    // =========================================================
    // ORDERS - GOEDE DOELEN LOTERIJEN
    // =========================================================

    {
      id: "gdl-order",
      category: "orders",

      title:
        "Order invoeren Goede Doelen Loterijen (GDL)",

      summary:
        "Stappenplan voor het verwerken en invoeren van orders van de Nationale Postcode Loterij (NPL) en VriendenLoterij (VL).",

      system: "Zakelijk Trade",
      frequency: "Wanneer een GDL-order binnenkomt",
      duration: "± 15–20 min",

      featured: true,

      tags: [
        "gdl",
        "goede doelen loterijen",
        "npl",
        "nationale postcode loterij",
        "vriendenloterij",
        "vl",
        "redemptie",
        "zakelijk trade",
        "inkooporder",
        "cadeaukaart",
        "prisma",
        "pondres",
        "sidekix"
      ],

      caution:
        "Controleer bij GDL-orders zorgvuldig de klant, het PO-nummer, de geldigheidsdatum, de afleverdatum en het afleveradres aan de hand van de ontvangen inkooporder.",

      steps: [

        {
          title:
            "Open de ontvangen inkooporder",

          text:
            "In de inbox *HEM zakelijk ontvang je regelmatig nieuwe inkooporders van de Goede Doelen Loterijen. Open de inkooporder en gebruik deze tijdens het invoeren van de order als bron voor de ordergegevens.",

          image: ""
        },

        {
          title:
            "Maak een nieuwe zakelijke order aan",

          text:
            "Ga naar Zakelijk Trade, klik op 'Orders', vervolgens op 'Nieuw' en daarna op '+ Nieuw'.",

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
            "De klant is altijd 'NPL - GDL' of 'VL - GDL'. Kies de klant die overeenkomt met de ontvangen inkooporder.",

          image: ""
        },

        {
          title:
            "Vul het PO-nummer in",

          text:
            "Vul bij 'Klant Order Referentie' en 'Klant factuur referentie' het PO-nummer van de inkooporder in.",

          image: ""
        },

        {
          title:
            "Vul de aanvullende orderinformatie in",

          text:
            "Open het dropdownmenu 'Meer informatie' en vul bij 'Instructies voor Uitvoerder' de gegevens over de geldigheid en afleverdatum in.",

          bullets: [
            "Deze kaart is geldig t/m: afleverdatum + 2 dagen + 2 jaar",
            "Afleverdatum: gebruik de aangegeven leverdatum op de inkooporder / het PO-nummer"
          ],

          image: ""
        },

        {
          title:
            "Voeg het juiste product toe",

          text:
            "Ga naar 'Product' en klik op 'Voeg toe'. Selecteer bij product 'NPL/VL - fysieke cadeaukaarten redemptie'. Voor iedere loterij is een apart product op basis van redemptie aangemaakt.",

          image: ""
        },

        {
          title:
            "Vul aantal en waarde in",

          text:
            "Vul het aantal cadeaukaarten en de waarde per cadeaukaart in zoals aangegeven op de inkooporder.",

          image: ""
        },

        {
          title:
            "Vul de expiratiedatum in",

          text:
            "Ga naar 'Opties' en vul de expiratiedatum in. De expiratiedatum is de datum van geldigheid plus 1 dag. Vink vervolgens het vakje bij 'Afw. Afleveradres' aan en ga naar het tabblad 'Afleveradres'.",

          bullets: [
            "Expiratiedatum = datum geldigheid + 1 dag",
            "Controleer het afleveradres op de inkooporder bij 'Ship to'",
            "Het afleveradres kan van Sidekix of Pondres zijn"
          ],

          image: ""
        },

        {
          title:
            "Vul het afleveradres in",

          text:
            "Vul bij 'Afleveradres' de benodigde adresgegevens in. Gebruik hiervoor altijd het afleveradres dat op de inkooporder staat. Dit kan het adres van Pondres of Sidekix zijn.",

          bullets: [
            "Geslacht",
            "Voornaam",
            "Achternaam",
            "Straat",
            "Huisnummer",
            "Postcode",
            "Plaats",
            "Bedrijfsnaam",
            "E-mailadres",
            "Land"
          ],

          image: ""
        },

        {
          title:
            "Sla de order op",

          text:
            "Klik op 'Opslaan'.",

          image: ""
        },

        {
          title:
            "Controleer alle gegevens",

          text:
            "Controleer alle ingevoerde gegevens nogmaals zorgvuldig aan de hand van de inkooporder.",

          image: ""
        },

        {
          title:
            "Sla de gecontroleerde order definitief op",

          text:
            "Ben je er zeker van dat alle gegevens kloppen? Klik dan opnieuw op 'Opslaan'.",

          image: ""
        },

        {
          title:
            "Mail de orderinformatie intern",

          text:
            "Stuur na het invoeren een e-mail met het Trade-ordernummer en de expiratiedatum. Voeg de inkooporder als bijlage toe en zet *HEM zakelijk in de CC.",

          bullets: [
            "Aan: b2b.cadeaukaarten@hema.nl",
            "Aan: henneke.velthove@hema.nl",
            "Vermeld het Trade-ordernummer",
            "Vermeld de expiratiedatum",
            "Voeg de inkooporder als bijlage toe",
            "Zet *HEM zakelijk in de CC"
          ],

          image: ""
        },

        {
          title:
            "Mail de order naar Prisma",

          text:
            "Mail Prisma het inkooporderformulier (de PDF uit de ontvangen e-mail). Geef aan dat er een nieuwe GDL-order is ingevoerd en vermeld het Trade-ordernummer, de leverdatum en de geldigheid van de kaart.",

          bullets: [
            "info@prismadirect.nl",
            "lizette@prismadirect.nl",
            "Vermeld dat een nieuwe GDL-order is ingevoerd",
            "Vermeld het Trade-ordernummer",
            "Vermeld de leverdatum",
            "Vermeld de geldigheid van de kaart",
            "Voeg het inkooporderformulier als PDF toe"
          ],

          image: ""
        }
      ]
    },

    // =========================================================
    // ORDERS - INTERNE ORDER IN TRADE
    // =========================================================

    {
      id: "trade-order",
      category: "orders",

      title:
        "Nieuwe interne order invoeren in Trade",

      summary:
        "Stappenplan voor het invoeren van een interne order in Trade.",

      system: "Trade",
      frequency: "Regelmatig",
      duration: "± 10 min",

      featured: true,

      tags: [
        "trade",
        "interne order",
        "order"
      ],

      steps: [
        {
          title:
            "Open Trade",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        },

        {
          title:
            "Maak een nieuwe order aan",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        }
      ]
    },

    // =========================================================
    // BETALINGEN
    // =========================================================

    {
      id: "bank-betalingen",
      category: "betalingen",

      title: "Bank betalingen",

      summary:
        "Stappenplan voor het controleren en verwerken van bankbetalingen.",

      system:
        "Bank / orderadministratie",

      frequency: "Dagelijks",
      duration: "± 5 min",

      featured: true,

      tags: [
        "bank",
        "betalingen",
        "betaling"
      ],

      steps: [
        {
          title:
            "Open het betaaloverzicht",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        },

        {
          title:
            "Controleer de betaling",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        }
      ]
    },

    // =========================================================
    // KLANTENSERVICE
    // =========================================================

    {
      id: "hema-tickets",
      category: "klantenservice",

      title:
        "Mailbox Klantenservice HEMA Tickets",

      summary:
        "Werkwijze voor de mailbox Klantenservice HEMA Tickets.",

      system: "HEMA Tickets",
      frequency: "Dagelijks",
      duration: "± 10 min",

      featured: true,

      tags: [
        "klantenservice",
        "tickets",
        "mailbox"
      ],

      steps: [
        {
          title:
            "Open de mailbox",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        },

        {
          title:
            "Controleer het ticket",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        }
      ]
    },

    {
      id: "snowworld",
      category: "klantenservice",

      title:
        "Handleiding herroeping Snowworld",

      summary:
        "Stappenplan voor het verwerken van een Snowworld-herroeping.",

      system: "Klantenservice",
      frequency: "Wanneer nodig",
      duration: "± 5 min",

      featured: false,

      tags: [
        "snowworld",
        "herroeping",
        "klantenservice"
      ],

      steps: [
        {
          title:
            "Open de aanvraag",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        },

        {
          title:
            "Verwerk de herroeping",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        }
      ]
    },

    // =========================================================
    // UITINGEN
    // =========================================================

    {
      id: "broadsign",
      category: "uitingen",

      title:
        "Broadsign (DOOH puischermen)",

      summary:
        "Stappenplan voor het inregelen van content op DOOH-pu schermen.",

      system: "Broadsign",
      frequency: "Wanneer nodig",
      duration: "± 10 min",

      featured: true,

      tags: [
        "broadsign",
        "dooh",
        "puischermen",
        "uitingen"
      ],

      steps: [
        {
          title:
            "Open Broadsign",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        },

        {
          title:
            "Selecteer de juiste schermen",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

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
        "Stappenplan voor het inregelen van content op kassaschermen.",

      system: "Rcos",
      frequency: "Wanneer nodig",
      duration: "± 10 min",

      featured: false,

      tags: [
        "rcos",
        "dooh",
        "kassaschermen",
        "uitingen"
      ],

      steps: [
        {
          title:
            "Open Rcos",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        },

        {
          title:
            "Selecteer de juiste kassaschermen",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        }
      ]
    },

    // =========================================================
    // ADVERTISING
    // =========================================================

    {
      id: "google-admanager",
      category: "advertising",

      title: "Google Ad Manager",

      summary:
        "Stappenplan voor het opzetten van campagnes in Google Ad Manager.",

      system: "Google Ad Manager",
      frequency: "Wanneer nodig",
      duration: "± 15 min",

      featured: true,

      tags: [
        "google ad manager",
        "advertising",
        "campagne"
      ],

      steps: [
        {
          title:
            "Open Google Ad Manager",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        },

        {
          title:
            "Maak de campagne aan",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        }
      ]
    },

    // =========================================================
    // ONLINE BANNERS
    // =========================================================

    {
      id: "online-banners",
      category: "banners",

      title:
        "Stappenplan Online Banners",

      summary:
        "Stappenplan voor het maken en verwerken van online banners.",

      system: "Adobe Express",
      frequency: "Wanneer nodig",
      duration: "± 15 min",

      featured: true,

      tags: [
        "online banners",
        "banner",
        "adobe express"
      ],

      steps: [
        {
          title:
            "Open het juiste template",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        },

        {
          title:
            "Maak de banner",

          text:
            "Voeg hier de officiële uitleg uit het Word-document toe.",

          image: ""
        }
      ]
    }
  ]
};
