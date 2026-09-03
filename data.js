window.HANDBOOK_DATA = {
  meta: {
    lastUpdated: "1 september 2026",
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

    {
      id: "gdl-order",
      category: "orders",
      title: "Order invoeren Goede Doelen Loterijen (GDL)",
      summary: "Stappenplan voor het invoeren van een GDL-order.",
      system: "Orderadministratie",
      frequency: "Regelmatig",
      duration: "± 10 min",
      featured: true,

      tags: [
        "gdl",
        "goede doelen loterijen",
        "order"
      ],

      steps: [
        {
          title: "Open de juiste omgeving",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        },
        {
          title: "Voer de ordergegevens in",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        }
      ]
    },

    {
      id: "trade-order",
      category: "orders",
      title: "Nieuwe interne order invoeren in Trade",
      summary: "Stappenplan voor het invoeren van een interne order in Trade.",
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
          title: "Open Trade",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        },
        {
          title: "Maak een nieuwe order aan",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        }
      ]
    },

    {
      id: "bank-betalingen",
      category: "betalingen",
      title: "Bank betalingen",
      summary: "Stappenplan voor het controleren en verwerken van bankbetalingen.",
      system: "Bank / orderadministratie",
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
          title: "Open het betaaloverzicht",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        },
        {
          title: "Controleer de betaling",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        }
      ]
    },

    {
      id: "hema-tickets",
      category: "klantenservice",
      title: "Mailbox Klantenservice HEMA Tickets",
      summary: "Werkwijze voor de mailbox Klantenservice HEMA Tickets.",
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
          title: "Open de mailbox",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        },
        {
          title: "Controleer het ticket",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        }
      ]
    },

    {
      id: "snowworld",
      category: "klantenservice",
      title: "Handleiding herroeping Snowworld",
      summary: "Stappenplan voor het verwerken van een Snowworld-herroeping.",
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
          title: "Open de aanvraag",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        },
        {
          title: "Verwerk de herroeping",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        }
      ]
    },

    {
      id: "broadsign",
      category: "uitingen",
      title: "Broadsign (DOOH puischermen)",
      summary: "Stappenplan voor het inregelen van content op DOOH-pu schermen.",
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
          title: "Open Broadsign",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        },
        {
          title: "Selecteer de juiste schermen",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        }
      ]
    },

    {
      id: "rcos",
      category: "uitingen",
      title: "Rcos (DOOH kassaschermen)",
      summary: "Stappenplan voor het inregelen van content op kassaschermen.",
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
          title: "Open Rcos",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        },
        {
          title: "Selecteer de juiste kassaschermen",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        }
      ]
    },

    {
      id: "google-admanager",
      category: "advertising",
      title: "Google Ad Manager",
      summary: "Stappenplan voor het opzetten van campagnes in Google Ad Manager.",
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
          title: "Open Google Ad Manager",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        },
        {
          title: "Maak de campagne aan",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        }
      ]
    },

    {
      id: "online-banners",
      category: "banners",
      title: "Stappenplan Online Banners",
      summary: "Stappenplan voor het maken en verwerken van online banners.",
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
          title: "Open het juiste template",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        },
        {
          title: "Maak de banner",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        }
      ]
    }
  ]
};
