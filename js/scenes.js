export const scenes = {
  office: {
    image: null,
    alt: {
      fr: "Vue panoramique du bureau professionnel, photographie de référence à intégrer",
      en: "Panoramic view of the professional office, reference photograph to be added"
    },
    placeholder: "office",
    camera: {
      desktop: { x: 50, y: 50, zoom: 1.02 },
      mobile: { x: 50, y: 50, zoom: 1.02 }
    },
    hotspots: [
      { id: "desk", section: "about", x: 51, y: 72.9 },
      { id: "skills", section: "expertise", x: 60.5, y: 16 },
      { id: "computer", section: "projects", x: 66.3, y: 49.5 },
      { id: "books", section: "education", x: 85.7, y: 60.7 },
      { id: "documents", section: "experience", x: 78.7, y: 68.9 },
      { id: "phone", section: "contact", x: 70.7, y: 67.3 }
    ]
  },
  desk: {
    image: null,
    alt: { fr: "Détail du bureau, photographie de référence à intégrer", en: "Desk detail, reference photograph to be added" },
    placeholder: "detail",
    camera: { desktop: { x: 51, y: 72.9, zoom: 2.05 }, mobile: { x: 49.5, y: 69.4, zoom: 1.72 } }
  },
  skills: {
    image: null,
    alt: { fr: "Détail du tableau mural de compétences techniques, photographie de référence à intégrer", en: "Technical skills wall board detail, reference photograph to be added" },
    placeholder: "detail",
    camera: { desktop: { x: 45, y: 13.5, zoom: 2.55 }, mobile: { x: 24.5, y: 25.5, zoom: 1.85 } }
  },
  computer: {
    image: null,
    alt: { fr: "Détail des écrans et de l’ordinateur, photographie de référence à intégrer", en: "Computer and monitor detail, reference photograph to be added" },
    placeholder: "detail",
    camera: { desktop: { x: 66.3, y: 49.5, zoom: 2.1 }, mobile: { x: 67.8, y: 55.6, zoom: 1.82 } }
  },
  books: {
    image: null,
    alt: { fr: "Détail des livres et documents de formation, photographie de référence à intégrer", en: "Books and learning materials detail, reference photograph to be added" },
    placeholder: "detail",
    camera: { desktop: { x: 85.7, y: 60.7, zoom: 2.55 }, mobile: { x: 94.4, y: 60.7, zoom: 2.05 } }
  },
  documents: {
    image: null,
    alt: { fr: "Détail des documents professionnels, photographie de référence à intégrer", en: "Professional documents detail, reference photograph to be added" },
    placeholder: "detail",
    camera: { desktop: { x: 78.7, y: 68.9, zoom: 2.25 }, mobile: { x: 78.1, y: 68.9, zoom: 1.88 } }
  },
  phone: {
    image: null,
    alt: { fr: "Détail du smartphone sur le bureau, photographie de référence à intégrer", en: "Smartphone on the desk, reference photograph to be added" },
    placeholder: "detail",
    camera: { desktop: { x: 70.7, y: 67.3, zoom: 2.6 }, mobile: { x: 67.8, y: 67.3, zoom: 2.1 } }
  }
};
