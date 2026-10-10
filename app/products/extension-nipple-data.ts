export type ExtensionNippleSpec = {
  label: string;
  value: string;
};

export type ExtensionNippleProduct = {
  id: number;
  range: "ROYAL" | "SILIK";
  name: string;
  cardName: string;
  size: string;
  image: string;
  specs: ExtensionNippleSpec[];
  packing?: string;
  description: string[];
};

const image = (id: number) => `/extension-nipples/${String(id).padStart(2, "0")}.jpg`;

export const extensionNippleProducts: ExtensionNippleProduct[] = [
  {
    id: 28,
    range: "ROYAL",
    name: "PRC C.P. Extension Nipple 1 Inch - Royal",
    cardName: "1 Inch Extension Nipple",
    size: "1 Inch",
    image: image(1),
    specs: [
      { label: "Quantity Per Pack", value: "1 Pcs." },
      { label: "Length", value: "1 inch" },
      { label: "Color", value: "SILVER" },
      { label: "I Deal In", value: "New Only" },
      { label: "Material", value: "BRASS" },
      { label: "Size", value: "1 inch" },
      { label: "End Connection Type", value: "Threaded" },
      { label: "Packaging Type", value: "A Box of 36 Pcs." },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Usage/Application", value: "Plumbing Pipe" }
    ],
    packing: "Single packing of 3 piece and master packing of 36 pieces",
    description: [
    "Item dimension: 1 Inch",
    "MADE IN INDIA, Package Contents:36 Piece Extension Nipple",
    "Best Quality Highly Polished Chrome",
    "Extention Nipple use to level the size of bathroom or extend the taps"
    ],
  },
  {
    id: 29,
    range: "ROYAL",
    name: "PRC C.P. Extension Nipple 1.5 Inch - Royal",
    cardName: "1.5 Inch Extension Nipple",
    size: "1.5 Inch",
    image: image(2),
    specs: [
      { label: "Usage/Application", value: "Plumbing Pipe" },
      { label: "Length", value: "1.5 inch" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "I Deal In", value: "New Only" },
      { label: "Corrosion Resistance", value: "Yes" },
      { label: "Color", value: "SILVER" },
      { label: "Quantity Per Pack", value: "1 Pcs." },
      { label: "Size", value: "1.5 inch" },
      { label: "Material", value: "BRASS" },
      { label: "Packaging Type", value: "A Box of 24 Pcs." },
      { label: "End Connection Type", value: "Threaded" }
    ],
    packing: "Single packing of 2 piece and master packing of 24 pieces",
    description: [
    "Item dimension: 1.5 Inch",
    "MADE IN INDIA, Package Contents:24 Piece Extension Nipple",
    "Best Quality Highly Polished Chrome",
    "Extention Nipple use to level the size of bathroom or extend the taps"
    ],
  },
  {
    id: 30,
    range: "ROYAL",
    name: "PRC C.P. Extension Nipple 2 Inch - Royal",
    cardName: "2 Inch Extension Nipple",
    size: "2 Inch",
    image: image(3),
    specs: [
      { label: "Size", value: "2 inch" },
      { label: "Material", value: "BRASS" },
      { label: "End Connection Type", value: "Threaded" },
      { label: "Length", value: "2 inch" },
      { label: "Color", value: "SILVER" },
      { label: "Corrosion Resistance", value: "Yes" },
      { label: "I Deal In", value: "New Only" },
      { label: "Usage/Application", value: "Plumbing Pipe" },
      { label: "Quantity Per Pack", value: "1 Pcs." },
      { label: "Nipple Type", value: "Full Allen Key" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Packaging Type", value: "A Box of 12 Pcs." }
    ],
    packing: "Single packing of 1 piece and master packing of 12 pieces",
    description: [
    "Item dimension: 2 Inch",
    "MADE IN INDIA, Package Contents:12 Piece Extension Nipple",
    "Best Quality Highly Polished Chrome",
    "Extention Nipple use to level the size of bathroom or extend the taps"
    ],
  },
  {
    id: 31,
    range: "ROYAL",
    name: "PRC C.P. Extension Nipple 2.5 Inch - Royal",
    cardName: "2.5 Inch Extension Nipple",
    size: "2.5 Inch",
    image: image(4),
    specs: [
      { label: "End Connection Type", value: "Threaded" },
      { label: "Color", value: "SILVER" },
      { label: "I Deal In", value: "New Only" },
      { label: "Corrosion Resistance", value: "Yes" },
      { label: "Size", value: "2.5 inch" },
      { label: "Length", value: "2.5 inch" },
      { label: "Quantity Per Pack", value: "1 Pcs." },
      { label: "Material", value: "BRASS" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Usage/Application", value: "Plumbing Pipe" },
      { label: "Packaging Type", value: "A Box of 12 Pcs." }
    ],
    packing: "Single packing of 1 piece and master packing of 12 pieces",
    description: [
    "Item dimension: 2.5 Inch",
    "MADE IN INDIA, Package Contents:12 Piece Extension Nipple",
    "Best Quality Highly Polished Chrome",
    "Extention Nipple use to level the size of bathroom or extend the taps"
    ],
  },
  {
    id: 32,
    range: "ROYAL",
    name: "PRC C.P. Extension Nipple 3 Inch - Royal",
    cardName: "3 Inch Extension Nipple",
    size: "3 Inch",
    image: image(5),
    specs: [
      { label: "Material", value: "BRASS" },
      { label: "Corrosion Resistance", value: "Yes" },
      { label: "Color", value: "SILVER" },
      { label: "Nipple Type", value: "Full Allen Key" },
      { label: "Size", value: "3 inch" },
      { label: "Usage/Application", value: "Plumbing Pipe" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "End Connection Type", value: "Threaded" },
      { label: "Packaging Type", value: "A Box of 12 Pcs." },
      { label: "Length", value: "3 inch" },
      { label: "Quantity Per Pack", value: "1 Pcs." },
      { label: "I Deal In", value: "New Only" }
    ],
    packing: "Single packing of 1 piece and master packing of 12 pieces",
    description: [
    "Item dimension: 3 Inch",
    "MADE IN INDIA, Package Contents:12 Piece Extension Nipple",
    "Best Quality Highly Polished Chrome",
    "Extention Nipple use to level the size of bathroom or extend the taps"
    ],
  },
  {
    id: 33,
    range: "SILIK",
    name: "PRC C.P. Extension Nipple 1 Inch - Silik",
    cardName: "1 Inch Extension Nipple",
    size: "1 Inch",
    image: image(6),
    specs: [
      { label: "Country of Origin", value: "Made in India" },
      { label: "Usage/Application", value: "Plumbing Pipe" },
      { label: "Packaging Type", value: "A Box of 36 Pcs." },
      { label: "Size", value: "1 inch" },
      { label: "Quantity Per Pack", value: "3 Pcs." },
      { label: "Corrosion Resistance", value: "Yes" },
      { label: "Material", value: "BRASS" },
      { label: "End Connection Type", value: "Threaded" },
      { label: "Color", value: "SILVER" },
      { label: "Nipple Type", value: "Full Allen Key" },
      { label: "I Deal In", value: "New Only" }
    ],
    packing: "Single packing of 3 piece and master packing of 36 pieces",
    description: [
    "Item dimension: 1 Inch",
    "MADE IN INDIA, Package Contents:1 Piece Extension Nipple",
    "Best Quality Highly Polished Chrome",
    "Extention Nipple use to level the size of bathroom or extend the taps"
    ],
  },
  {
    id: 34,
    range: "SILIK",
    name: "PRC C.P. Extension Nipple 1.5 Inch - Silik",
    cardName: "1.5 Inch Extension Nipple",
    size: "1.5 Inch",
    image: image(7),
    specs: [
      { label: "Size", value: "1.5 inch" },
      { label: "Nipple Type", value: "Full Allen Key" },
      { label: "Quantity Per Pack", value: "2 Pcs." },
      { label: "Corrosion Resistance", value: "Yes" },
      { label: "Packaging Type", value: "A Box of 24 Pcs." },
      { label: "Country of Origin", value: "Made in India" },
      { label: "I Deal In", value: "New Only" },
      { label: "Material", value: "BRASS" },
      { label: "End Connection Type", value: "Threaded" },
      { label: "Usage/Application", value: "Plumbing Pipe" },
      { label: "Length", value: "1.5 inch" },
      { label: "Color", value: "SILVER" }
    ],
    packing: "Single packing of 2 piece and master packing of 24 pieces",
    description: [
    "Item dimension: 1.5 Inch",
    "MADE IN INDIA, Package Contents:24 Piece Extension Nipple",
    "Best Quality Highly Polished Chrome",
    "Extention Nipple use to level the size of bathroom or extend the taps"
    ],
  },
  {
    id: 35,
    range: "SILIK",
    name: "PRC C.P. Extension Nipple 2 Inch - Silik",
    cardName: "2 Inch Extension Nipple",
    size: "2 Inch",
    image: image(8),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 36,
    range: "SILIK",
    name: "PRC C.P. Extension Nipple 2.5 Inch - Silik",
    cardName: "2.5 Inch Extension Nipple",
    size: "2.5 Inch",
    image: image(9),
    specs: [
      { label: "Nipple Type", value: "Full Allen Key" },
      { label: "Length", value: "2.5 inch" },
      { label: "Corrosion Resistance", value: "Yes" },
      { label: "Size", value: "2.5 inch" },
      { label: "Material", value: "BRASS" },
      { label: "Color", value: "SILVER" },
      { label: "I Deal In", value: "New Only" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "End Connection Type", value: "Threaded" },
      { label: "Packaging Type", value: "A Box of 12 Pcs." },
      { label: "Usage/Application", value: "Plumbing Pipe" },
      { label: "Quantity Per Pack", value: "1 Pcs." }
    ],
    packing: "Single packing of 1 piece and master packing of 12 pieces",
    description: [
    "Item dimension: 2.5 Inch",
    "MADE IN INDIA, Package Contents:12 Piece Extension Nipple",
    "Best Quality Highly Polished Chrome",
    "Extention Nipple use to level the size of bathroom or extend the taps"
    ],
  },
  {
    id: 37,
    range: "SILIK",
    name: "PRC C.P. Extension Nipple 3 Inch - Silik",
    cardName: "3 Inch Extension Nipple",
    size: "3 Inch",
    image: image(10),
    specs: [
      { label: "Country of Origin", value: "Made in India" },
      { label: "Size", value: "3 inch" },
      { label: "Material", value: "BRASS" },
      { label: "Usage/Application", value: "Plumbing Pipe" },
      { label: "Length", value: "3 inch" },
      { label: "End Connection Type", value: "Threaded" },
      { label: "Color", value: "SILVER" },
      { label: "Quantity Per Pack", value: "1 Pcs." },
      { label: "Nipple Type", value: "Full Allen Key" },
      { label: "I Deal In", value: "New Only" },
      { label: "Packaging Type", value: "A Box of 12 Pcs." },
      { label: "Corrosion Resistance", value: "Yes" }
    ],
    packing: "Single packing of 1 piece and master packing of 12 pieces",
    description: [
    "Item dimension: 3 Inch",
    "MADE IN INDIA, Package Contents:12 Piece Extension Nipple",
    "Best Quality Highly Polished Chrome",
    "Extention Nipple use to level the size of bathroom or extend the taps"
    ],
  },
  {
    id: 38,
    range: "SILIK",
    name: "PRC S.s Extension Hex Nipple 1 Inch - Silik",
    cardName: "1 Inch S.S. Hex Nipple",
    size: "1 Inch",
    image: image(11),
    specs: [
      { label: "Country of Origin", value: "Made in India" },
      { label: "Size", value: "1 inch" },
      { label: "End Connection Type", value: "Threaded" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Usage/Application", value: "Plumbing Pipe" },
      { label: "Color", value: "Silver" }
    ],
    description: [
    "Item dimension: 1 Inch",
    "MADE IN INDIA, Package Contents:1 Piece Extension Nipple",
    "Best Quality Highly Polished Chrome",
    "Extention Nipple use to level the size of bathroom or extend the taps"
    ],
  },
  {
    id: 39,
    range: "SILIK",
    name: "PRC C.P. Washing Machine Nipple 1 Inch - Silik",
    cardName: "1 Inch Washing Machine Nipple",
    size: "1 Inch",
    image: image(12),
    specs: [
      { label: "Color", value: "Silver" },
      { label: "Country of Origin", value: "Made in India" }
    ],
    packing: "Single packing of 3 piece and master packing of 24 pieces",
    description: [
    "Item dimension: 1 Inch",
    "MADE IN INDIA, Package Contents:36 Piece Extension Nipple",
    "Best Quality Highly Polished Chrome",
    "Extention Nipple use to level the size of bathroom or extend the taps"
    ],
  },
  {
    id: 40,
    range: "SILIK",
    name: "PRC C.P. Nozzal (male Female)",
    cardName: "C.P. Nozzal (Male / Female)",
    size: "Male / Female",
    image: image(13),
    specs: [

    ],
    description: [

    ],
  },
];
