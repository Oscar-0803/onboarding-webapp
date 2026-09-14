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
    },
    {
  id: "organic-social-belgie",
  label: "België",
  icon: "🇧🇪",
  description:
    "Strategisch en praktisch handboek voor Organic Social Media België"
},
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
    "Stappenplan voor het inregelen en publiceren van uitingen op de kassaschermen via rCOS.",

  system:
    "rCOS",

  frequency:
    "Wanneer nodig",

  duration:
    "± 10–15 min",

  featured: false,

  tags: [
    "rcos",
    "rCOS",
    "dooh",
    "kassaschermen",
    "uitingen",
    "filmschema",
    "retail media",
    "cadeaukaart",
    "azure"
  ],

  caution:
    "De keuze van het filmschema wordt altijd afgestemd. Controleer daarnaast of de uiting het juiste formaat van 1024 × 768 pixels heeft.",

  steps: [
    {
      title:
        "Log in bij rCOS",

      text:
        "Ga naar rCOS en log in met jouw HEMA-account via HEMA Azure AD.",

      image:
        "images/rcos/01-inloggen.png"
    },

    {
      title:
        "Open Filmschema's",

      text:
        "Klik op 'Systeembeheer' en vervolgens op 'Filmschema's'.",

      image:
        "images/rcos/02-filmschemas.png"
    },

    {
      title:
        "Kies het juiste filmschema",

      text:
        "Scroll naar beneden. Hier kun je kiezen uit de filmschema's voor Cadeaukaarten en Retail Media. De keuze van een filmschema wordt altijd in overleg bepaald.",

      infoCards: [
        {
          title:
            "Cadeaukaarten",

          items: [
            "Cadeaukaart_NL_05_2025",
            "Cadeaukaart_BE_NL_04_2025",
            "Cadeaukaart_BE_FR_04_2024",
            "Cadeaukaart_BE_NL_FR_04_2024"
          ],

          note:
            "De schema's zijn opgebouwd als: CATEGORIE_LAND_TAAL. Je hoeft niet naar het jaartal te kijken."
        },

        {
          title:
            "Retail Media",

          items: [
            "Retail Media EV ONLY — alleen eigen HEMA-filialen",
            "Retail Media - TIJDELIJK — eigen HEMA-filialen + franchise-filialen"
          ]
        }
      ],

      image: ""
    },

    {
      title:
        "Upload de gewenste uiting",

      text:
        "Upload de gewenste uiting in het gestippelde uploadvak. Gebruik een bestand met het formaat 1024 × 768 pixels.",

      image:
        "images/rcos/04-uiting-uploaden.png"
    },

    {
      title:
        "Geef de uiting een naam en sla op",

      text:
        "Geef de uiting een naam in het systeem en klik rechtsboven op 'Opslaan'. Gebruik hiervoor de afgesproken naamconventie. Kopieer vervolgens de inhoud van het veld 'Naam' en plak deze ook in 'Toelichting kassa'.",

      bullets: [
        "Gebruik als naam: NAAM UITING-WEEK",
        "Kopieer de inhoud van 'Naam' naar 'Toelichting kassa'",
        "Controleer de actieve dagen en tijden voordat je opslaat"
      ],

      image:
        "images/rcos/05-uiting-naamgeven.png"
    },

    {
      title:
        "Controleer of de uiting live staat",

      text:
        "Na het opslaan staat de uiting meteen live. Controleer daarom vooraf nogmaals of je het juiste filmschema, bestand en de juiste instellingen hebt gebruikt.",

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

  title:
    "Google Ad Manager",

  summary:
    "Stappenplan voor het aanmaken, instellen, vullen en monitoren van campagnes in Google Ad Manager.",

  system:
    "Google Ad Manager",

  frequency:
    "Wanneer nodig",

  duration:
    "± 20–30 min",

  featured: true,

  tags: [
    "google ad manager",
    "advertising",
    "campagne",
    "order",
    "line item",
    "creatives",
    "targeting",
    "impressies",
    "cpm",
    "inventory"
  ],

  caution:
    "Controleer vóór het goedkeuren altijd de campagneperiode, targeting, impressiedoelstelling, CPM, URL's en creatives.",

  subsections: [

    // =========================================================
    // 1. ORDER AANMAKEN
    // =========================================================

    {
      title:
        "1. Order aanmaken",

      text:
        "Begin met het aanmaken van een nieuwe order en vul de algemene campagnegegevens in.",

      steps: [
        {
          title:
            "Open Google Ad Manager",

          text:
            "Ga naar Google Ad Manager en log in met je account.",

          image: ""
        },

        {
          title:
            "Ga naar Orders",

          text:
            "Ga in de linker kolom naar 'Delivery' en klik vervolgens op 'Orders'.",

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
            "Vul de General settings in",

          text:
            "Vul de algemene instellingen van de campagne in.",

          bullets: [
            "Naam: adverteerder_jaar_weeknummers_typecampagne",
            "Advertiser: selecteer de juiste adverteerder",
            "Bij Tickets & Vriendenprijsjes kies je HEMA als adverteerder",
            "Nieuwe adverteerder? Kies 'Add a new company' en voeg de adverteerder toe",
            "Labels: leeg laten",
            "Advanced settings: leeg laten"
          ],

          image:
            "images/google-admanager/04-general-settings.png"
        }
      ]
    },


    // =========================================================
    // 2. LINE ITEM INSTELLEN
    // =========================================================

    {
      title:
        "2. Line item instellen",

      text:
        "Maak voor de campagneperiode of per visual een line item aan. Verschillende formaten kunnen binnen hetzelfde line item worden opgenomen.",

      steps: [
        {
          title:
            "Maak een nieuw line item",

          text:
            "Voeg vanuit de order een nieuw line item toe en kies het juiste advertentietype.",

          bullets: [
            "Klik bij New line item op 'Select display ad'",
            "Line item template: leeg laten",
            "Name: campagne_periode_type campagne",
            "Line item type: Standard"
          ],

          image:
            "images/google-admanager/05-line-item-basis.png"
        },

        {
          title:
            "Vul Expected creatives in",

          text:
            "Voeg bij 'Expected creatives' alle formaten toe die je binnen de campagne wilt inzetten.",

          bullets: [
            "Vul alle benodigde bannerformaten in",
            "Additional settings: leeg laten"
          ],

          image:
            "images/google-admanager/05-expected-creatives.png"
        },

        {
          title:
            "Stel Delivery settings in",

          text:
            "Vul de leveringsinstellingen van het line item in.",

          bullets: [
            "Vul startdatum en starttijd in",
            "Vul einddatum en eindtijd in",
            "Gebruik Blackouts wanneer de campagne tijdens bepaalde periodes niet live mag zijn",
            "Quantity: vul het aantal impressies in",
            "Rate: vul het CPM-tarief in",
            "Discount: vul de afgesproken korting in"
          ],

          image:
            "images/google-admanager/05-delivery-settings.png"
        },

        {
          title:
            "Open Add targeting",

          text:
            "Ga naar 'Add targeting' en open de targetinginstellingen voor het line item.",

          image:
            "images/google-admanager/05-targeting.png"
        },

        {
          title:
            "Selecteer de juiste inventory-locaties",

          text:
            "Kies binnen de targeting de locaties waarop de banner zichtbaar moet zijn.",

          bullets: [
            "Selecteer de 2PLP-plekken en de Thank You Page indien van toepassing",
            "Je kunt specifieke locaties op hema.nl selecteren of deselecteren",
            "Voor alleen de Thank You Page selecteer je TY en deselecteer je de overige locaties"
          ],

          image:
            "images/google-admanager/05-targeting-locaties.png"
        },

        {
          title:
            "Stel eventueel categorie-targeting in",

          text:
            "Indien nodig kun je aanvullende targeting instellen zodat de campagne alleen zichtbaar wordt bij specifieke categorieën.",

          image:
            "images/google-admanager/05-categorie-targeting.png"
        },

        {
          title:
            "Controleer de inventory",

          text:
            "Klik op 'Check inventory'. Hiermee controleer je of het ingestelde impressiedoel realistisch en haalbaar is.",

          image:
            "images/google-admanager/05-check-inventory.png"
        },

        {
          title:
            "Sla het line item op",

          text:
            "Wanneer alle instellingen en de inventory zijn gecontroleerd, klik je op 'Save'.",

          image: ""
        }
      ]
    },


    // =========================================================
    // 3. CREATIVES TOEVOEGEN
    // =========================================================

    {
      title:
        "3. Creatives toevoegen",

      text:
        "Voeg na het instellen van het line item de daadwerkelijke bannerbeelden toe.",

      steps: [
        {
          title:
            "Ga naar Creatives",

          text:
            "Open het tabblad 'Creatives' en voeg de creatives toe.",

          bullets: [
            "Klik op 'Add creative' voor één creative",
            "Gebruik 'Bulk upload creatives' wanneer je meerdere formaten wilt toevoegen"
          ],

          image:
            "images/google-admanager/06-creatives-overzicht.png"
        },

        {
          title:
            "Upload de beelden en gebruik Bulk edit",

          text:
            "Sleep de beelden in Google Ad Manager. Selecteer vervolgens alle creatives en klik op 'Bulk edit' als je meerdere creatives tegelijk wilt aanpassen.",

          image:
            "images/google-admanager/06-bulk-edit.png"
        },

        {
          title:
            "Vul de Destination in",

          text:
            "Vul bij 'Destination' de juiste URL in. Gebruik hiervoor de aangeleverde URL met UTM-parameters.",

          bullets: [
            "Bij Tickets kan de link bijvoorbeeld de structuur ?linktrid=retail_media_[HEMA afdeling]_[naam campagne] gebruiken",
            "Bij een externe partner gebruik je de URL van de betreffende partner",
            "Klik op 'Test' om te controleren of de URL werkt en op de juiste pagina uitkomt",
            "Kies bij afdeling bijvoorbeeld Tickets of Retail Media",
            "Laat 'Show ad badging on these creatives' aangevinkt",
            "Klik daarna op 'Save'"
          ],

          image:
            "images/google-admanager/06-destination.png"
        }
      ]
    },


    // =========================================================
    // 4. GOEDKEUREN EN MONITOREN
    // =========================================================

    {
      title:
        "4. Goedkeuren en monitoren",

      text:
        "Rond de campagne af en controleer daarna de status in Google Ad Manager.",

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
            "Controleer na het goedkeuren de status van de campagne.",

          bullets: [
            "Ready: de campagne staat klaar om live te gaan tijdens de ingestelde periode",
            "Delivering: de campagne is live en levert advertenties uit"
          ],

          image: ""
        }
      ]
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
    "Stappenplan voor het maken, aanpassen, dupliceren en downloaden van online banners in Adobe Express.",

  system:
    "Adobe Express",

  frequency:
    "Wanneer nodig",

  duration:
    "± 15–20 min",

  featured: true,

  tags: [
    "online banners",
    "banner",
    "adobe express",
    "sjablonen",
    "bannerformaten",
    "appbanner",
    "tickets",
    "uitjes",
    "nachtje weg",
    "dagje weg"
  ],

  caution:
    "Gebruik altijd het juiste sjabloon en stem bij twijfel de categorie, kleur en bannerformaten af.",

  steps: [
    {
      title:
        "Open Adobe Express",

      text:
        "Ga naar Adobe Express via https://new.express.adobe.com/. Gebruik de afgesproken inloggegevens. Vraag bij twijfel naar de actuele inlog bij Neal.",

      image: ""
    },

    {
      title:
        "Open de map Banner Sjablonen",

      text:
        "Klik in Adobe Express op 'Jouw spullen' en kies daarna de map 'Banner Sjablonen'.",

      image:
        "images/online-banners/02-banner-sjablonen.png"
    },

    {
      title:
        "Kies het juiste sjabloon en de juiste categorie",

      text:
        "In de map staan de sjablonen per categorie. Gebruik alleen de kleur die hoort bij de betreffende actie. Stem de kleur altijd af wanneer je twijfelt.",

      infoCards: [
        {
          title:
            "Paars",

          items: [
            "Nachtje weg"
          ]
        },

        {
          title:
            "Roze",

          items: [
            "Uit eten"
          ]
        },

        {
          title:
            "Groen",

          items: [
            "Dagje weg"
          ]
        }
      ],

      image: ""
    },

    {
      title:
        "Pas de inhoud van de banner aan",

      text:
        "Open het juiste sjabloon. Op pagina 1 staat de reguliere banner en op pagina 2 staat de laatste-kans-banner. Pas de inhoud aan op basis van de actie.",

      bullets: [
        "Pas de titel aan",
        "Pas de subtitel aan",
        "Pas het prijsblok aan",
        "Vervang de afbeelding in het witte vlak",
        "Gebruik hiervoor de aangeleverde beelden van de partner"
      ],

      subsection: {
        title:
          "Locatie van aangeleverde beelden",

        steps: [
          "De aangeleverde afbeeldingen van partners staan op de I-schijf.",
          "Ga naar de map van de betreffende actie.",
          "Open daar de map 'Beelden' en gebruik het geschikte bannerbeeld."
        ]
      },

      image:
        "images/online-banners/04-banner-aanpassen.png"
    },

    {
      title:
        "Dupliceer de banner naar alle benodigde formaten",

      text:
        "Dupliceer de banner naar de benodigde bannerformaten. Voor drie appformaten bestaat een apart sjabloon in dezelfde map; deze zijn herkenbaar aan '_App' in de naam.",

      bullets: [
        "Klik op 'Formaat wijzigen'",
        "Kies het gewenste formaat, bijvoorbeeld 971 × 194",
        "Klik op 'Dupliceren en formaat wijzigen'",
        "Het formaat 1240 × 248 hoeft niet opnieuw aangemaakt te worden; het standaard sjabloon staat al in dit formaat"
      ],

      infoCards: [
        {
          title:
            "Bannerformaten",

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
          ],

          note:
            "Het standaard sjabloon staat al in 1240 × 248."
        },

        {
          title:
            "Appbannerformaten",

          items: [
            "600 × 500",
            "450 × 375",
            "300 × 250"
          ],

          note:
            "Gebruik hiervoor de aparte sjablonen met '_App' in de naam."
        }
      ],

      image:
        "images/online-banners/05-formaten-dupliceren.png"
    },

        {
      title:
        "Download alle banners",

      text:
        "Download alle gemaakte banners en zet deze in de map 'beginactie banners' van de betreffende actie.",

      image: ""
    }
  ]
}
    // =========================================================
