export type BasinWasteCouplingSpec = {
  label: string;
  value: string;
};

export type BasinWasteCouplingProduct = {
  id: number;
  range: "ROYAL" | "SILIK";
  name: string;
  cardName: string;
  size: string;
  image: string;
  specs: BasinWasteCouplingSpec[];
  packing?: string;
  description: string[];
};

const image = (id: number) => `/basin-waste-couplings/${String(id).padStart(2, "0")}.jpg`;

const notes = [
  "Material: Stainless Steel",
  "Finish Type: Chrome",
  "Easy to Install",
  "Brass Nut",
];

export const basinWasteCouplingProducts: BasinWasteCouplingProduct[] = [
  {
    id: 83,
    range: "ROYAL",
    name: "PRC C.P. Waste Coupling - Brass",
    cardName: "Brass Waste Coupling",
    size: "Full Thread",
    image: image(1),
    specs: [
      { label: "Material", value: "Brass" },
      { label: "Waste Coupling Type", value: "BASIN WASTE" },
      { label: "Thread Type", value: "Full Thread" },
      { label: "Usage/Application", value: "Bathroom Fitting" },
      { label: "Color", value: "Silver" },
      { label: "Rust Resistant", value: "Yes" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    packing: "Single packing of 1 piece",
    description: notes,
  },
  {
    id: 84,
    range: "ROYAL",
    name: "PRC C.P. Waste Coupling - Brass Nut",
    cardName: "Brass Nut Waste Coupling",
    size: "Full Thread",
    image: image(2),
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Waste Coupling Type", value: "BASIN WASTE" },
      { label: "Thread Type", value: "Full Thread" },
      { label: "Usage/Application", value: "Bathroom Fitting" },
      { label: "Color", value: "Silver" },
      { label: "Rust Resistant", value: "Yes" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    packing: "Single packing of 1 piece",
    description: notes,
  },
  {
    id: 85,
    range: "SILIK",
    name: "PRC C.P. Waste Coupling - Brass Nut (FT/HT)",
    cardName: "Brass Nut FT/HT",
    size: "Full Thread",
    image: image(3),
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Finish", value: "Chrome" },
      { label: "Waste Coupling Type", value: "BASIN WASTE" },
      { label: "Thread Type", value: "Full Thread" },
      { label: "Usage/Application", value: "Bathroom Fitting" },
      { label: "Color", value: "Silver" },
      { label: "Rust Resistant", value: "Yes" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    packing: "Single packing of 1 piece",
    description: notes,
  },
  {
    id: 86,
    range: "SILIK",
    name: "PRC C.P. Waste Coupling - Brass Nut 6 Inch",
    cardName: "Brass Nut 6 Inch",
    size: "6 Inch",
    image: image(4),
    specs: [],
    description: [],
  },
];
