export const productCatalog = {
  agriculture: {
    // label: "Agriculture Pumps",
    // icon: "/icons/agriculture.svg",
    categories: {
      "Surface Pumps": [
        {
          id: "centrifugal-monoblock",
          name: "Centrifugal Monoblock Pump",
          image: "/images/agriculture/surface-pump/pump.webp",
          datasheet: "/pdf/agriculture/centrifugal-monoblock.pdf",
        },
      ],

      "Submersible Pumps": [
        {
          id: "agri-submersible",
          name: "Agriculture Submersible Pump",
          image: "/images/agriculture/submersible-pump/pump.webp",
          datasheet: "/pdf/agriculture/agri-submersible.pdf",
        },        
      ],
    },
  },

  residential: {
    // label: "Residential Pumps",
    // icon: "/icons/residential.svg",
    categories: {
      "Surface Pumps": [
        {
          id: "home-surface",
          name: "Home Surface Pump",
          image: "/images/residential/surface-pump/pump.webp",
          datasheet: "/pdf/residential/home-surface.pdf",
        },
      ],
      "Submersible Pumps": [
        {
          id: "home-submersible",
          name: "Home Submersible Pump",
          image: "/images/residential/submersible-pump/pump.webp",
          datasheet: "/pdf/residential/home-submersible.pdf",
        },
      ],
    },
  },

  commercial: {
    // label: "Commercial Pumps",
    // icon: "/icons/commercial.svg",
    categories: {
      "Industrial Pumps": [
        {
          id: "industrial-heavy",
          name: "Heavy Duty Industrial Pump",
          image: "/images/commercial/industrial-pump/pump.webp",
          datasheet: "/pdf/commercial/industrial-heavy.pdf",
        },
      ],
    },
  },
};