// ORGANIC SOCIAL MEDIA - BELGIË
// =========================================================

{
  id: "organic-be-introductie",
  category: "organic-social-belgie",

  title:
    "Introductie & Vrindinnestrategie",

  summary:
    "Introductie tot de strategie, positionering en rol van sociale media voor HEMA België.",

  system:
    "Organic Social Media België",

  frequency:
    "Naslag",

  duration:
    "± 5 min",

  featured: true,

  tags: [
    "belgië",
    "organic social",
    "social media",
    "strategie",
    "vrindinnestrategie"
  ],

  introBox: {
    title:
      "Social Media Handboek België",

    text:
      "Dit handboek geeft richting en structuur aan het gebruik van sociale media voor HEMA België. Het bevat strategische uitgangspunten, creatieve richtlijnen en praktische werkwijzen voor voornamelijk organische social media."
  },

  steps: [
    {
      title:
        "De Vrindinnestrategie",

      text:
        "De overkoepelende strategie is de Vrindinnestrategie. HEMA België presenteert zich op sociale media als een toegankelijke Belgische vriendin die op een informele, vrolijke en herkenbare manier probeert een glimlach op het gezicht van anderen te toveren.",

      bullets: [
        "Humoristische en toegankelijke content",
        "Inspireren met leuke HEMA-producten",
        "Informele en vrolijke communicatie",
        "Dezelfde herkenbare houding richting kijkers en creators",
        "Altijd herkenbaar als HEMA"
      ],

      image: ""
    },

    {
      title:
        "Doel van het handboek",

      text:
        "Het handboek dient als strategische leidraad en praktisch handvat voor iedereen die betrokken is bij het creëren, publiceren en optimaliseren van sociale media voor HEMA België.",

      image: ""
    },

    {
      title:
        "Werk altijd met de actuele versie",

      text:
        "Het handboek kan worden bijgewerkt. Controleer daarom altijd of je met de meest actuele versie werkt, zodat alle betrokken collega's vanuit dezelfde afspraken werken.",

      image: ""
    }
  ]
},


