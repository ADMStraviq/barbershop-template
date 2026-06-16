const config = {
  shopName: "Gentleman's Cut",
  tagline: "Premium Barbershop · Est. 2018",
  phone: "+49 30 123 456 78",
  whatsappNumber: "4930123456789",
  address: "Kurfürstendamm 42",
  city: "Berlin",
  zipCode: "10719",
  heroImageUrl:
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&q=85",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Kurfürstendamm+42,+10719+Berlin,+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed",
  openingHours: [
    { day: "Montag – Freitag", hours: "09:00 – 20:00" },
    { day: "Samstag", hours: "09:00 – 18:00" },
    { day: "Sonntag", hours: "Geschlossen" },
  ],
  services: [
    {
      name: "Classic Cut",
      price: "€ 35",
      description:
        "Traditioneller Herrenhaarschnitt inkl. Waschen, Schneiden & Stylen nach Wunsch.",
    },
    {
      name: "Beard Shaping",
      price: "€ 25",
      description:
        "Präzise Bartpflege mit heißem Tuch, Rasiermesser-Kontur & Bartwachs-Finish.",
    },
    {
      name: "Cut & Shave",
      price: "€ 55",
      description:
        "Komplettpaket: Haarschnitt, klassische Nassrasur & Gesichtspflege inklusive.",
    },
    {
      name: "Kids Cut",
      price: "€ 22",
      description:
        "Haarschnitt für Kinder bis 12 Jahre in entspannter, kinderfreundlicher Atmosphäre.",
    },
  ],
  galleryImages: [
    {
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=80",
      alt: "Barbershop interior",
    },
    {
      url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
      alt: "Barber at work",
    },
    {
      url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
      alt: "Precision haircut",
    },
    {
      url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=80",
      alt: "Barbershop chair",
    },
  ],

  // bookingEnabled: false  →  Template A (WhatsApp CTA, no booking section)
  // bookingEnabled: true   →  Template B (booking button + embedded calendar)
  bookingEnabled: true,
  bookingUrl: "https://cal.com/barbershop/appointment",

  primaryColor: "#C9A84C",

  reviews: {
    rating: 5.0,
    count: 0,
    platform: "Google",
    items: [
      {
        name: "Kunde A",
        rating: 5,
        date: "vor 2 Wochen",
        text: "Platzhalter Bewertung 1 — wird durch echte Google Bewertung ersetzt."
      },
      {
        name: "Kunde B",
        rating: 5,
        date: "vor 1 Monat",
        text: "Platzhalter Bewertung 2 — wird durch echte Google Bewertung ersetzt."
      },
      {
        name: "Kunde C",
        rating: 5,
        date: "vor 3 Wochen",
        text: "Platzhalter Bewertung 3 — wird durch echte Google Bewertung ersetzt."
      },
      {
        name: "Kunde D",
        rating: 5,
        date: "vor 1 Monat",
        text: "Platzhalter Bewertung 4 — wird durch echte Google Bewertung ersetzt."
      }
    ]
  }
}

export default config
