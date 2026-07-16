const config = {
  shopName: "Gentleman's Cut",
  tagline: "Premium Barbershop · Est. 2018",
  phone: "+49 30 123 456 78",
  whatsappNumber: "4930123456789",
  address: "Kurfürstendamm 42",
  city: "Berlin",
  zipCode: "10719",
  heroImageUrl: "/hero.png",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Kurfürstendamm+42,+10719+Berlin,+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed",
  openingHours: [
    { day: "Montag – Freitag", hours: "09:00 – 20:00" },
    { day: "Samstag", hours: "09:00 – 18:00" },
    { day: "Sonntag", hours: "Geschlossen" },
  ],
  serviceCategories: {
    herren: [
      { name: "Classic Cut", price: "35€" },
      { name: "Modern Fade", price: "38€" },
      { name: "Long Hair Cut", price: "ab 42€" },
      { name: "Kids Cut", price: "22€" },
      { name: "Haarwäsche", price: "5€" },
    ],
    bart: [
      { name: "Beard Shaping", price: "25€" },
      { name: "Hot Towel Shave", price: "30€" },
      { name: "Bartpflege & Styling", price: "18€" },
    ],
    pflege: [
      { name: "Augenbrauen zupfen", price: "8€" },
      { name: "Gesichtsreinigung", price: "28€" },
      { name: "Nasen- & Ohrenhaarentfernung", price: "5€" },
    ],
    paket: [
      { name: "Cut & Shave", price: "55€" },
      { name: "Komplett-Paket: Haarschnitt + Bart + Gesichtspflege", price: "75€" },
    ],
  },
  galleryImages: [
    {
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=80",
      alt: "Barbershop interior",
      position: "center",
    },
    {
      url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
      alt: "Barber at work",
      position: "center",
    },
    {
      url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
      alt: "Precision haircut",
      position: "center",
    },
    {
      url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=80",
      alt: "Barbershop chair",
      position: "center",
    },
    {
      url: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&q=80",
      alt: "Barbershop Detail",
      position: "center",
    },
    {
      url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=80",
      alt: "Haarschnitt",
      position: "center",
    },
  ],

  servicesNote: "Alle Preise können je nach Haarlänge, Haarmenge und Aufwand variieren.",

  // bookingEnabled: false  →  "Termin buchen" links to WhatsApp
  // bookingEnabled: true   →  "Termin buchen" links to /termin preview page
  bookingEnabled: true,

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
        text: "Platzhalter Bewertung 1 — wird durch echte Google Bewertung ersetzt.",
      },
      {
        name: "Kunde B",
        rating: 5,
        date: "vor 1 Monat",
        text: "Platzhalter Bewertung 2 — wird durch echte Google Bewertung ersetzt.",
      },
      {
        name: "Kunde C",
        rating: 5,
        date: "vor 3 Wochen",
        text: "Platzhalter Bewertung 3 — wird durch echte Google Bewertung ersetzt.",
      },
      {
        name: "Kunde D",
        rating: 5,
        date: "vor 1 Monat",
        text: "Platzhalter Bewertung 4 — wird durch echte Google Bewertung ersetzt.",
      },
    ],
  },
}

export default config