// =========================================================
// 1. ORGANISCHE SOCIALE MEDIA BINNEN HEMA
// =========================================================

{
  id: "organic-be-organische-social-media",
  category: "organic-social-belgie",

  title:
    "1. Organische sociale media binnen HEMA",

  summary:
    "Kanalen, postfrequentie, contentkalender, communicatie met agencies en locaties van assets.",

  system:
    "Instagram / TikTok / Facebook / Pinterest / YouTube",

  frequency:
    "Dagelijks",

  duration:
    "Naslag",

  featured: true,

  tags: [
    "instagram",
    "tiktok",
    "facebook",
    "pinterest",
    "youtube shorts",
    "contentkalender",
    "paloma",
    "social sky",
    "uncool"
  ],

  steps: [
    {
      title:
        "Actieve sociale mediakanalen",

      text:
        "HEMA België is voor Organic Social actief op verschillende sociale mediakanalen.",

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
        "Er wordt gestreefd naar minimaal dagelijks posten op de feed en minimaal zes stories per week op elk platform. Per kanaal kunnen nuances gelden. Facebook heeft momenteel bijvoorbeeld een hogere frequentie en Pinterest een lagere.",

      image: ""
    },

    {
      title:
        "1.2 Contentkalender",

      text:
        "De contentkalender is de centrale plek voor de dagelijkse planning van Organic Social. Hierin staat de planning voor elk sociaal mediakanaal. Zorg dat je deze gemakkelijk kunt terugvinden en controleer hem dagelijks.",

      image: ""
    },

    {
      title:
        "1.3 Communiceren met de bureaus",

      text:
        "De communicatie met Social Sky, Paloma en UnCool verloopt via verschillende kanalen.",

      infoCards: [
        {
          title:
            "E-mail",

          items: [
            "Voor belangrijke zaken",
            "Afstemming over werkzaamheden",
            "Overleg over verschillende taken"
          ]
        },

        {
          title:
            "Meetings",

          items: [
            "Nieuwe concepten bespreken",
            "Uitgewerkte concepten bespreken en goedkeuren",
            "Check-in over belangrijke zaken"
          ]
        },

        {
          title:
            "WhatsApp-groep",

          items: [
            "Snelle updates",
            "Korte vragen",
            "Informelere communicatie dan e-mail"
          ]
        }
      ],

      image: ""
    },

    {
      title:
        "1.4 Waar zijn assets te vinden?",

      text:
        "Assets worden afhankelijk van de agency op verschillende locaties aangeleverd.",

      bullets: [
        "Paloma: via de Paloma Notion-clientpagina",
        "Social Sky: via de Social Sky Content Hub in Notion",
        "UnCool: concepten en assets worden via Vimeo en e-mail verspreid",
        "Nederlandse reposts: I:\\Marketing & Communication\\PR + SOCIAL\\5. SOCIAL\\01 SOCIAL CONTENT\\01 CONTENT"
      ],

      image: ""
    }
  ]
},


