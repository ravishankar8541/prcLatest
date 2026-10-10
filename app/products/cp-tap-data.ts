export type CpTapSpec = {
  label: string;
  value: string;
};

export type CpTapProduct = {
  id: number;
  collection: "STYLE" | "SIGMA";
  name: string;
  cardName: string;
  image: string;
  specs: CpTapSpec[];
  packing?: string;
  description: string[];
};

const image = (id: number) => `/cp-taps/${String(id).padStart(2, "0")}.jpg`;

export const cpTapProducts: CpTapProduct[] = [
  {
    id: 41,
    collection: "STYLE",
    name: "PRC C.P. Bib Cock - In Style Collection",
    cardName: "Bib Cock",
    image: image(1),
    specs: [
      { label: "Use For", value: "Bathroom" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Usage/Application", value: "Bathroom Fitting" },
      { label: "Quantity Per Box", value: "2 Pcs." },
    ],
    packing: "Packing of 2 pieces",
    description: [
      "Product Comes With Wall Flange & Water Saving Foam Flow aerator Which Ensure Smooth And Streamlined Flow of Water",
      "Casting: 100% Virgin Brass Ingots Certified For 63% Copper to Ensure Flawless Casting",
      "Chrome Plating: Robotic Electroplating For Everlasting lustrous Shine",
      "Quarter Turn Easy Touch Working Function",
      "7 Years Cartridge Replacement Guarantee",
    ],
  },
  {
    id: 42,
    collection: "STYLE",
    name: "PRC C.P. Long Nose Cock - In Style Collection",
    cardName: "Long Nose Cock",
    image: image(2),
    specs: [
      { label: "Material", value: "Brass" },
      { label: "Color", value: "Silver" },
      { label: "Coating", value: "Chrome" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Series", value: "ROYAL" },
      { label: "Usage/Application", value: "Bathroom Fitting" },
    ],
    packing: "Packing of 2 pieces",
    description: [
      "Product Comes With Wall Flange & Water Saving Foam Flow aerator Which Ensure Smooth And Streamlined Flow of Water",
      "Casting: 100% Virgin Brass Ingots Certified For 63% Copper to Ensure Flawless Casting",
      "Chrome Plating: Robotic Electroplating For Everlasting lustrous Shine",
      "Quarter Turn Easy Touch Working Function",
      "7 Years Cartridge Replacement Guarantee",
    ],
  },
  {
    id: 43,
    collection: "STYLE",
    name: "PRC C.P. Pillar Cock - In Style Collection",
    cardName: "Pillar Cock",
    image: image(3),
    specs: [
      { label: "Usage/Application", value: "Bathroom Fitting" },
      { label: "Material", value: "Brass" },
      { label: "Color", value: "SILVER" },
      { label: "Coating", value: "Chrome" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Series", value: "ROYAL" },
    ],
    packing: "Packing of 2 pieces",
    description: [
      "Product Comes With Wall Flange & Water Saving Foam Flow aerator Which Ensure Smooth And Streamlined Flow of Water",
      "Casting: 100% Virgin Brass Ingots Certified For 63% Copper to Ensure Flawless Casting",
      "Chrome Plating: Robotic Electroplating For Everlasting lustrous Shine",
      "Quarter Turn Easy Touch Working Function",
      "7 Years Cartridge Replacement Guarantee",
    ],
  },
  {
    id: 44,
    collection: "STYLE",
    name: "PRC C.P. Angle Cock (Style)",
    cardName: "Angle Cock",
    image: image(4),
    specs: [
      { label: "Material", value: "Brass" },
      { label: "Color", value: "SILVER" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Usage/Application", value: "Bathroom Fitting" },
      { label: "Type", value: "Angle Cock" },
    ],
    packing: "Packing of 2 pieces",
    description: [
      "Product Comes With Wall Flange & Water Saving Foam Flow aerator Which Ensure Smooth And Streamlined Flow of Water",
      "Casting: 100% Virgin Brass Ingots Certified For 63% Copper to Ensure Flawless Casting",
      "Chrome Plating: Robotic Electroplating For Everlasting lustrous Shine",
      "Quarter Turn Easy Touch Working Function",
      "7 Years Cartridge Replacement Guarantee",
    ],
  },
  {
    id: 45,
    collection: "STYLE",
    name: "PRC C.P. Concealed 3/4 Style",
    cardName: "Concealed 3/4",
    image: image(5),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 46,
    collection: "STYLE",
    name: "PRC C.P. Concealed 1/2 Style",
    cardName: "Concealed 1/2",
    image: image(6),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 47,
    collection: "STYLE",
    name: "PRC C.P. 2 In 1 Angle Cock",
    cardName: "2 In 1 Angle Cock",
    image: image(7),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 48,
    collection: "STYLE",
    name: "PRC C.P. 2 In 1 Bib Cock Style",
    cardName: "2 In 1 Bib Cock",
    image: image(8),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 49,
    collection: "STYLE",
    name: "PRC C.P. Swan Neck (style)",
    cardName: "Swan Neck",
    image: image(9),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 50,
    collection: "STYLE",
    name: "PRC C.P. Sink Cock (style)",
    cardName: "Sink Cock",
    image: image(10),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 51,
    collection: "STYLE",
    name: "PRC C.P. Sink Mixer (style)",
    cardName: "Sink Mixer",
    image: image(11),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 52,
    collection: "STYLE",
    name: "PRC C.P. Basin Mixer Center Hole (style)",
    cardName: "Basin Mixer Center Hole",
    image: image(12),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 53,
    collection: "STYLE",
    name: "PRC C.P. 2 In 1 Wall Mixer Wb Style (style)",
    cardName: "2 In 1 Wall Mixer WB",
    image: image(13),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 54,
    collection: "STYLE",
    name: "PRC C.P. 3 In 1 Wall Mixer Wb (style)",
    cardName: "3 In 1 Wall Mixer WB",
    image: image(14),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 55,
    collection: "SIGMA",
    name: "PRC C.P. Bib Cock - In Sigma Collection",
    cardName: "Bib Cock",
    image: image(15),
    specs: [
      { label: "Usage/Application", value: "Bathroom Fitting" },
      { label: "Quantity Per Box", value: "2 Pcs." },
      { label: "Use For", value: "Bathroom" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    packing: "Packing of 2 pieces",
    description: [
      "Product Comes With Wall Flange & Water Saving Foam Flow aerator Which Ensure Smooth And Streamlined Flow of Water",
      "Casting: 100% Virgin Brass Ingots Certified For 63% Copper to Ensure Flawless Casting",
      "Chrome Plating: Robotic Electroplating For Everlasting lustrous Shine",
      "Quarter Turn Easy Touch Working Function",
      "7 Years Cartridge Replacement Guarantee",
    ],
  },
  {
    id: 56,
    collection: "SIGMA",
    name: "PRC C.P. Long Nose Cock - In Sigma Collection",
    cardName: "Long Nose Cock",
    image: image(16),
    specs: [
      { label: "Usage/Application", value: "Bathroom Fitting" },
      { label: "Material", value: "Brass" },
      { label: "Color", value: "Silver" },
      { label: "Coating", value: "Chrome" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Series", value: "ROYAL" },
    ],
    packing: "Packing of 2 pieces",
    description: [
      "Product Comes With Wall Flange & Water Saving Foam Flow aerator Which Ensure Smooth And Streamlined Flow of Water",
      "Casting: 100% Virgin Brass Ingots Certified For 63% Copper to Ensure Flawless Casting",
      "Chrome Plating: Robotic Electroplating For Everlasting lustrous Shine",
      "Quarter Turn Easy Touch Working Function",
      "7 Years Cartridge Replacement Guarantee",
    ],
  },
  {
    id: 57,
    collection: "SIGMA",
    name: "PRC C.P. Pillar Cock- In Sigma Collection",
    cardName: "Pillar Cock",
    image: image(17),
    specs: [
      { label: "Material", value: "Brass" },
      { label: "Usage/Application", value: "Bathroom Fitting" },
      { label: "Color", value: "SILVER" },
      { label: "Coating", value: "Chrome" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Series", value: "ROYAL" },
    ],
    packing: "Packing of 2 pieces",
    description: [
      "Product Comes With Wall Flange & Water Saving Foam Flow aerator Which Ensure Smooth And Streamlined Flow of Water",
      "Casting: 100% Virgin Brass Ingots Certified For 63% Copper to Ensure Flawless Casting",
      "Chrome Plating: Robotic Electroplating For Everlasting lustrous Shine",
      "Quarter Turn Easy Touch Working Function",
      "7 Years Cartridge Replacement Guarantee",
    ],
  },
  {
    id: 58,
    collection: "SIGMA",
    name: "PRC C.P. Angle Cock (sigma)",
    cardName: "Angle Cock",
    image: image(18),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 59,
    collection: "SIGMA",
    name: "PRC C.P. Concealed 3/4 Inch Sigma",
    cardName: "Concealed 3/4 Inch",
    image: image(19),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 60,
    collection: "SIGMA",
    name: "PRC C.P. Concealed 1/2 Inch Sigma",
    cardName: "Concealed 1/2 Inch",
    image: image(20),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 61,
    collection: "SIGMA",
    name: "PRC C.P. 2 In 1 Inch Angle Cock Sigma",
    cardName: "2 In 1 Inch Angle Cock",
    image: image(21),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 62,
    collection: "SIGMA",
    name: "PRC C.P. 2 In 1 Bib Cock Sigma",
    cardName: "2 In 1 Bib Cock",
    image: image(22),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 63,
    collection: "SIGMA",
    name: "PRC C.P. Swan Neck Sigma",
    cardName: "Swan Neck",
    image: image(23),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 64,
    collection: "SIGMA",
    name: "PRC C.P. Sink Cock Sigma",
    cardName: "Sink Cock",
    image: image(24),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 65,
    collection: "SIGMA",
    name: "PRC C.P. Sink Mixer Sigma",
    cardName: "Sink Mixer",
    image: image(25),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 66,
    collection: "SIGMA",
    name: "Basin Mixer Center Hole Sigma",
    cardName: "Basin Mixer Center Hole",
    image: image(26),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 67,
    collection: "SIGMA",
    name: "2 In 1 Wall Mixer Wb Sigma",
    cardName: "2 In 1 Wall Mixer WB",
    image: image(27),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 68,
    collection: "SIGMA",
    name: "3 In 1 Wall Mixer Wb Sigma",
    cardName: "3 In 1 Wall Mixer WB",
    image: image(28),
    specs: [

    ],
    description: [

    ],
  },
];
