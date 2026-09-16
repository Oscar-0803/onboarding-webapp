window.HANDBOOK_DATA = {
  meta: {
    lastUpdated: "15 september 2026",
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
  id: "organic-social",

  label:
    "Organic Social Media",

  icon:
    "●",

  description:
    "Strategisch en praktisch handboek voor het Organic Social Media team",

  introduction: [
    "Hey (nieuwe) collega! Dit sociale media handboek is ontwikkeld om richting en structuur te geven aan het gebruik van de sociale media voor HEMA België. Het handboek moet handvaten bieden op het gebied van strategische uitgangspunten, creatieve richtlijnen en praktische werkwijzen, vooral voor organische socials, maar ook een klein deel paid socials, zoals UCG-marketing.",

    "Met bijna 100.000 volgers op Instagram, 35.000 op TikTok en een gecombineerde 140.000 volgers op zowel de Vlaamse als de Waalse Facebook is sociale media een belangrijk mediakanaal voor HEMA België. Met de overname die plaatsvond in maart 2026, waarbij het hoofdkantoor in Amsterdam de sociale media overnam van HEMA België, is het belangrijk om ervoor te zorgen dat alle betrokkenen, zowel intern als extern, consistent, strategisch en herkenbaar communiceren namens HEMA. Voor nu noemen we dit de Vrindinnestrategie. De strategie is hoe HEMA België zich presenteert op sociale media als die toegankelijke Belgische vriendin die altijd probeert een glimlach op het gezicht van anderen te toveren. Het is belangrijk om daarbij te benadrukken dat de Vrindinnestrategie op verschillende niveaus terugkomt. Of ze nou op de sociale mediakanalen is van HEMA België waar zij kijkers laat lachen met haar humoristische content en inspireert met de leuke HEMA-producten, of met de (ugc-)creators waar zij op een informele en vrolijke manier mee communiceert: de Vrindinne zal altijd proberen om een glimlach op jouw gezicht te toveren. De Vrindinnestrategie is daarmee de overkoepelende strategie voor hoe de sociale media fungeert binnen HEMA België.",

    "Dit handboek is daarom ook te gebruiken als strategisch leidraad en praktisch handvat voor iedereen die betrokken is bij het creëren, publiceren en optimaliseren van de sociale media voor HEMA België.",

    "Daarnaast kan dit handboek ter alle tijden worden geüpdatet, dus zorg ervoor dat je de meest up-to-date versie hebt om zo op één lijn te zitten met jouw collega’s."
  ]
}

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

      title: "Orders handmatig invoeren",

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
            "Ga naar Adobe Express.",
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
    // ORGANIC SOCIAL MEDIA
    // =====================================================

    // =====================================================
    // 1. ORGANISCHE SOCIALE MEDIA
    // =====================================================

    {
      id:
        "organic-organische-social-media",

      category:
        "organic-social",

      title:
        "1. Organische sociale media binnen HEMA",

      summary:
        "Kanalen, postfrequentie, contentkalender, bureaucommunicatie en assets.",

      system:
        "Social Media",

      frequency: "Dagelijks",
      duration: "Naslag",

      featured: true,

      steps: [
        {
          title:
            "Socialmediakanalen",

          text:
            "Binnen Organic Social wordt gebruikgemaakt van verschillende sociale mediaplatformen. De exacte inzet en frequentie kunnen per land en kanaal verschillen.",

          bullets: [
            "Instagram",
            "TikTok",
            "Facebook",
            "Pinterest",
            "YouTube Shorts"
          ],

          image: ""
        },

        {
          title:
            "Specifiek voor België",

          text:
            "In het Belgische Social Media Handboek staat dat HEMA België voor Organic Social actief is op Instagram, TikTok, Facebook Vlaams, Facebook Waals, Pinterest en YouTube Shorts.",

          image: ""
        },

        {
          title:
            "1.1 Postfrequentie",

          text:
            "Werk volgens de actuele contentplanning en afgesproken frequentie per kanaal. Kijk hiervoor altijd in de contentkalender.",

          image: ""
        },

        {
          title:
            "Postfrequentie België",

          text:
            "Voor België wordt in het huidige handboek gestreefd naar minimaal dagelijks posten op de feed en minimaal zes stories per week. Facebook heeft momenteel een hogere frequentie en Pinterest een lagere frequentie.",

          image: ""
        },

        {
          title:
            "1.2 Contentkalender",

          text:
            "De contentkalender is de centrale plek voor de dagelijkse planning van Organic Social. Hierin staat welke content wanneer en via welk kanaal wordt gepubliceerd.",

          image: ""
        },

        {
          title:
            "1.3 Communiceren met bureaus",

          text:
            "Voor externe bureaus en contentpartners worden verschillende communicatiekanalen gebruikt.",

          infoCards: [
            {
              title:
                "E-mail",

              items: [
                "Belangrijke zaken",
                "Afstemming",
                "Feedback en overleg"
              ]
            },

            {
              title:
                "Meetings",

              items: [
                "Nieuwe concepten",
                "Uitgewerkte content",
                "Goedkeuringen",
                "Planning en check-ins"
              ]
            },

            {
              title:
                "WhatsApp / chat",

              items: [
                "Snelle updates",
                "Korte vragen",
                "Informele afstemming"
              ]
            }
          ],

          image: ""
        },

        {
          title:
            "Bureaus België",

          text:
            "Voor België noemt het huidige handboek specifiek Social Sky, Paloma en UnCool als agencies waarmee wordt samengewerkt.",

          image: ""
        },

        {
          title:
            "1.4 Waar zijn assets te vinden?",

          text:
            "Assets kunnen afhankelijk van bureau, campagne en land op verschillende locaties worden aangeleverd.",

          bullets: [
            "Notion",
            "Vimeo",
            "E-mail",
            "Interne gedeelde mappen"
          ],

          image: ""
        },

        {
          title:
            "Assetlocaties België",

          text:
            "Voor het Belgische team worden in het huidige handboek onder andere de Paloma-clientpagina, Social Sky Content Hub, Vimeo via UnCool en de Nederlandse Social Content-map genoemd.",

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
            "UnCool: concepten en assets via Vimeo en e-mail",
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
      id: "organic-workflow",
      category: "organic-social",

      title:
        "2. Workflow & verantwoordelijkheden",

      summary:
        "Contentplanning, publicatie, bureaus en verantwoordelijkheden.",

      system:
        "Organic Social Media",

      frequency:
        "Doorlopend",

      duration:
        "Naslag",

      featured: true,

      steps: [
        {
          title:
            "2.1 Organic Social",

          text:
            "De contentkalender vormt de centrale basis voor de dagelijkse werkzaamheden. Planning, prioriteiten en content worden regelmatig met het team afgestemd en bijgewerkt.",

          image: ""
        },

        {
          title:
            "2.1.1 Content inplannen",

          text:
            "Content kan intern of door externe bureaus worden gecreëerd. Na controle en goedkeuring wordt de content via het juiste platform gepubliceerd of ingepland.",

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
                "Reels",
                "Carrousels",
                "Feedposts"
              ]
            },
            {
              title:
                "Overige kanalen",
              items: [
                "Facebook via Meta Business Suite",
                "Pinterest via Pinterest",
                "YouTube Shorts via YouTube"
              ]
            }
          ],

          image: ""
        },

        {
          title:
            "Belgische verdeling van kanalen",

          text:
            "Volgens het Belgische handboek ligt de hoofdverantwoordelijkheid voor Instagram en TikTok bij de Organic Social Marketeer België en deels bij de Stagiair Online Marketing België & Frankrijk. Facebook NL-BE en FR-BE, Pinterest en YouTube Shorts vallen voornamelijk onder de Social Media Coördinator België.",

          image: ""
        },

        {
          title:
            "Stories",

          text:
            "Stories worden gemaakt op basis van de contentkalender. Kijk ook of succesvolle content tussen teams of landen kan worden hergebruikt, mits de taal, actualiteit en lokale relevantie kloppen.",

          image: ""
        },

        {
          title:
            "Stories België",

          text:
            "Binnen het Belgische team worden stories volgens het huidige handboek voornamelijk gemaakt door de Stagiair Online Marketing België & Frankrijk, meestal in Canva. Er is wekelijks afstemming met de Stagiair Visual Creative over mogelijke crossposts tussen Nederland en België en over resultaten.",

          image: ""
        },

        {
          title:
            "2.2 Workflow met agencies",

          text:
            "Gebruik een vaste workflow voor concept, feedback, productie, goedkeuring en publicatie.",

          subsection: {
            title:
              "Agency workflow",

            steps: [
              "Agency presenteert een concept.",
              "Het team geeft feedback.",
              "De agency werkt het concept verder uit.",
              "De definitieve asset wordt aangeleverd.",
              "Het team geeft feedback of approval.",
              "De goedgekeurde asset wordt ingepland.",
              "Na publicatie worden resultaten en learnings bekeken."
            ]
          },

          image: ""
        },

        {
          title:
            "Agencyverdeling België",

          text:
            "Voor België zijn in het huidige handboek concrete afspraken opgenomen.",

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
            "De exacte verantwoordelijkheden kunnen verschillen per team, land, kanaal en periode. Controleer daarom altijd de actuele taakverdeling.",

          infoCards: [
            {
              title:
                "Organic Social",
              items: [
                "Contentplanning",
                "Contentcreatie",
                "Publicatie",
                "Optimalisatie"
              ]
            },
            {
              title:
                "Paid Social",
              items: [
                "Betaalde media",
                "Campagnes",
                "Boosting"
              ]
            },
            {
              title:
                "Creator Marketing",
              items: [
                "Creators selecteren",
                "Briefings",
                "Samenwerkingen"
              ]
            },
            {
              title:
                "Communitymanagement",
              items: [
                "Comments",
                "DM's",
                "Escalaties"
              ]
            },
            {
              title: "Legal",
              items: [
                "Contracten",
                "Rechten",
                "Juridische vragen"
              ]
            }
          ],

          image: ""
        },

        {
          title:
            "Belgische aanspreekpunten",

          text:
            "Het Belgische handboek bevat een specifieke rolverdeling voor België. Deze informatie is belangrijk wanneer je werkzaamheden uitvoert voor de Belgische kanalen.",

          infoCards: [
            {
              title:
                "Organic Social België",
              items: [
                "Social Media Marketeer België & Frankrijk",
                "Social Media Coördinator België",
                "Stagiair Online Marketing België & Frankrijk"
              ]
            },
            {
              title:
                "Communitymanagement België",
              items: [
                "Comments via de socialmedia-agency",
                "DM's via de Social Media Coördinator België"
              ]
            },
            {
              title:
                "Legal België",
              items: [
                "Projectmanager Marketing BE & FR"
              ]
            },
            {
              title:
                "Budget",
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
        "organic-contentrichtlijnen",

      category:
        "organic-social",

      title:
        "3. Contentrichtlijnen",

      summary:
        "Visuele identiteit, technische richtlijnen, captions, hashtags en emoji's.",

      system:
        "Organic Social Media",

      frequency:
        "Bij iedere contentcreatie",

      duration:
        "Naslag",

      featured: true,

      caution:
        "Gebruik alleen muziek en sounds waarvoor de juiste gebruiksrechten beschikbaar zijn.",

      steps: [
        {
          title:
            "HEMA-identiteit",

          text:
            "Content moet herkenbaar zijn als HEMA en passen bij de doelgroep, het kanaal en de lokale context.",

          image: ""
        },

        {
          title:
            "Belgische Vrindinnestrategie",

          text:
            "Voor Belgische social content geldt specifiek de Vrindinnestrategie: HEMA België communiceert als een toegankelijke, informele en vrolijke Belgische vriendin die kijkers wil laten lachen en inspireren.",

          image: ""
        },

        {
          title:
            "3.1 Visuele identiteit",

          text:
            "Gebruik voor grafische content en stories de geldende HEMA-richtlijnen voor beeldgebruik, kleuren en typografie.",

          image: ""
        },

        {
          title:
            "3.2 Algemene contentrichtlijnen",

          text:
            "Controleer technische specificaties, contentkwaliteit en rechten voordat je content publiceert.",

          bullets: [
            "Sounds en muziek moeten correct gelicenseerd zijn",
            "Reels: bij voorkeur 9:16",
            "Carrousels: bij voorkeur 4:5"
          ],

          image: ""
        },

        {
          title: "3.3 Caption",

          text:
            "Houd captions kort, duidelijk en passend bij de HEMA-tone of voice. Houd rekening met de taal en doelgroep van het betreffende account.",

          image: ""
        },

        {
          title:
            "Captions België",

          text:
            "Bij Belgische productposts op Instagram en TikTok is volgens het huidige handboek zowel een Vlaamse als een Waalse caption nodig, omdat deze kanalen voor beide doelgroepen worden gebruikt. Benoem daarnaast een relevante promotie kort wanneer een afgebeeld product in promotie is.",

          image: ""
        },

        {
          title:
            "3.3.1 Hashtags",

          text:
            "Gebruik hashtags wanneer ze relevant zijn voor de content en vindbaarheid. Voeg geen hashtags toe alleen omdat het kan.",

          image: ""
        },

        {
          title:
            "Hashtags België",

          text:
            "In het Belgische handboek wordt aangegeven dat hashtags voornamelijk op TikTok worden gebruikt en nauwelijks op Instagram en Facebook. #HEMA wordt standaard op TikTok gebruikt.",

          image: ""
        },

        {
          title:
            "3.3.2 Emoji's",

          text:
            "Gebruik emoji's alleen als ze waarde toevoegen. Informatieve of serieuze content kan juist sterker zijn zonder emoji's.",

          image: ""
        }
      ]
    },

    // =====================================================
    // 4. CONTENTFORMATS
    // =====================================================

    {
      id:
        "organic-contentformats",

      category:
        "organic-social",

      title:
        "4. Contentformats",

      summary:
        "Feed, stories, gamificatie, resultaten en Instagram Highlights.",

      system:
        "Organic Social Media",

      frequency:
        "Doorlopend",

      duration:
        "Naslag",

      featured: true,

      introBox: {
        title:
          "Gebruik een gevarieerde contentmix",

        text:
          "Een sterke Organic Social-aanpak bestaat uit verschillende soorten content. Wissel commerciële content af met inspiratie, entertainment, interactie en merkcontent."
      },

      steps: [
        {
          title: "4.1 Feed",

          text:
            "Zorg voor een goede mix van reels, carrousels en andere relevante formats. Content moet niet uitsluitend verkopen, maar ook bijdragen aan bereik, interactie en merkvoorkeur.",

          bullets: [
            "Sketches",
            "Promoties",
            "Productposts",
            "Winkelcontent",
            "Inspiratie",
            "Entertainment",
            "Engagementcontent"
          ],

          image: ""
        },

        {
          title:
            "Feed België",

          text:
            "Voor België vermeldt het huidige handboek dat minimaal één keer per dag op de feed wordt gepost. Een goede mix van carrousels, reels, sketches, promoties, productposts en winkelopeningen is belangrijk.",

          image: ""
        },

        {
          title: "4.2 Stories",

          text:
            "Stories zijn geschikt voor snelle communicatie en dagelijkse interactie. Combineer commerciële content met interactieve formats zodat stories niet alleen uit verkoopboodschappen bestaan.",

          infoCards: [
            {
              title:
                "Voorbeelden van gamificatie",
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
            "Houd prestaties structureel bij. Kijk bijvoorbeeld naar views, bereik, interactie en completion rate. Gebruik learnings om toekomstige stories te verbeteren.",

          image: ""
        },

        {
          title:
            "Storydata België",

          text:
            "Voor België worden Instagram- en Facebookviews volgens het huidige handboek wekelijks bijgehouden via Meta. Andere cijfers, zoals average completion rate, worden bekeken via Iconosquare.",

          image: ""
        },

        {
          title:
            "Instagram Highlights bijhouden",

          text:
            "Zorg dat Instagram Highlights actueel blijven. Verwijder verouderde tijdelijke informatie en voeg relevante blijvende content toe aan de juiste Highlight.",

          image: ""
        },

        {
          title:
            "Highlights België",

          text:
            "Het Belgische handboek noemt bijvoorbeeld dat nieuwe promotionele stories in de Highlight 'promoties' worden gezet en daar de oude promotie vervangen. Wallpapers, fanposts en spellen kunnen aan de betreffende Highlight worden toegevoegd zonder dat oudere content altijd verwijderd hoeft te worden.",

          image: ""
        }
      ]
    },

    // =====================================================
    // 5. DATA, ANALYSE & OPTIMALISATIE
    // =====================================================

    {
      id:
        "organic-data-analyse",

      category:
        "organic-social",

      title:
        "5. Data, Analyse & Optimalisatie",

      summary:
        "KPI's, rapportage en optimalisatie van content.",

      system:
        "Meta / Iconosquare",

      frequency:
        "Wekelijks",

      duration:
        "Naslag",

      featured: false,

      steps: [
        {
          title:
            "5.1 Belangrijkste KPI's",

          text:
            "Gebruik de afgesproken KPI's om prestaties te beoordelen. Denk aan views, bereik, engagement en follower growth. De belangrijkste KPI kan per kanaal, land en campagne verschillen.",

          image: ""
        },

        {
          title:
            "KPI's België",

          text:
            "Voor de Belgische Organic Social-kanalen noemt het huidige handboek views als belangrijkste KPI. Positieve engagement rate blijft relevant en follower growth wordt gebruikt als belangrijke indicatie of de content aanslaat.",

          image: ""
        },

        {
          title:
            "Belgische doelstellingen 2026",

          text:
            "Onderstaande cijfers gelden specifiek voor de Belgische kanalen en moeten niet automatisch worden toegepast op andere landen.",

          infoCards: [
            {
              title:
                "Instagram België",
              items: [
                "Frequentie: minimaal 7x per week",
                "Volgers: 110.000",
                "Views: 17,5 miljoen"
              ]
            },
            {
              title:
                "TikTok België",
              items: [
                "Frequentie: minimaal 7x per week",
                "Volgers: 40.000",
                "Views: 30 miljoen"
              ]
            },
            {
              title:
                "Facebook België",
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
            "Controleer de performance regelmatig via de beschikbare analytics-tools en leg resultaten centraal vast. Gebruik deze gegevens om learnings te verzamelen en toekomstige content te optimaliseren.",

          image: ""
        },

        {
          title:
            "Reporting België",

          text:
            "Voor België wordt performance volgens het huidige handboek wekelijks bekeken via Meta Statistieken en Iconosquare. De resultaten worden vervolgens genoteerd in het moederbestand waarin ook de contentkalender staat.",

          image: ""
        }
      ]
    },

    // =====================================================
    // 6. COMMUNITYMANAGEMENT
    // =====================================================

    {
      id:
        "organic-communitymanagement",

      category:
        "organic-social",

      title:
        "6. Communitymanagement",

      summary:
        "Tone of voice en omgaan met vragen, klachten en negatieve reacties.",

      system:
        "Social Media",

      frequency:
        "Dagelijks",

      duration:
        "Naslag",

      featured: false,

      steps: [
        {
          title:
            "6.1 Tone of voice",

          text:
            "Reageer herkenbaar als HEMA en houd rekening met taal, context en doelgroep. Goede interactie ondersteunt relatiemanagement en zichtbaarheid.",

          image: ""
        },

        {
          title:
            "6.2 Omgaan met negatieve reacties",

          text:
            "Niet iedere negatieve reactie vereist een antwoord. Beoordeel per situatie wat passend is en schaal ernstige situaties waar nodig op.",

          infoCards: [
            {
              title:
                "Ernstige klacht",
              items: [
                "Stuur door naar klantenservice of het verantwoordelijke team"
              ]
            },
            {
              title:
                "Gezonde discussie",
              items: [
                "Laat staan zolang de discussie respectvol blijft"
              ]
            },
            {
              title:
                "Intimidatie of schelden",
              items: [
                "Verwijder indien nodig",
                "Blokkeer indien nodig",
                "Rapporteer volgens de platformrichtlijnen"
              ]
            },
            {
              title:
                "Veel dezelfde vragen",
              items: [
                "Plaats een duidelijk openbaar antwoord"
              ]
            }
          ],

          image: ""
        },

        {
          title:
            "Communitymanagement België",

          text:
            "In het Belgische handboek wordt aangegeven dat comments via de socialmedia-agency worden afgehandeld en dat DM's door de Social Media Coördinator België worden behandeld. Ernstige klachten worden doorgestuurd naar klantenservice.",

          image: ""
        }
      ]
    },

    // =====================================================
    // 7. CREATORS
    // =====================================================

    {
      id:
        "organic-ugc-creators",

      category:
        "organic-social",

      title:
        "7. (UGC-) creators",

      summary:
        "Rol, selectie, briefing, workflow, legal en resultaten van creatorsamenwerkingen.",

      system:
        "Creator Marketing",

      frequency:
        "Wanneer nodig",

      duration:
        "Naslag",

      featured: true,

      steps: [
        {
          title:
            "7.1 Rol van creators",

          text:
            "Creators maken platformgerichte content die zowel organisch als binnen paid media kan worden gebruikt. Video-first formats zoals Reels, TikToks en Shorts spelen hierbij een belangrijke rol.",

          image: ""
        },

        {
          title:
            "7.2 Selectiecriteria",

          text:
            "Beoordeel creators op kwaliteit, relevantie en professionaliteit.",

          bullets: [
            "Kwaliteit van videocontent",
            "Effectiviteit van bestaande content",
            "Ervaring met merkcontent",
            "Professionaliteit",
            "Sterk portfolio met verhalende kwaliteit",
            "Relevantie voor de doelgroep",
            "Ervaring met sociale media"
          ],

          image: ""
        },

        {
          title:
            "7.3 Briefing & beoordeling",

          text:
            "Geef creators voldoende creatieve vrijheid, maar zorg dat de noodzakelijke merk- en campagne-elementen duidelijk zijn.",

          bullets: [
            "Content moet natuurlijk aanvoelen",
            "Belangrijke producten moeten zichtbaar zijn",
            "Video moet passend in lengte zijn",
            "Merkherkenning moet snel zichtbaar zijn"
          ],

          image: ""
        },

        {
          title:
            "7.4 Workflow creators",

          text:
            "Gebruik een vaste workflow van selectie tot rapportage.",

          subsection: {
            title:
              "Creator workflow",

            steps: [
              "Opdracht/dropping → creators selecteren.",
              "Briefing → via e-mail.",
              "Sample verzending → tracking delen.",
              "Previews → feedback en revisies.",
              "Go-live → publicatie en disclosure controleren.",
              "Assets downloaden en archiveren.",
              "Content hergebruiken waar toegestaan.",
              "Resultaten en learnings rapporteren."
            ],

            note:
              "Het Belgische handboek noemt als huidige SLA's: briefing accepteren binnen 48 uur, feedback op preview binnen 48 uur en publicatie na go/no-go binnen 24 uur."
          },

          image: ""
        },

        {
          title:
            "7.5 Wetgeving & legal",

          text:
            "Controleer bij samenwerkingen altijd de juridische afspraken, rechten en platformvereisten.",

          bullets: [
            "Geen ongefundeerde claims",
            "Correcte disclosure zoals #ad of betaalde samenwerking",
            "Muziek- en gebruiksrechten controleren",
            "Controleer afspraken over hergebruik van content"
          ],

          image: ""
        },

        {
          title:
            "7.6 Data noteren en verwerken",

          text:
            "Leg creatorcampagnes, resultaten, learnings en tracking centraal vast.",

          image: ""
        },

        {
          title:
            "Dataverwerking creators België",

          text:
            "In het Belgische handboek worden het moederbestand voor campagnes en het linkbuilding-document voor trackinglinks genoemd.",

          image: ""
        }
      ]
    },

    // =====================================================
    // LOKALE SOCIALE MEDIAKANALEN
    // =====================================================

    {
      id:
        "organic-lokale-kanalen",

      category:
        "organic-social",

      title:
        "Lokale sociale mediakanalen",

      summary:
        "Richtlijnen voor lokale socialmediakanalen van winkels.",

      system:
        "Lokale Social Media",

      frequency:
        "Wanneer nodig",

      duration:
        "Naslag",

      featured: false,

      steps: [
        {
          title:
            "Lokale content monitoren",

          text:
            "Lokale teams kunnen waardevolle Employee Generated Content maken. Houd zicht op wat lokale winkels publiceren en ondersteun hen met richtlijnen waar nodig.",

          image: ""
        },

        {
          title:
            "Controleer releasedatums",

          text:
            "Nieuwe producten en collecties mogen niet vóór de afgesproken releasedatum worden gepubliceerd. Neem contact op met het lokale team wanneer content te vroeg online staat.",

          image: ""
        },

        {
          title:
            "Specifiek voor lokale winkels in België",

          text:
            "Het Belgische handboek benadrukt dat Employee Generated Content vanuit lokale Belgische winkels welkom is. Wanneer een winkel een collectie vóór de officiële releasedatum publiceert, moet contact worden opgenomen met de winkel met het verzoek de content offline te halen en zich aan de officiële releasedatum te houden.",

          image: ""
        }
      ]
    },

    // =====================================================
    // 8. BIJLAGEN
    // =====================================================

    {
      id: "organic-bijlagen",
      category: "organic-social",

      title:
        "8. Bijlagen",

      summary:
        "Storytemplates, creatorprocessen en aanvullende tools.",

      system:
        "Canva / TradeTracker",

      frequency:
        "Naslag",

      duration:
        "Naslag",

      featured: false,

      subsections: [
        {
          title:
            "8.1 Organic Social",

          steps: [
            {
              title:
                "Feed & data",

              text:
                "Gebruik de centrale rapportagebestanden om prestaties van feedposts en stories vast te leggen en te vergelijken.",

              image: ""
            },

            {
              title:
                "Storytemplates",

              text:
                "Gebruik de beschikbare Canva-templates als basis. Maak eerst een kopie naar je eigen Canva-account voordat je een template aanpast.",

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
                  label:
                    "Dit of Dat",
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
                  label:
                    "Fanstories",
                  href:
                    "https://canva.link/k7r48mzyv3xi4gf"
                },
                {
                  label:
                    "Zoekspel",
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
                  label:
                    "Geheugenspel",
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
            "8.2 Creatorproces België – NL-BE",

          text:
            "Onderstaande informatie geldt specifiek voor Nederlandstalige Belgische creators.",

          steps: [
            {
              title:
                "Nieuwe creator aanmelden",

              text:
                "Nieuwe creators maken eerst een TradeTracker-account aan via het HEMA België affiliateprogramma. Na goedkeuring ontvangen zij een Affiliate-ID. Dit ID is nodig voor registratie en verwerking van vergoedingen.",

              links: [
                {
                  label:
                    "HEMA België affiliateprogramma",
                  href:
                    "https://www.hema.com/nl-be/affiliate"
                }
              ],

              bullets: [
                "Geen affiliate links nodig voor deze creatoropdrachten",
                "De vergoeding wordt als fixed fee geregistreerd"
              ],

              image: ""
            },

            {
              title:
                "Vergoedingsproces",

              text:
                "Betalingen lopen via TradeTracker. De creator hoeft geen factuur te sturen.",

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
            "8.3 Creatorproces België – FR-BE",

          text:
            "Onderstaande informatie geldt specifiek voor Franstalige Belgische creators.",

          steps: [
            {
              title:
                "Nieuwe creator aanmelden",

              text:
                "Franstalige Belgische creators maken eerst een TradeTracker-account aan via het Franstalige HEMA België affiliateprogramma. Na goedkeuring ontvangen zij een Affiliate ID.",

              links: [
                {
                  label:
                    "Programme d'affiliation HEMA Belgique",
                  href:
                    "https://www.hema.com/fr-be/affiliation"
                }
              ],

              bullets: [
                "Affiliate ID is verplicht voor verwerking",
                "Geen affiliate links nodig voor creatoropdrachten",
                "De vergoeding wordt als fixed fee geregistreerd"
              ],

              image: ""
            },

            {
              title:
                "Vergoedingsproces",

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
          title:
            "8.4 Overige tools",

          cards: [
            {
              title: "Keeper",
              lines: [
                "Veilige wachtwoordkluis voor accountgegevens.",
                "Deel wachtwoorden niet via deze onboarding-webapp."
              ]
            },
            {
              title: "Yext",
              lines: [
                "Wordt gebruikt voor het beheren van bedrijfs- en locatiegegevens.",
                "Helpt informatie zoals openingstijden, adressen en contactgegevens actueel te houden op verschillende online platforms."
              ]
            }
          ]
        }
      ]
    }

  ]
};
