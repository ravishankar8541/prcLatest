export type CpHealthFaucetSpec = {
  label: string;
  value: string;
};

export type CpHealthFaucetProduct = {
  id: number;
  range: "ROYAL" | "SILIK";
  group: "SET" | "GUN";
  name: string;
  cardName: string;
  size: string;
  image: string;
  specs: CpHealthFaucetSpec[];
  packing?: string;
  description: string[];
};

const image = (id: number) => `/cp-health-faucets/${String(id).padStart(2, "0")}.jpg`;

export const cpHealthFaucetProducts: CpHealthFaucetProduct[] = [
  {
    id: 73,
    range: "ROYAL",
    group: "SET",
    name: "PRC C.P. Health Faucet Set - Damaru - Royal",
    cardName: "Damaru Health Faucet Set",
    size: "1.5 Meter Hose",
    image: image(1),
    specs: [
      { label: "Material", value: "Brass" },
      { label: "Color", value: "Silver" },
      { label: "Mount Type", value: "Wall Mounted" },
      { label: "Finish", value: "Chrome" },
      { label: "Packaging Type", value: "Single Piece Box Packing" },
      { label: "Corrosion Resistance", value: "Yes" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    packing: "Single packing of 1 piece",
    description: [
      "CP Brass Health Faucet Complete with Stretchable Connection Pipe 1.5 Meter Stainless Steel Braided Rubber Hose",
    ],
  },
  {
    id: 74,
    range: "ROYAL",
    group: "SET",
    name: "PRC C.P. Health Faucet Set - Boxer - Royal",
    cardName: "Boxer Health Faucet Set",
    size: "1.5 Meter Hose",
    image: image(2),
    specs: [
      { label: "Pattern", value: "Designer" },
      { label: "Packaging Type", value: "Single Piece Box Packing" },
      { label: "Color", value: "Silver" },
      { label: "Mount Type", value: "Wall Mounted" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Material", value: "Brass" },
      { label: "Finish", value: "Chrome" },
      { label: "Corrosion Resistance", value: "Yes" },
    ],
    packing: "Single packing of 1 piece",
    description: [
      "CP Brass Health Faucet Complete with Stretchable Connection Pipe 1.5 Meter Stainless Steel Braided Rubber Hose",
    ],
  },
  {
    id: 75,
    range: "ROYAL",
    group: "SET",
    name: "PRC C.P. Health Faucet Set - Pencil - Royal",
    cardName: "Pencil Health Faucet Set",
    size: "1.5 Meter Hose",
    image: image(3),
    specs: [
      { label: "Material", value: "Brass" },
      { label: "Mount Type", value: "Wall Mounted" },
      { label: "Finish", value: "Chrome" },
      { label: "Pattern", value: "Designer" },
      { label: "Color", value: "Silver" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Packaging Type", value: "Single Piece Box Packing" },
      { label: "Corrosion Resistance", value: "Yes" },
    ],
    packing: "Single packing of 1 piece",
    description: [
      "CP Brass Health Faucet Complete with Stretchable Connection Pipe 1.5 Meter Stainless Steel Braided Rubber Hose",
    ],
  },
  {
    id: 76,
    range: "ROYAL",
    group: "SET",
    name: "PRC C.P. Health Faucet Set - Mini-viza - Royal",
    cardName: "Mini-Viza Health Faucet Set",
    size: "1.5 Meter Hose",
    image: image(4),
    specs: [
      { label: "Finish", value: "Chrome" },
      { label: "Pattern", value: "Designer" },
      { label: "Packaging Type", value: "Single Piece Box Packing" },
      { label: "Corrosion Resistance", value: "Yes" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Material", value: "Brass" },
      { label: "Color", value: "Silver" },
    ],
    packing: "Single packing of 1 piece",
    description: [
      "CP Brass Health Faucet Complete with Stretchable Connection Pipe 1.5 Meter Stainless Steel Braided Rubber Hose",
    ],
  },
  {
    id: 77,
    range: "ROYAL",
    group: "GUN",
    name: "PRC C.P. Health Faucet Gun Mini Viza",
    cardName: "Mini Viza Health Faucet Gun",
    size: "Health Faucet Gun",
    image: image(5),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 78,
    range: "ROYAL",
    group: "GUN",
    name: "PRC C.P. Health Faucet Gun Pencil",
    cardName: "Pencil Health Faucet Gun",
    size: "Health Faucet Gun",
    image: image(6),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 79,
    range: "ROYAL",
    group: "GUN",
    name: "PRC C.P. Health Faucet Gun Boxer",
    cardName: "Boxer Health Faucet Gun",
    size: "Health Faucet Gun",
    image: image(7),
    specs: [

    ],
    description: [

    ],
  },
  {
    id: 80,
    range: "ROYAL",
    group: "GUN",
    name: "PRC C.P. Health Faucet Gun Damru",
    cardName: "Damru Health Faucet Gun",
    size: "Health Faucet Gun",
    image: image(8),
    specs: [

    ],
    description: [

    ],
  },
];
