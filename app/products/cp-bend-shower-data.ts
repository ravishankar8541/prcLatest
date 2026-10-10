export type CpBendShowerSpec = {
  label: string;
  value: string;
};

export type CpBendShowerProduct = {
  id: number;
  range: "ROYAL" | "SILIK";
  name: string;
  cardName: string;
  size: string;
  image: string;
  specs: CpBendShowerSpec[];
  packing?: string;
  description: string[];
};

const image = (id: number) => `/cp-bend-showers/${String(id).padStart(2, "0")}.jpg`;

export const cpBendShowerProducts: CpBendShowerProduct[] = [
  {
    id: 69,
    range: "ROYAL",
    name: "PRC C.P. Bend Shower- Duck - Royal",
    cardName: "Duck Bend Shower",
    size: "7 Inch Arm",
    image: image(1),
    specs: [
      { label: "Material", value: "Brass" },
      { label: "Installation Type", value: "Wall Mounted" },
      { label: "Shower Head Type", value: "Rainfall" },
      { label: "Shower Head Shape", value: "Circular" },
      { label: "Color", value: "SILVER" },
      { label: "Packaging Type", value: "Box Packing" },
      { label: "Arm", value: "7 Inch" },
      { label: "Quantity Per Pack", value: "1Pcs." },
      { label: "I Deal In", value: "New Only" },
      { label: "Lighting", value: "Yes" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    packing: "Single packing of 1 piece",
    description: [
      "Package Contains: 1 Set of Round Bathroom Shower with 7 inch Brass Shower Arm",
      "This overhead shower is made under stringent quality norms to provide top-quality products for its users. It is chrome plated that offers an impeccable surface finish to it.",
      "Both shower head & shower arm have leak proof structure, rain spray pattern, high glossy mirror polish chrome",
      "Elegant finish, smooth rain like water flow, stunning & shimmering , Anti-corrosive, easy to clean & easy to install",
      "Beautiful ergonomical design made from quality material for superior looks and prolonged durability",
    ],
  },
  {
    id: 70,
    range: "ROYAL",
    name: "PRC C.P. Bend Shower - Diamond - Royal",
    cardName: "Diamond Bend Shower",
    size: "7 Inch Arm",
    image: image(2),
    specs: [
      { label: "Material", value: "Brass" },
      { label: "Shower Head Shape", value: "OVAL" },
      { label: "Packaging Type", value: "Box Packing" },
      { label: "I Deal In", value: "New Only" },
      { label: "Lighting", value: "Yes" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Installation Type", value: "Wall Mounted" },
      { label: "Shower Head Type", value: "Cascading Waterfall" },
      { label: "Color", value: "SILVER" },
      { label: "Quantity Per Pack", value: "1Pcs." },
      { label: "Arm", value: "7 Inch" },
    ],
    packing: "Single packing of 1 piece",
    description: [
      "Package Contains: 1 Set of Round Bathroom Shower with 7 inch Brass Shower Arm",
      "This overhead shower is made under stringent quality norms to provide top-quality products for its users. It is chrome plated that offers an impeccable surface finish to it.",
      "Both shower head & shower arm have leak proof structure, rain spray pattern, high glossy mirror polish chrome",
      "Elegant finish, smooth rain like water flow, stunning & shimmering , Anti-corrosive, easy to clean & easy to install",
      "Beautiful ergonomical design made from quality material for superior looks and prolonged durability",
    ],
  },
  {
    id: 71,
    range: "ROYAL",
    name: "PRC C.P. Bend Shower - Arrow - Royal",
    cardName: "Arrow Bend Shower",
    size: "7 Inch Arm",
    image: image(3),
    specs: [
      { label: "Shower Head Type", value: "Cascading Waterfall" },
      { label: "Packaging Type", value: "Box Packing" },
      { label: "I Deal In", value: "New Only" },
      { label: "Installation Type", value: "Wall Mounted" },
      { label: "Quantity Per Pack", value: "2 Pcs." },
      { label: "Shower Head Shape", value: "Circular" },
      { label: "Color", value: "SILVER" },
      { label: "Arm", value: "7 Inch" },
      { label: "Lighting", value: "Yes" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Material", value: "Brass" },
    ],
    packing: "Single packing of 2 piece",
    description: [
      "Package Contains: 1 Set of Round Bathroom Shower with 7 inch Brass Shower Arm",
      "This overhead shower is made under stringent quality norms to provide top-quality products for its users. It is chrome plated that offers an impeccable surface finish to it.",
      "Both shower head & shower arm have leak proof structure, rain spray pattern, high glossy mirror polish chrome",
      "Elegant finish, smooth rain like water flow, stunning & shimmering , Anti-corrosive, easy to clean & easy to install",
      "Beautiful ergonomical design made from quality material for superior looks and prolonged durability",
    ],
  },
  {
    id: 72,
    range: "ROYAL",
    name: "PRC C.P. Bend Shower - (king King)",
    cardName: "King King Bend Shower",
    size: "7 Inch Arm",
    image: image(4),
    specs: [
      { label: "Quantity Per Pack", value: "2 Pcs." },
      { label: "Arm", value: "7 Inch" },
      { label: "Lighting", value: "Yes" },
      { label: "Installation Type", value: "Wall Mounted" },
      { label: "Material", value: "ABS HEAD" },
      { label: "I Deal In", value: "New Only" },
      { label: "Packaging Type", value: "Box Packing" },
      { label: "Shower Head Shape", value: "Circular" },
      { label: "Color", value: "SILVER" },
      { label: "Shower Head Type", value: "Cascading Waterfall" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    packing: "Single packing of 2piece",
    description: [
      "Package Contains: 1 Set of Round Bathroom Shower with 7 inch Brass Shower Arm",
      "This overhead shower is made under stringent quality norms to provide top-quality products for its users. It is chrome plated that offers an impeccable surface finish to it.",
      "Both shower head & shower arm have leak proof structure, rain spray pattern, high glossy mirror polish chrome",
      "Elegant finish, smooth rain like water flow, stunning & shimmering , Anti-corrosive, easy to clean & easy to install",
      "Beautiful ergonomical design made from quality material for superior looks and prolonged durability",
    ],
  },
];
