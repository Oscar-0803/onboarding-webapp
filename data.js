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
      title: "HEM giftcards",
      summary: "Dagelijkse verwerking van de HEM giftcards inbox.",
      system: "HEM giftcards",
      frequency: "Dagelijks",
      duration: "± 5 min",
      featured: true,

      tags: [
        "giftcards",
        "inbox",
        "dagelijks"
      ],

      steps: [
        {
          title: "Open de HEM giftcards inbox",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        },
        {
          title: "Controleer de aanvraag",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        }
      ]
    },

    {
      id: "hema-zakelijk",
      category: "dagelijks",
      title: "HEMA Zakelijk",
      summary: "Dagelijkse verwerking van HEMA Zakelijk.",
      system: "HEMA Zakelijk",
      frequency: "Dagelijks",
      duration: "± 10 min",
      featured: true,

      tags: [
        "hema zakelijk",
        "zakelijk",
        "inbox"
      ],

      steps: [
        {
          title: "Open HEMA Zakelijk",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
        },
        {
          title: "Controleer de aanvraag",
          text: "Voeg hier de officiële uitleg uit het Word-document toe.",
          screenshot: true
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
