export type CpFlangeSpec = {
  label: string;
  value: string;
};

export type CpFlangeProduct = {
  id: number;
  range: "ROYAL" | "SILIK";
  name: string;
  cardName: string;
  size: string;
  image: string;
  specs: CpFlangeSpec[];
  packing?: string;
  description: string[];
};

const image = (id: number) => `/cp-flanges/${String(id).padStart(2, "0")}.jpg`;

const notes = [
  "Constructed from Premium Grade Stainless Steel which prevents rust and corrosion in your bathroom for long lasting durability.",
];

export const cpFlangeProducts: CpFlangeProduct[] = [
  {
    id: 87,
    range: "ROYAL",
    name: "PRC C.P. Cap Jaquar - Royal",
    cardName: "Jaquar Cap",
    size: "Round",
    image: image(1),
    specs: [
      { label: "Shape", value: "ROUND" },
      { label: "Head Type", value: "Round" },
      { label: "Color", value: "SILVER" },
      { label: "Usage/Application", value: "Plumbing Pipe" },
      { label: "Packaging Type", value: "BOX" },
      { label: "Quantity Per Pack", value: "120 Pcs" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    packing: "Single packing of 12 piece and master Packing of 120 pieces",
    description: notes,
  },
  {
    id: 88,
    range: "SILIK",
    name: "PRC C.P. Cap Big Queen - Silik",
    cardName: "Big Queen Cap",
    size: "Round",
    image: image(2),
    specs: [
      { label: "Material", value: "STEEL" },
      { label: "Design", value: "Seal Cap" },
      { label: "Shape", value: "Round" },
      { label: "Color", value: "SILVER" },
      { label: "Embossed Logo", value: "Yes" },
      { label: "Packaging Type", value: "Box" },
      { label: "Is It Customized", value: "Non Customized" },
      { label: "Is It Recyclable", value: "Non Recyclable" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    packing: "Single packing of 12 piece and master Packing of 120 pieces",
    description: notes,
  },
  {
    id: 89,
    range: "SILIK",
    name: "PRC C.P. Cap Flat - Silik",
    cardName: "Flat Cap",
    size: "Flat",
    image: image(3),
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Finish", value: "Nickel Plated" },
      { label: "Type", value: "Plumbing Traps" },
      { label: "Color", value: "Silver" },
      { label: "Packaging Type", value: "24 pcs" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    packing: "Single packing of 24 piece and master Packing of 240 pieces",
    description: notes,
  },
  {
    id: 90,
    range: "SILIK",
    name: "PRC C.P. Cap Flat Pillar Cock - Silik",
    cardName: "Flat Pillar Cock Cap",
    size: "Round",
    image: image(4),
    specs: [
      { label: "Design", value: "ROUND" },
      { label: "Use For", value: "Bathroom" },
      { label: "Usage/Application", value: "Bathroom Fitting" },
      { label: "Collection", value: "SILIK" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    packing: "Single packing of 24 piece and master Packing of 240 pieces",
    description: notes,
  },
];
