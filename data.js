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

      image:
        "images/gdl/01-inkooporder.png"
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

      image:
        "images/gdl/07-product-toevoegen.png"
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

      image:
        "images/gdl/10-afleveradres.png"
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

      image:
        "images/gdl/14-interne-mail.png"
    },

    {
      title:
        "Mail de order naar Prisma",

      text:
        "Mail Prisma het inkooporderformulier (de PDF uit de ontvangen e-mail). Geef aan dat er een nieuwe GDL-order is ingevoerd en vermeld het Trade-ordernummer, de leverdatum en de geldigheid van de kaart.",

      bullets: [
        "info@prismadirect.nl",
        "lizette@prismadirect.nl"
      ],

      subsection: {
        title:
          "Activeren van de order:",

        steps: [
          "Ga naar Trade en vervolgens naar 'Afgehandeld' en vul hier het betreffende ordernummer in.",
          "Dubbelklik op de order en kopieer vervolgens de activatiecode.",
          "Sluit vervolgens de order, selecteer de betreffende order en klik op 'Activeer order'.",
          "Plak hier de gekopieerde activatiecode in en klik op 'Activeren'."
        ],

        note:
          "Controleer op geplande leverdatum activatie en activeer de order handmatig."
      },

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
    "Stappenplan voor het invoeren en afhandelen van een interne order in Trade.",

  system: "Zakelijk Trade",
  frequency: "Wanneer nodig",
  duration: "± 10–15 min",

  featured: true,

  tags: [
    "trade",
    "interne order",
    "intern bestelformulier",
    "zakelijke order",
    "digitale cadeaukaart",
    "fysieke cadeaukaart",
    "kostenplaats"
  ],

  caution:
    "Controleer altijd of het interne bestelformulier volledig is ingevuld en of toestemming van de kostenplaatsverantwoordelijke aanwezig is.",

  steps: [
    {
      title:
        "Controleer het interne bestelformulier",

      text:
        "Je ontvangt van een interne afdeling binnen HEMA een ingevuld 'intern bestelformulier' met daarin toestemming van de kostenplaatsverantwoordelijke.",

      image: ""
    },

    {
      title:
        "Maak een nieuwe order aan",

      text:
        "Ga naar Trade, klik op 'Orders', vervolgens op 'Nieuw' en daarna op '+ Nieuw'.",

      image: ""
    },

    {
      title:
        "Selecteer klanttype en klant",

      text:
        "Vul bij klanttype 'Zakelijk' in en selecteer als klant 'HEMA BV New Services - interne orders'.",

      image: ""
    },

    {
      title:
        "Voeg het gewenste product toe",

      text:
        "Ga naar het tabblad 'Producten' en klik op 'Voeg toe'. Vul het gewenste product in en eventueel het gewenste afleveradres.",

      bullets: [
        "Voor digitale cadeaukaarten: E-gift Stippen",
        "Voor fysieke cadeaukaarten: HEMA cadeaukaart logo"
      ],

      image: ""
    },

    {
      title:
        "Verwijder verzend- en handelingskosten",

      text:
        "Klik op 'Opslaan' en ga vervolgens naar 'Toeslagen'. Zet hier het vinkje bij 'Bereken de toeslagen automatisch' uit. Selecteer daarna de verzend- en handelingskosten en klik op 'Verwijder'.",

      image: ""
    },

    {
      title:
        "Vul de klant order referentie in",

      text:
        "Ga terug naar 'Info'. Vul bij 'Klant Order Referentie' de kostenplaats in, bijvoorbeeld 'kostenplaats xxx'.",

      image: ""
    },

    {
      title:
        "Sla de order op",

      text:
        "De order kan nu worden opgeslagen.",

      image: ""
    },

    {
      title:
        "Mail de orderinformatie",

      text:
        "Stuur een e-mail met het ordernummer en de kostenplaats en voeg het ingevulde interne bestelformulier als bijlage toe.",

      bullets: [
        "b2b-cadeaukaarten@hema.nl",
        "henneke.velthove@hema.nl",
        "Vermeld het ordernummer",
        "Vermeld de kostenplaats",
        "Voeg het ingevulde intern bestelformulier toe"
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
        "Gaat het om digitale cadeaukaarten? Houd de order dan goed in de gaten in Trade. De digitale cadeaukaarten dien je zelf uit te leveren aan je collega van de betreffende afdeling.",

      image: ""
    },

    {
      title:
        "Controleer het afleveradres bij fysieke cadeaukaarten",

      text:
        "Gaat het om fysieke cadeaukaarten? Dan heb je als het goed is een afleveradres opgegeven. Prisma zal de cadeaukaarten naar dit adres opsturen.",

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
            "Je ontvangt een e-mail zoals in onderstaand voorbeeld in de *HEMA zakelijk inbox.",

          image:
            "images/trade-order/01-digitale-cadeaukaart-mail.png"
        },

        {
          title:
            "Download de digitale cadeaukaartbestanden",

          text:
            "Download de digitale cadeaukaartbestanden en controleer of het ordernummer overeenkomt met de betreffende order.",

          image: ""
        },

        {
          title:
            "Deel de cadeaukaarten met de aanvrager",

          text:
            "Zet de bestanden in een map en deel deze via de e-mail met de betreffende aanvrager.",

          image: ""
        }
      ],

      subsection: {
        title:
          "Activeren van de order",

        steps: [
          "Ga naar Trade en vervolgens naar 'Afgehandeld' en vul hier het betreffende ordernummer in.",
          "Dubbelklik op de order en kopieer vervolgens de activatiecode.",
          "Sluit vervolgens de order, selecteer de betreffende order en klik op 'Activeer order'.",
          "Plak hier de gekopieerde activatiecode in en klik op 'Activeren'."
        ]
      }
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
    "Stappenplan voor het controleren en verwerken van binnengekomen betalingen voor zakelijke orders.",

  system: "Zakelijk Trade",
  frequency: "Wanneer betalingen binnenkomen",
  duration: "± 5 min",

  featured: true,

  tags: [
    "bank",
    "betalingen",
    "betaling",
    "zakelijke order",
    "trade",
    "wacht op betaling",
    "uitleveren",
    "order"
  ],

  caution:
    "Controleer altijd of het betaalde bedrag overeenkomt met de betreffende order voordat je de order uitlevert.",

  steps: [
    {
      title:
        "Open de e-mail met de betaling",

      text:
        "Vanuit Henneke of Anita ontvang je de betalingen die zijn binnengekomen van zakelijke orders. Deze moeten worden doorgezet in Trade om vervolgens verwerkt te worden door Prisma. Open het mailtje van Anita of Henneke, vaak met het onderwerp 'Bank'.",

      image:
        "images/bank-betalingen/01-bankmail.png"
    },

    {
      title:
        "Zoek het ordernummer",

      text:
        "Zoek het betreffende ordernummer in de e-mail. Dit ordernummer heb je nodig om de juiste order in Trade terug te vinden.",

      image: ""
    },

    {
      title:
        "Ga naar Orders in Trade",

      text:
        "Ga naar Trade en klik op 'Orders'.",

      image: ""
    },

    {
      title:
        "Zoek de order bij Wacht op betaling",

      text:
        "Ga naar het tabblad 'Wacht op betaling' en vul hier het betreffende ordernummer in.",

      image: ""
    },

    {
      title:
        "Controleer de betaling",

      text:
        "Controleer of de binnengekomen betaling overeenkomt met het bedrag van de order.",

      image: ""
    },

    {
      title:
        "Lever de order uit",

      text:
        "Selecteer de betreffende order en klik op 'Uitleveren'.",

      image: ""
    }
  ],

  infoBox: {
    title:
      "Klant zegt betaling te hebben gedaan?",

    text:
      "Vraag de betaling dan na bij Anita, Henneke, b2b.cadeaukaarten@hema.nl of henneke.velthove@hema.nl. Vermeld hierbij het betreffende ordernummer en vraag de klant om een betaalbewijs."
  }
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
    "Werkinstructies voor vragen, niet ontvangen tickets, herroepingen en SnowWorld binnen de HEMA Tickets inbox.",

  system:
    "HEMA Tickets / Tickets CMS",

  frequency:
    "Dagelijks",

  duration:
    "Afhankelijk van de aanvraag",

  featured: true,

  tags: [
    "klantenservice",
    "tickets",
    "hema tickets",
    "tickets cms",
    "happyflow",
    "snowworld",
    "center parcs",
    "flywise",
    "gct",
    "govolta",
    "herroepen",
    "herroeping",
    "enviso"
  ],

  introBox: {
    title:
      "*HEM Tickets CS",

    text:
      "In de tickets inbox komen er met name vragen vanuit de klantenservice omtrent orders/codes die geblokkeerd dienen te worden of orders die door een typefout niet juist zijn afgeleverd."
  },

  infoSections: [
    {
      title:
        "Contactgegevens partners",

      items: [
        {
          label:
            "Center Parcs",
          value:
            "sales.nl@groupepvcp.com",
          href:
            "mailto:sales.nl@groupepvcp.com"
        },
        {
          label:
            "SnowWorld",
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
      title:
        "Let op",

      text:
        "Mail altijd vanuit de inbox en zet de inbox altijd in de CC. Zo blijft de communicatie behouden en kun je deze later terugzoeken in het archief of de inbox wanneer dat noodzakelijk is.",

      type:
        "warning"
    },

    {
      title:
        "Contactgegevens HappyFlow (tickets website)",

      items: [
        {
          label:
            "Edo",
          value:
            "Edo@happyflow.io",
          href:
            "mailto:Edo@happyflow.io"
        },
        {
          label:
            "Francis",
          value:
            "francis@happyflow.io",
          href:
            "mailto:francis@happyflow.io"
        }
      ]
    },

    {
      title:
        "Linkjes",

      items: [
        {
          label:
            "Tickets CMS",
          value:
            "Open Tickets CMS",
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

      text:
        "Gebruik onderstaande stappen wanneer een klant aangeeft dat een e-mail met tickets niet is ontvangen.",

      subsection: {
        title:
          "E-mail met ticket niet ontvangen",

        steps: [
          "Ga naar het Tickets CMS, klik op 'Admin' en ga naar 'Order overview'.",
          "Vul bij Admin het ordernummer zonder spaties in om de status te controleren. Zie je twee groene kruisjes? Dan is de betaling ontvangen en zijn de tickets verzonden.",
          "Ga naar de inbox '*HEMA Tickets' en zoek hier het ordernummer op.",
          "Klik op 'Doorsturen' en stuur de e-mail opnieuw door naar het opgegeven e-mailadres."
        ]
      }
    },

    {
      title:
        "Tickets herroepen",

      text:
        "Gebruik onderstaande stappen wanneer een klant tickets wil herroepen binnen de herroepingstermijn.",

      subsection: {
        title:
          "Tickets herroepen",

        steps: [
          "De klant wil tickets herroepen binnen de herroepingstermijn van 14 dagen.",
          "Zoek het ordernummer op in het Tickets CMS, open de order en controleer of de aanvraag binnen de herroepingstermijn van 14 dagen valt.",
          "Kopieer de betreffende codes en mail deze door naar de juiste partner.",
          "Wanneer je akkoord hebt op het annuleren, kan de klantenservice worden geïnstrueerd om de klant te vergoeden."
        ]
      }
    },

    {
      title:
        "1.1 Handleiding herroeping SnowWorld",

      text:
        "Onderstaande samenvatting beschrijft de belangrijkste stappen uit de SnowWorld-partnerhandleiding.",

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
            "Kies 'reseller' en vul je bedrijfsgegevens in.",
            "Zoek en koppel met SnowWorld.",
            "Zodra SnowWorld de koppeling goedkeurt, kun je de deals gebruiken."
          ]
        },

        {
          title:
            "2. Vouchercodes aanvragen",

          lines: [
            "Log in op Enviso en ga naar de Trade-omgeving.",
            "Ga naar Deals en kies de juiste SnowWorld-deal.",
            "Via het winkelwagen-icoon kun je nieuwe codes bestellen.",
            "Je kunt maximaal 5.000 codes per bestelling aanvragen.",
            "De codes verschijnen vervolgens in je account en kun je gebruiken voor je verkoop."
          ]
        },

        {
          title:
            "3. Codes annuleren",

          lines: [
            "Wil een klant een code herroepen? Zoek dan de juiste batch op.",
            "Selecteer de betreffende code(s).",
            "Je kunt maximaal 25 codes tegelijk annuleren.",
            "Daarna worden de geannuleerde codes gecrediteerd.",
            "Een code die al door een gast is gebruikt, kan niet meer worden geannuleerd."
          ]
        }
      ],

      note:
        "Visuele uitleg is te vinden in de handleiding."
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
    "Stappenplan voor het inregelen en publiceren van uitingen op DOOH-pu schermen via Broadsign Publish.",

  system:
    "Broadsign Publish",

  frequency:
    "Wanneer nodig",

  duration:
    "± 10–15 min",

  featured: true,

  tags: [
    "broadsign",
    "dooh",
    "puischermen",
    "uitingen",
    "publish",
    "planning",
    "schermen",
    "campagne",
    "content"
  ],

  caution:
    "Stem altijd af welke schermen geselecteerd moeten worden en welke looptijd en frequentie voor de uiting gelden.",

  steps: [
    {
      title:
        "Open Broadsign Publish",

      text:
        "Ga naar Broadsign Publish en log in met de beschikbare inloggegevens.",

      image: ""
    },

    {
      title:
        "Maak een nieuw bericht aan",

      text:
        "Klik op 'Creëer een nieuw bericht' om een nieuwe uiting aan te maken.",

      image:
        "images/broadsign/02-nieuw-bericht.png"
    },

    {
      title:
        "Selecteer en upload de uiting",

      text:
        "Selecteer de juiste uiting en upload deze via de uploadknop. Gebruik hiervoor een bestand met de juiste afmetingen van 1080 × 1920 pixels.",

      image:
        "images/broadsign/03-uiting-uploaden.png"
    },

    {
      title:
        "Selecteer de juiste schermen",

      text:
        "Selecteer de schermen door op de map 'Met mij gedeeld' te klikken. Stem altijd af welke schermen wel en niet geselecteerd moeten worden.",

      image:
        "images/broadsign/04-schermen-selecteren.png"
    },

    {
      title:
        "Stel de looptijd en planning in",

      text:
        "Klik linksboven op 'Specifiek' en stel de looptijd in via de agenda. Kies eventueel specifieke dagen waarop de uiting moet draaien. Onderaan staat de frequentie van de uiting; ook deze wordt altijd in overleg bepaald.",

      image:
        "images/broadsign/05-planning-instellen.png"
    },

    {
      title:
        "Geef de uiting een naam",

      text:
        "Geef de uiting een duidelijke naam volgens de afgesproken naamconventie.",

      bullets: [
        "Gebruik het formaat: WEEK_NAAM UITING",
        "Voorbeeld: WK34_Jumbo_Prijzenstorm_Robijn"
      ],

      image: ""
    },

    {
      title:
        "Keur goed en publiceer",

      text:
        "Klik op 'Goedkeuren & publiceren'. De uiting wordt daarna geüpload naar alle geselecteerde schermen.",

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
