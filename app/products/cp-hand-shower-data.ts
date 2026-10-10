export type CpHandShowerSpec = {
  label: string;
  value: string;
};

export type CpHandShowerProduct = {
  id: number;
  range: "ROYAL" | "SILIK";
  name: string;
  cardName: string;
  size: string;
  image: string;
  specs: CpHandShowerSpec[];
  packing?: string;
  description: string[];
};

const image = (id: number) => `/cp-hand-showers/${String(id).padStart(2, "0")}.jpg`;

const notes = [
  "Shower head high pressure offers latest 5 settings to suit your mood, a dribble function for water saving to reduce water bill. Hand Shower, 1.5 Meter Flexible Stainless Steel Hose & Wall Mount Hook",
];

export const cpHandShowerProducts: CpHandShowerProduct[] = [
  {
    id: 81,
    range: "ROYAL",
    name: "PRC C.P. Hand Shower Set - Duck - Royal",
    cardName: "Duck Hand Shower Set",
    size: "1.5 Meter Hose",
    image: image(1),
    specs: [
      { label: "Material", value: "Brass" },
      { label: "Installation Type", value: "Wall Mounted" },
      { label: "Shower Head Type", value: "Cascading Waterfall" },
      { label: "Shower Head Shape", value: "Circular" },
      { label: "Color", value: "SILVER" },
      { label: "Packaging Type", value: "Box Packing" },
      { label: "Quantity Per Pack", value: "1Pcs." },
      { label: "Lighting", value: "Yes" },
      { label: "I Deal In", value: "New Only" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    packing: "Single packing of 1 piece",
    description: notes,
  },
  {
    id: 82,
    range: "ROYAL",
    name: "PRC C.P. Hand Shower Set Round",
    cardName: "Round Hand Shower Set",
    size: "1.5 Meter Hose",
    image: image(2),
    specs: [
      { label: "Material", value: "Brass" },
      { label: "Installation Type", value: "Wall Mounted" },
      { label: "Shower Head Shape", value: "Circular" },
      { label: "Color", value: "SILVER" },
      { label: "Packaging Type", value: "Box Packing" },
      { label: "Quantity Per Pack", value: "1Pcs." },
      { label: "Lighting", value: "Yes" },
      { label: "I Deal In", value: "New Only" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    packing: "Single packing of 1 piece",
    description: notes,
  },
];
