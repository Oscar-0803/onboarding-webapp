window.HANDBOOK_DATA = {
  meta: {
    lastUpdated: "31 augustus 2026",
    sourceStatus:
      "Conceptversie op basis van de huidige onboarding-informatie."
  },

  categories: [
    {
      id: "cadeaukaarten",
      label: "Cadeaukaarten",
      icon: "▣",
      description: "Orders, blokkeren en CMS-handelingen"
    },
    {
      id: "trade",
      label: "Trade & Orders",
      icon: "⇄",
      description: "Zakelijke orders, Trade en GDL"
    },
    {
      id: "betalingen",
      label: "Betalingen",
      icon: "€",
      description: "Bankbetalingen en controles"
    },
    {
      id: "klantenservice",
      label: "Klantenservice",
      icon: "✉",
      description: "Tickets en mailboxprocessen"
    },
    {
      id: "schermen",
      label: "Winkelschermen",
      icon: "▤",
      description: "Broadsign, Rcos en DOOH-content"
    },
    {
      id: "advertising",
      label: "Advertising",
      icon: "◎",
      description: "Google Ad Manager campagnes"
    },
    {
      id: "banners",
      label: "Banners",
      icon: "◇",
      description: "Adobe Express en bannerproductie"
    }
  ],

  procedures: [
    {
      id: "cadeaukaart-blokkeren",
      category: "cadeaukaarten",

      title: "Zoekgeraakte cadeaukaart blokkeren",

      summary:
        "Snelpad voor het veilig afhandelen van een gemelde zoekgeraakte cadeaukaart.",

      system: "Cadeaukaart-CMS",
      frequency: "Regelmatig",
      duration: "± 3 min",

      featured: true,

      tags: [
        "cadeaukaart",
        "blokkeren",
        "klant",
        "cms"
      ],

      caution:
        "Controleer altijd eerst of je de juiste kaart en klantcase voor je hebt. Neem geen wachtwoorden op in deze app.",

      steps: [
        {
          title: "Open de juiste klantcase",
          text:
            "Controleer de melding en verzamel de gegevens die nodig zijn om de cadeaukaart terug te vinden.",
          screenshot: false
        },
        {
          title: "Open het cadeaukaart-CMS",
          text:
            "Open het interne systeem via de daarvoor bestemde route.",
          screenshot: true
        },
        {
          title: "Zoek de cadeaukaart op",
          text:
            "Gebruik de relevante kaartgegevens om de juiste cadeaukaart te vinden.",
          screenshot: true
        },
        {
          title: "Blokkeer de cadeaukaart",
          text:
            "Voer de blokkade uit en controleer daarna of de nieuwe status correct is opgeslagen.",
          screenshot: true
        },
        {
          title: "Werk de klantcase bij",
          text:
            "Noteer de uitgevoerde actie in de klantcase en rond de case volgens de interne werkwijze af.",
          screenshot: false
        }
      ]
    },

    {
      id: "zakelijke-order-annuleren",
      category: "trade",

      title: "Zakelijke order annuleren",

      summary:
        "Stappenplan voor het controleren en annuleren van een zakelijke order.",

      system: "Trade / HEMA Zakelijk",
      frequency: "Regelmatig",
      duration: "± 5 min",

      featured: true,

      tags: [
        "trade",
        "zakelijk",
        "order",
        "annuleren",
        "b2b"
      ],

      caution:
        "Annuleer pas nadat ordernummer, klant en huidige status overeenkomen met de aanvraag.",

      steps: [
        {
          title: "Controleer de annuleringsaanvraag",
          text:
            "Controleer het ordernummer, de klant en de reden van annulering.",
          screenshot: false
        },
        {
          title: "Open Trade",
          text:
            "Open het interne Trade-systeem.",
          screenshot: true
        },
        {
          title: "Zoek de order op",
          text:
            "Zoek de zakelijke order op met het ordernummer en controleer of je de juiste order hebt.",
          screenshot: true
        },
        {
          title: "Controleer de orderstatus",
          text:
            "Controleer of de order volgens de geldende procedure nog geannuleerd kan worden.",
          screenshot: false
        },
        {
          title: "Annuleer de order",
          text:
            "Voer de annulering uit en controleer daarna of de status correct is aangepast.",
          screenshot: true
        }
      ]
    },

    {
      id: "bankbetaling-verwerken",
      category: "betalingen",

      title: "Bankbetaling verwerken",

      summary:
        "Controleer een betaling en leg de verwerking op de juiste manier vast.",

      system: "Bank / orderadministratie",
      frequency: "Dagelijks",
      duration: "± 4 min",

      featured: true,

      tags: [
        "bank",
        "betaling",
        "order",
        "controle"
      ],

      caution:
        "Controleer financiële gegevens zorgvuldig voordat je een status aanpast.",

      steps: [
        {
          title: "Open het betaaloverzicht",
          text:
            "Open de daarvoor bestemde interne omgeving.",
          screenshot: true
        },
        {
          title: "Zoek de betaling",
          text:
            "Zoek de betaling op met de relevante betalingsgegevens.",
          screenshot: false
        },
        {
          title: "Match de betaling met de order",
          text:
            "Controleer bedrag, referentie en ordergegevens.",
          screenshot: false
        },
        {
          title: "Verwerk de betaling",
          text:
            "Pas de juiste order- of betaalstatus aan.",
          screenshot: true
        },
        {
          title: "Doe een eindcontrole",
          text:
            "Controleer of de betaling en orderstatus correct zijn verwerkt.",
          screenshot: false
        }
      ]
    },

    {
      id: "klantenservice-ticket-afhandelen",
      category: "klantenservice",

      title: "Klantenservice-ticket afhandelen",

      summary:
        "Van nieuw ticket naar duidelijke opvolging en correcte afsluiting.",

      system: "Klantenservice Tickets",
      frequency: "Dagelijks",
      duration: "± 5–10 min",

      featured: true,

      tags: [
        "ticket",
        "mailbox",
        "klantenservice",
        "klant"
      ],

      steps: [
        {
          title: "Open het ticket",
          text:
            "Lees de volledige klantvraag voordat je een actie uitvoert.",
          screenshot: true
        },
        {
          title: "Controleer de historie",
          text:
            "Bekijk eerdere communicatie en relevante gegevens.",
          screenshot: false
        },
        {
          title: "Bepaal de juiste procedure",
          text:
            "Bepaal welke interne werkinstructie nodig is om het probleem op te lossen.",
          screenshot: false
        },
        {
          title: "Voer de actie uit",
          text:
            "Volg de bijbehorende interne procedure.",
          screenshot: false
        },
        {
          title: "Reageer op de klant",
          text:
            "Geef een duidelijke reactie en leg de uitgevoerde actie intern vast.",
          screenshot: false
        }
      ]
    },

    {
      id: "broadsign-content-plannen",
      category: "schermen",

      title: "Content in Broadsign plannen",

      summary:
        "Stappenplan voor het klaarzetten en controleren van winkel- of DOOH-content.",

      system: "Broadsign",
      frequency: "Wekelijks",
      duration: "± 10 min",

      featured: false,

      tags: [
        "broadsign",
        "dooh",
        "schermen",
        "content"
      ],

      caution:
        "Controleer altijd locatie, periode en creatief materiaal voordat je content publiceert.",

      steps: [
        {
          title: "Controleer het materiaal",
          text:
            "Controleer formaat, versie, periode en bestemming.",
          screenshot: false
        },
        {
          title: "Open Broadsign",
          text:
            "Open Broadsign via de interne omgeving.",
          screenshot: true
        },
        {
          title: "Selecteer de juiste plaatsing",
          text:
            "Controleer welke schermen of locaties gebruikt moeten worden.",
          screenshot: true
        },
        {
          title: "Plan de content",
          text:
            "Voer de juiste start- en einddatum in.",
          screenshot: true
        },
        {
          title: "Controleer de preview",
          text:
            "Bekijk de preview voordat je de content definitief publiceert.",
          screenshot: false
        }
      ]
    },

    {
      id: "gam-campagne-opzetten",
      category: "advertising",

      title: "Google Ad Manager campagne opzetten",

      summary:
        "Van briefing naar gecontroleerde campagne-inrichting in Google Ad Manager.",

      system: "Google Ad Manager",
      frequency: "Wekelijks",
      duration: "± 15 min",

      featured: true,

      tags: [
        "google ad manager",
        "gam",
        "advertising",
        "campagne"
      ],

      caution:
        "Controleer budget, looptijd, targeting en creatives altijd tegen de goedgekeurde briefing.",

      steps: [
        {
          title: "Controleer de briefing",
          text:
            "Controleer campagneperiode, doelgroep, plaatsing en materiaal.",
          screenshot: false
        },
        {
          title: "Open Google Ad Manager",
          text:
            "Open Google Ad Manager en ga naar de juiste advertiser of order.",
          screenshot: true
        },
        {
          title: "Maak de order aan",
          text:
            "Gebruik de juiste naamgeving en campagnegegevens.",
          screenshot: true
        },
        {
          title: "Maak een line item",
          text:
            "Vul looptijd, targeting en overige instellingen in.",
          screenshot: true
        },
        {
          title: "Voeg creatives toe",
          text:
            "Upload of koppel het juiste advertentiemateriaal.",
          screenshot: true
        },
        {
          title: "Voer een finale controle uit",
          text:
            "Controleer alle instellingen voordat de campagne actief wordt.",
          screenshot: false
        }
      ]
    },

    {
      id: "adobe-express-banner",
      category: "banners",

      title: "Banner maken in Adobe Express",

      summary:
        "Consistente werkwijze voor het produceren en controleren van banners.",

      system: "Adobe Express",
      frequency: "Wekelijks",
      duration: "± 10–20 min",

      featured: false,

      tags: [
        "adobe express",
        "banner",
        "design",
        "creative"
      ],

      steps: [
        {
          title: "Open het juiste template",
          text:
            "Gebruik het actuele en goedgekeurde template.",
          screenshot: true
        },
        {
          title: "Plaats tekst en beeld",
          text:
            "Vul het template met de juiste tekst en afbeeldingen.",
          screenshot: true
        },
        {
          title: "Controleer de opmaak",
          text:
            "Controleer leesbaarheid, uitsnede en positionering.",
          screenshot: false
        },
        {
          title: "Controleer alle formaten",
          text:
            "Controleer of alle benodigde bannerformaten correct zijn.",
          screenshot: false
        },
        {
          title: "Exporteer de banner",
          text:
            "Gebruik de afgesproken exportinstellingen en bestandsnaam.",
          screenshot: true
        }
      ]
    },

    {
      id: "gdl-order-controleren",
      category: "trade",

      title: "GDL-order controleren",

      summary:
        "Controleflow voor Goede Doelen Loterijen-orders.",

      system: "Orderadministratie",
      frequency: "Regelmatig",
      duration: "± 5 min",

      featured: false,

      tags: [
        "gdl",
        "goede doelen loterijen",
        "order",
        "trade"
      ],

      steps: [
        {
          title: "Open de order",
          text:
            "Zoek de juiste GDL-order op.",
          screenshot: true
        },
        {
          title: "Controleer de ordergegevens",
          text:
            "Controleer de belangrijkste gegevens van de order.",
          screenshot: false
        },
        {
          title: "Controleer op afwijkingen",
          text:
            "Vergelijk de order met de informatie uit de aanvraag.",
          screenshot: false
        },
        {
          title: "Verwerk eventuele afwijkingen",
          text:
            "Volg de interne escalatieroute wanneer gegevens niet overeenkomen.",
          screenshot: false
        },
        {
          title: "Rond de controle af",
          text:
            "Markeer de order pas als gecontroleerd wanneer alle controles zijn uitgevoerd.",
          screenshot: false
        }
      ]
    }
  ]
};
