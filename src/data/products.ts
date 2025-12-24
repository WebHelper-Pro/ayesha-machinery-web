export const productCatalog = {
  agriculture: {
    categories: {
      "Surface Pumps": [
        {
          id: "centrifugal-monobloc-pumps-1",
          name: "LHP Centrifugal Monoblock Pump",
          image: "/images/agriculture/surface-pump/centrifugal-monobloc-pumps-1.webp",
          datasheet: "/pdf/agriculture/centrifugal-monobloc-pumps-1.pdf",
          features: [
            "High Grade Mechanical Seal",
            "Anti-Rust_CED Coated Hydraulic Parts",
            "Liquid - Clear and Cold Water",
            "Thermal overload protection",
          ],
          specifications: {
            "Motor Body": "Cast Iron",
            Voltage: "180–240V",
            Speed: "2880 RPM",
            Application: "Irrigation & Domestic",
          },
        },
         {
          id: "centrifugal-monobloc-pumps-hhp-1",
          name: "HHP Centrifugal Monoblock Pump",
          image: "/images/agriculture/surface-pump/centrifugal-monobloc-pumps-hhp-1.webp",
          datasheet: "/pdf/agriculture/centrifugal-monobloc-pumps-hhp-1.pdf",
          features: [
            "High Grade Mechanical Seal",
            "Strong Motor Body",
            "Liquid - Clear and Cold Water",
            "Thermal overload protection",
            "F Class Insulation",
          ],
          specifications: {
            "Motor Body": "Cast Iron FG200",
            Voltage: "180–240V",
            Speed: "2880 RPM",
            Application: "Agriculture, Industrial, Commercial & Domestic",
          },
        },

        {
          id: "three-phase-centrifugal-monobloc-pumps",
          name: "Three Phase Centrifugal Monoblock Pump",
          image: "/images/agriculture/surface-pump/three-phase-centrifugal-monobloc-pumps.webp",
          datasheet: "/pdf/agriculture/three-phase-centrifugal-monobloc-pumps.pdf",
          features: [
             "IE2/I/IE3 Energy Efficient Motor",
            "IP 55 Protection",
            "Anti-Rust Coated Impeller",
            "High Grade Mechanical Seal(Reliable)",
            "Copper Wound Induction Motor",
          ],
          specifications: {
            "Motor Body": "Cast Iron",
            Voltage: "180–240V",
            Speed: "2880 RPM",
            Application: "Irrigation & Domestic",
          },
        },
      ],

      "Submersible Pumps": [
        {
          id: "agriculture-open-well-pumps",
          name: "Agro 3Ph Horizontal Open Well Pump",
          image: "/images/agriculture/submersible-pump/agriculture-open-well-pumps.webp",
          datasheet: "/pdf/agriculture/agriculture-open-well-pumps.pdf",
          features: [
            "Energy efficient design",
            "SS strainer to prevent debris entry",
            "Anti-Rust CED Coated CI Parts",
            "100% Copper Winding",
          ],
          specifications: {
            Voltage: "350–440V",
            Phase: "Three Phase",
            Application: "Agriculture & Irrigation(Sprinkle, Drip)",
          },
        },
      ],
    },
  },

  residential: {
    categories: {
      "Surface Pumps": [
        {
          id: "cgcj-vertical-centrifugal-jet-pump",
          name: "Centrifugal Jet Pump",
          image: "/images/residential/surface-pump/cgcj-vertical-centrifugal-jet-pump.webp",
          datasheet: "/pdf/residential/cgcj-vertical-centrifugal-jet-pump.pdf",
          features: [
            "High Suction Head",
            "Durably Build",
            "Easy installation",
            "High Grade Mechanical Seal",
            "Rust Preventing CED Coating",
          ],
          specifications: {
            Voltage: "220V",
            Application: "Domestic water supply & Collapsed/Irregular bore-well",
          },
        },
      ],

      "Submersible Pumps": [
        {
          id: "domestic-open-well-pumps-ci-body",
          name: "Z/ZM Series Domestic Open Well Pump",
          image: "/images/residential/submersible-pump/domestic-open-well-pumps-ci-body.webp",
          datasheet: "/pdf/residential/domestic-open-well-pumps-ci-body.pdf",
          features: [
            "Cast Iron Motor Body",
            "Energy efficient design",
            "SS strainer to prevent debris entry",
            "Anti-Rust CED Coated CI Parts",
            "100% Copper Winding",
          ],
          specifications: {
            Voltage: "415V",
            Phase: "Three Phase",
            Application: "Borewell & Agriculture",
          },
        },
      ],
    },
  },

  commercial: {
    categories: {
      "Surface Pumps": [
        {
          id: "dewatering-monobloc-pumps",
          name: "Monobloc De-Watering Pump",
          image: "/images/commercial/surface-pump/dewatering-monobloc-pumps.webp",
          datasheet: "/pdf/commercial/dewatering-monobloc-pumps.pdf",
          features: [
            "Robust Construction",
            "Easy Maintenance",
            "Dynamically Ballanced Impellers",
            "Anti-Rust Coated Hydraulic Parts",
            "Design for High Eficiency Performance",
          ],
          specifications: {
            Voltage: "415V",
            Application: "Industrial & Commercial",
          },
        },
      ],
    },
  },
};