// =========================================================
// 2. WORKFLOW & VERANTWOORDELIJKHEDEN
// =========================================================

{
  id: "organic-be-workflow",
  category: "organic-social-belgie",

  title:
    "2. Workflow & verantwoordelijkheden",

  summary:
    "Verdeling van kanalen, planning van content, agency-workflow en aanspreekpunten.",

  system:
    "Organic Social Media België",

  frequency:
    "Doorlopend",

  duration:
    "Naslag",

  featured: true,

  tags: [
    "workflow",
    "verantwoordelijkheden",
    "agencies",
    "contentkalender",
    "stories",
    "feed"
  ],

  steps: [
    {
      title:
        "2.1 Organic Social",

      text:
        "De contentkalender is de centrale basis voor Organic Social en wordt tweewekelijks besproken en continu bijgewerkt tijdens de Content Meetings.",

      bullets: [
        "Instagram & TikTok: hoofdverantwoordelijkheid bij Organic Social Marketeer België en deels de Stagiair Online Marketing België & Frankrijk",
        "Facebook NL-BE en FR-BE, Pinterest en YouTube Shorts: hoofdverantwoordelijkheid bij de Social Media Coördinator België"
      ],

      image: ""
    },

    {
      title:
        "2.1.1 Feed inplannen en creëren",

      text:
        "De agencies creëren een groot deel van de content. Het Belgische team plant de content vervolgens in.",

      infoCards: [
        {
          title:
            "TikTok",

          items: [
            "Video's via TikTok Studio",
            "Carrousels via de TikTok-app"
          ]
        },

        {
          title:
            "Instagram",

          items: [
            "Video's via de Instagram-app",
            "Carrousels via de Instagram-app"
          ]
        },

        {
          title:
            "Overige kanalen",

          items: [
            "Facebook via Meta Business Suite",
            "Pinterest via de Pinterest-app",
            "YouTube Shorts via de YouTube-app"
          ]
        }
      ],

      image: ""
    },

    {
      title:
        "2.1.1.2 Stories",

      text:
        "Stories worden voornamelijk door de Stagiair Online Marketing België & Frankrijk gemaakt, meestal in Canva. Er is wekelijks afstemming met de Stagiair Visual Creative om te bepalen welke stories tussen Nederland en België gecrosspost kunnen worden. Tijdens deze meeting worden ook cijfers en resultaten besproken en vergeleken.",

      image: ""
    },

    {
      title:
        "2.2 Workflow met agencies",

      text:
        "De samenwerking met agencies verloopt volgens een vaste workflow.",

      subsection: {
        title:
          "Agency workflow",

        steps: [
          "Agencies pitchen wekelijks of maandelijks concepten voor de daaropvolgende periode.",
          "Het team geeft feedback op de voorgestelde concepten.",
          "De agencies werken de concepten uit en leveren deze via Notion of Vimeo aan.",
          "Het Belgische socialmediateam geeft feedback of keurt het asset goed.",
          "Goedgekeurde assets worden door het Belgische team in de contentkalender ingepland.",
          "Na publicatie wordt het asset beoordeeld en wordt waar nodig feedback aan de agency gegeven."
        ]
      },

      image: ""
    },

    {
      title:
        "2.2.1 Verdeling en meetings",

      text:
        "De drie agencies functioneren als contentleveranciers en leveren ieder een afgesproken hoeveelheid content.",

      infoCards: [
        {
          title:
            "PALOMA",

          items: [
            "22 assets per maand",
            "Elke 2 weken nieuwe input",
            "Wekelijkse check-in over shoots, editing en concepten"
          ]
        },

        {
          title:
            "Social Sky",

          items: [
            "8 assets per maand",
            "Elke 2 weken nieuwe input",
            "Tweewekelijkse check-in"
          ]
        },

        {
          title:
            "UnCool",

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
        "De verantwoordelijkheden zijn verdeeld over verschillende rollen binnen HEMA.",

      infoCards: [
        {
          title:
            "Organic Social",

          items: [
            "Social Media Marketeer België & Frankrijk",
            "Social Media Coördinator België",
            "Stagiair Online Marketing België & Frankrijk"
          ]
        },

        {
          title:
            "Paid Social",

          items: [
            "Lead Paid Advertising",
            "Channel Marketeer TikTok",
            "Online Marketeer Meta"
          ]
        },

        {
          title:
            "Creatormarketing",

          items: [
            "Channel Marketeer"
          ]
        },

        {
          title:
            "Communitymanagement",

          items: [
            "Comments via de socialmedia-agency",
            "DM's via de Social Media Coördinator België"
          ]
        },

        {
          title:
            "Legal & contracten",

          items: [
            "Projectmanager Marketing België & Frankrijk"
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


// =========================================================
// 3. CONTENTRICHTLIJNEN
// =========================================================

{
  id: "organic-be-contentrichtlijnen",
  category: "organic-social-belgie",

  title:
    "3. Contentrichtlijnen",

  summary:
    "Vrindinnestrategie, visuele identiteit, technische richtlijnen, captions, hashtags en emoji's.",

  system:
    "Organic Social Media",

  frequency:
    "Bij iedere contentcreatie",

  duration:
    "Naslag",

  featured: true,

  tags: [
    "contentrichtlijnen",
    "caption",
    "hashtags",
    "emoji",
    "tone of voice",
    "vrindinnestrategie"
  ],

  caution:
    "Gebruik onder posts altijd rechtenvrije muziek en sounds.",

  steps: [
    {
      title:
        "Vrindinnestrategie",

      text:
        "Alle content moet aansluiten op de Vrindinnestrategie: toegankelijk, vrolijk, informeel, inspirerend en herkenbaar als HEMA België.",

      image: ""
    },

    {
      title:
        "3.1 Visuele identiteit",

      text:
        "Voor grafische posts en stories wordt dezelfde visuele HEMA-identiteit gebruikt als in Nederland. Gebruik BeeldBinkie als informatiebron voor beeldgebruik, kleuren en typografie.",

      image: ""
    },

    {
      title:
        "3.2 Algemene contentrichtlijnen",

      text:
        "Houd bij het maken van content rekening met de vaste technische en juridische uitgangspunten.",

      bullets: [
        "Gebruik altijd rechtenvrije sounds en muziek",
        "Reels: formaat 9:16",
        "Carrousels: formaat 4:5"
      ],

      image: ""
    },

    {
      title:
        "3.3 Caption",

      text:
        "Houd captions kort, krachtig en slim en houd altijd rekening met de tone of voice. Bij productposts voor Instagram en TikTok is zowel een Vlaamse als een Waalse caption nodig. Benoem een promotie kort wanneer die relevant is voor het afgebeelde product.",

      image: ""
    },

    {
      title:
        "3.3.1 Hashtags",

      text:
        "Hashtags worden voornamelijk gebruikt op TikTok en nauwelijks op Instagram en Facebook. #HEMA wordt standaard gebruikt op TikTok. Voeg overige hashtags alleen toe wanneer ze relevant zijn voor de content en vindbaarheid.",

      image: ""
    },

    {
      title:
        "3.3.2 Emoji's",

      text:
        "Gebruik emoji's alleen wanneer ze daadwerkelijk waarde toevoegen. Informatieve of serieuze content kan sterker zijn zonder emoji's. Bij luchtige content, productposts en humoristische sketches kunnen emoji's juist extra sfeer en herkenbaarheid toevoegen.",

      image: ""
    }
  ]
},


// =========================================================
// 4. CONTENTFORMATS
// =========================================================

{
  id: "organic-be-contentformats",
  category: "organic-social-belgie",

  title:
    "4. Contentformats",

  summary:
    "Richtlijnen voor feedcontent, stories, gamificatie en Instagram Highlights.",

  system:
    "Organic Social Media",

  frequency:
    "Doorlopend",

  duration:
    "Naslag",

  featured: false,

  tags: [
    "feed",
    "stories",
    "contentmix",
    "gamificatie",
    "highlights"
  ],

  steps: [
    {
      title:
        "4.1 Feed",

      text:
        "Er wordt minimaal één keer per dag op de feed gepost. Zorg voor een gevarieerde contentmix met zowel carrousels als reels.",

      bullets: [
        "Sketches",
        "Promoties",
        "Productposts",
        "Winkelopeningen",
        "Content gericht op views",
        "Content gericht op engagement",
        "Content die een glimlach oproept"
      ],

      image: ""
    },

    {
      title:
        "4.2 Stories",

      text:
        "Stories zijn een dagelijks touchpoint voor interactie en worden relatief vaak ingezet voor commerciële communicatie zoals promoties en productposts. Combineer dit met gamificatie zodat stories niet uitsluitend uit koopboodschappen bestaan.",

      infoCards: [
        {
          title:
            "Gamificatie ideeën",

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
        "Resultaten van stories",

      text:
        "Houd de views van Instagram en Facebook wekelijks bij via Meta. Andere statistieken, waaronder average completion rate, kunnen via Iconosquare worden bekeken.",

      image: ""
    },

    {
      title:
        "Instagram Highlights",

      text:
        "Blijf de Instagram Highlights actualiseren. Nieuwe promotionele stories gaan bijvoorbeeld in de highlight 'promoties' en vervangen daar de oude promotie. Wallpapers, fanposts, spelletjes en vergelijkbare stories kunnen worden toegevoegd zonder standaard oude content te verwijderen.",

      image: ""
    }
  ]
},


// =========================================================
// 5. DATA, ANALYSE & OPTIMALISATIE
// =========================================================

{
  id: "organic-be-data-analyse",
  category: "organic-social-belgie",

  title:
    "5. Data, Analyse & Optimalisatie",

  summary:
    "KPI's, kanaaldoelstellingen en wekelijkse rapportage voor HEMA België.",

  system:
    "Meta / Iconosquare",

  frequency:
    "Wekelijks",

  duration:
    "Naslag",

  featured: false,

  tags: [
    "data",
    "analyse",
    "kpi",
    "iconosquare",
    "meta",
    "views",
    "followers"
  ],

  steps: [
    {
      title:
        "5.1 Analyse metrics",

      text:
        "Views zijn de belangrijkste KPI voor Organic Social België. Positieve engagement rate blijft relevant, maar follower growth is daarnaast een belangrijke indicatie of de content aanslaat.",

      image: ""
    },

    {
      title:
        "Instagram doelstellingen 2026",

      text:
        "Doelstellingen voor HEMA België Instagram.",

      infoCards: [
        {
          title:
            "Instagram",

          items: [
            "Frequentie: minimaal 7x per week",
            "Volgers: 110.000",
            "Views: 17,5 miljoen"
          ]
        }
      ],

      image: ""
    },

    {
      title:
        "TikTok doelstellingen 2026",

      text:
        "Doelstellingen voor HEMA België TikTok.",

      infoCards: [
        {
          title:
            "TikTok",

          items: [
            "Frequentie: minimaal 7x per week",
            "Volgers: 40.000",
            "Views: 30 miljoen"
          ]
        }
      ],

      image: ""
    },

    {
      title:
        "Facebook doelstellingen 2026",

      text:
        "Doelstellingen voor HEMA België Facebook.",

      infoCards: [
        {
          title:
            "Facebook",

          items: [
            "Frequentie: minimaal 5x per week",
            "Volgers: 160.000",
            "Views: 37,5 miljoen"
          ]
        }
      ],

      image: ""
    },

    {
      title:
        "5.2 Reporting structuur",

      text:
        "De prestaties worden wekelijks verzameld via Meta Statistieken en Iconosquare. De resultaten worden vervolgens bijgehouden in het moederbestand waarin ook de contentkalender staat.",

      image: ""
    }
  ]
},


// =========================================================
// 6. COMMUNITYMANAGEMENT
// =========================================================

{
  id: "organic-be-communitymanagement",
  category: "organic-social-belgie",

  title:
    "6. Communitymanagement",

  summary:
    "Tone of voice en werkwijze voor vragen, klachten en negatieve reacties.",

  system:
    "Social Media",

  frequency:
    "Dagelijks",

  duration:
    "Naslag",

  featured: false,

  tags: [
    "communitymanagement",
    "comments",
    "dm",
    "negatieve reacties",
    "klachten"
  ],

  steps: [
    {
      title:
        "6.1 Tone of voice in reacties",

      text:
        "Houd in reacties altijd de tone of voice van HEMA aan. Communitymanagement helpt bij relatiemanagement en vergroot tegelijkertijd de zichtbaarheid van het merk.",

      image: ""
    },

    {
      title:
        "6.2 Omgaan met negatieve reacties",

      text:
        "Niet iedere negatieve reactie of klacht hoeft een reactie te krijgen. Bepaal per situatie wat passend is.",

      infoCards: [
        {
          title:
            "Ernstige klacht",

          items: [
            "Stuur de klacht door naar klantenservice zodat deze kan worden opgelost"
          ]
        },

        {
          title:
            "Gezonde discussie",

          items: [
            "Laat de discussie lopen zolang deze normaal en respectvol blijft"
          ]
        },

        {
          title:
            "Intimidatie of schelden",

          items: [
            "Verwijder de comment",
            "Blokkeer het account",
            "Rapporteer het account"
          ]
        },

        {
          title:
            "Veel dezelfde vragen",

          items: [
            "Plaats een openbare nette reactie zodat meerdere gebruikers direct antwoord krijgen"
          ]
        }
      ],

      image: ""
    }
  ]
},


// =========================================================
// 7. (UGC-) CREATORS
// =========================================================

{
  id: "organic-be-ugc-creators",
  category: "organic-social-belgie",

  title:
    "7. (UGC-) creators",

  summary:
    "Rol, selectie, briefing, workflow, legal en resultaten van samenwerkingen met creators.",

  system:
    "Creator Marketing",

  frequency:
    "Wanneer nodig",

  duration:
    "Naslag",

  featured: true,

  tags: [
    "ugc",
    "creators",
    "creator marketing",
    "briefing",
    "spark ads",
    "partnership ads",
    "legal"
  ],

  steps: [
    {
      title:
        "7.1 Rol van creators",

      text:
        "(UGC-)creators worden voornamelijk ingezet als verlengstuk van paid advertising. Zij maken video-first content voor formats zoals Reels, TikToks en Shorts. Publicatie via de eigen kanalen van creators maakt versterking via bijvoorbeeld Spark Ads en Partnership Ads mogelijk.",

      image: ""
    },

    {
      title:
        "7.2 Selectiecriteria",

      text:
        "Let bij het selecteren van creators op meerdere aspecten.",

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
        "Creators krijgen creatieve vrijheid, maar er zijn vaste punten die in de content terug moeten komen.",

      bullets: [
        "Content moet natuurlijk aanvoelen en niet als advertentie",
        "Benodigde producten moeten zichtbaar zijn",
        "De video mag niet te lang duren",
        "Merkherkenning moet snel zichtbaar zijn"
      ],

      image: ""
    },

    {
      title:
        "7.4 Workflow met creators",

      text:
        "Gebruik een vaste workflow van selectie tot rapportage.",

      subsection: {
        title:
          "Creator workflow",

        steps: [
          "Opdracht/dropping → selectie creators via formulier of portal",
          "Briefing → via e-mail",
          "Sample verzending → tracking delen",
          "Previews → maximaal 1–2 revisies en feedback binnen 48 uur",
          "Go-live → post + correcte disclosure",
          "Asset-download & archief → bestandsnamen en metadata",
          "Repurposing → paid, e-mail, site of retail waar toegestaan",
          "Rapportage → KPI's, learnings en tagging in DAM"
        ],

        note:
          "SLA's: briefing accepteren binnen 48 uur, feedback op preview binnen 48 uur en publicatie na go/no-go binnen 24 uur."
      },

      image: ""
    },

    {
      title:
        "7.5 Wetgeving & legal",

      text:
        "Controleer altijd de juridische vereisten voor samenwerkingen met creators.",

      bullets: [
        "Geen ongefundeerde claims",
        "Vermijd gevoelige hoofdboodschappen rond politieke voorkeuren, religie en duurzaamheid",
        "Gebruik correcte disclosure zoals #ad of 'betaalde samenwerking'",
        "Controleer muziek en licenties"
      ],

      image: ""
    },

    {
      title:
        "7.6 Data noteren en verwerken",

      text:
        "Gebruik de vaste documenten om campagnes en resultaten te registreren.",

      bullets: [
        "Moederbestand: campagnes en resultaten bijhouden",
        "Linkbuilding-document: trackinglinks aanmaken wanneer video's worden geboost"
      ],

      image: ""
    }
  ]
},


// =========================================================
// LOKALE SOCIALE MEDIAKANALEN
// =========================================================

{
  id: "organic-be-lokale-kanalen",
  category: "organic-social-belgie",

  title:
    "Lokale sociale mediakanalen",

  summary:
    "Richtlijnen voor socialmediakanalen van lokale HEMA-winkels.",

  system:
    "Lokale Social Media",

  frequency:
    "Wanneer nodig",

  duration:
    "Naslag",

  featured: false,

  tags: [
    "lokale winkels",
    "employee generated content",
    "release datum"
  ],

  steps: [
    {
      title:
        "Lokale winkels volgen",

      text:
        "Houd in de gaten wat lokale winkels via hun eigen socialmediakanalen plaatsen. Employee Generated Content is welkom en lokale winkels mogen vooral experimenteren met content die volgens hen goed werkt.",

      image: ""
    },

    {
      title:
        "Let op nieuwe collecties",

      text:
        "Soms worden nieuwe collecties vóór de officiële releasedatum gedeeld. Neem in dat geval direct contact op met de winkel, vraag of de content offline kan worden gehaald en herinner hen aan de officiële releasedatum.",

      image: ""
    }
  ]
},


// =========================================================
// 8. BIJLAGEN
// =========================================================

{
  id: "organic-be-bijlagen",
  category: "organic-social-belgie",

  title:
    "8. Bijlagen",

  summary:
    "Storytemplates, creatorcommunicatie en aanvullende tools voor Organic Social België.",

  system:
    "Canva / TradeTracker",

  frequency:
    "Naslag",

  duration:
    "Naslag",

  featured: false,

  tags: [
    "bijlagen",
    "canva",
    "storytemplates",
    "tradetracker",
    "creator",
    "nl-be",
    "fr-be"
  ],

  subsections: [
    {
      title:
        "8.1 Organic Social",

      text:
        "Aanvullende bestanden en templates voor feeds en stories.",

      steps: [
        {
          title:
            "8.1.1 Feed & data",

          text:
            "Resultaten van feedposts en stories worden bijgehouden in het moederbestand. Voor stories wordt aanvullend het story-bestand gebruikt. Houd Instagram- en Facebookviews via Meta wekelijks bij en gebruik Iconosquare voor aanvullende cijfers zoals average completion rate.",

          image: ""
        },

        {
          title:
            "8.1.2 Storytemplates",

          text:
            "Maak voor elke template eerst een kopie naar je eigen Canva-account via 'Bestand → Maak een kopie'.",

          bullets: [
            "Raad het product",
            "Raad het product – Stapelgek editie",
            "Zoek de verschillen",
            "Dit of Dat",
            "Dit of Dat – Stapelgek editie",
            "Fanstories",
            "Zoekspel",
            "Woordrebussen & feestdagen",
            "Geheugenspel"
          ],

          image: ""
        }
      ]
    },

    {
      title:
        "8.2 (UGC-) creators NL-BE",

      text:
        "Voorbeeldcommunicatie en werkwijze voor Nederlandstalige Belgische creators.",

      steps: [
        {
          title:
            "Aanmelding nieuwe creator NL-BE",

          text:
            "Nieuwe creators maken eerst een TradeTracker-account aan via het HEMA België affiliateprogramma. Na goedkeuring ontvangen ze een Affiliate-ID. Dit ID is verplicht voor registratie en verwerking van vergoedingen.",

          bullets: [
            "Affiliateprogramma: https://www.hema.com/nl-be/affiliate",
            "Wacht tot het TradeTracker-account is goedgekeurd",
            "Ontvang het Affiliate-ID",
            "Vul vervolgens het HEMA Creator-aanmeldformulier in",
            "Voor opdrachten zijn geen affiliate links nodig",
            "De vergoeding wordt als fixed fee geregistreerd"
          ],

          image: ""
        },

        {
          title:
            "Vergoedingsproces NL-BE",

          text:
            "Vergoedingen voor creators lopen via TradeTracker. Na goedkeuring van de content wordt de vergoeding als fixed fee geregistreerd.",

          bullets: [
            "De creator hoeft geen factuur te sturen",
            "Betaaltermijn is ongeveer 90 dagen",
            "Controleer of betaalgegevens volledig zijn",
            "Controleer de betaalinstellingen in TradeTracker",
            "Voeg het BTW-nummer toe indien van toepassing"
          ],

          image: ""
        }
      ]
    },

    {
      title:
        "8.3 (UGC-) creators FR-BE",

      text:
        "Franstalige variant van het creatorproces voor België.",

      steps: [
        {
          title:
            "Aanmelding nieuwe creator FR-BE",

          text:
            "Franstalige creators maken eerst een TradeTracker-account aan via het Franstalige HEMA België affiliateprogramma en ontvangen na goedkeuring een Affiliate ID.",

          bullets: [
            "Affiliateprogramma: https://www.hema.com/fr-be/affiliation",
            "Wacht tot het TradeTracker-account is goedgekeurd",
            "Affiliate ID is verplicht",
            "Vul vervolgens het creator-aanmeldformulier in",
            "Geen affiliate links nodig voor de opdracht",
            "De vergoeding wordt als fixed fee geregistreerd"
          ],

          image: ""
        },

        {
          title:
            "Vergoedingsproces FR-BE",

          text:
            "Betalingen verlopen via TradeTracker. De creator hoeft geen factuur te sturen. Na goedkeuring van de content wordt de vergoeding als vast bedrag geregistreerd.",

          bullets: [
            "Betaaltermijn is ongeveer 90 dagen",
            "Bankgegevens volledig invullen",
            "Betaalinstellingen controleren",
            "BTW-nummer toevoegen indien van toepassing"
          ],

          image: ""
        }
      ]
    },

    {
      title:
        "8.4 Overig",

      text:
        "Aanvullende systemen die relevant zijn voor het team.",

      cards: [
        {
          title:
            "Keeper",

          lines: [
            "Keeper is de veilige wachtwoordkluis voor het opslaan van wachtwoorden.",
            "Zorg dat je hiervoor een account hebt."
          ]
        },

        {
          title:
            "Yext",

          lines: [
            "Yext wordt gebruikt voor het beheren van bedrijfs- en locatiegegevens online.",
            "Het helpt gegevens zoals openingstijden, adressen en contactinformatie consistent en actueel te houden op verschillende platforms en zoekmachines."
          ]
        }
      ]
    }
  ]
}
  ]
};
