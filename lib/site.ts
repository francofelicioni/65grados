export const siteConfig = {
  name: "65 Grados",
  title: "65 Grados · Café de Especialidad Taiwanesa · Núñez",
  description:
    "Pastelería y café de especialidad taiwanesa en Núñez, Buenos Aires. Tostadores propios, pastelería artesanal, specialty coffee, filtrados y bubble tea. Iberá 2386.",
  shortDescription:
    "Tostadores propios · Pastelería artesanal · Núñez, Buenos Aires",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://65grados.coffee",
  locale: "es_AR",
  address: {
    street: "Iberá 2386",
    city: "Núñez",
    region: "Buenos Aires",
    country: "AR",
  },
  instagram: "https://www.instagram.com/65grados.coffee",
  keywords: [
    "café especialidad",
    "café taiwanes",
    "taiwanese café",
    "núñez",
    "buenos aires",
    "specialty coffee",
    "bubble tea",
    "pastelería",
    "65 grados",
    "café núñez",
  ],
} as const;
