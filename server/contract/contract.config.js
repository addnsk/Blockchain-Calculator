export const url =
  "https://ropsten.infura.io/v3/5e39310275df4bbd8f048bb4bb9c8776";
export const address = "0x93FFC37Ff0e05fcE7D84eb279F6693DfEF98B978";
export const abi = [
  {
    inputs: [
      { internalType: "int256", name: "firstValue", type: "int256" },
      { internalType: "int256", name: "secondValue", type: "int256" },
    ],
    name: "addition",
    outputs: [{ internalType: "int256", name: "", type: "int256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "int256", name: "firstValue", type: "int256" },
      { internalType: "int256", name: "secondValue", type: "int256" },
    ],
    name: "division",
    outputs: [{ internalType: "int256", name: "", type: "int256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "int256", name: "firstValue", type: "int256" },
      { internalType: "int256", name: "secondValue", type: "int256" },
    ],
    name: "multiply",
    outputs: [{ internalType: "int256", name: "", type: "int256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "int256", name: "firstValue", type: "int256" },
      { internalType: "int256", name: "secondValue", type: "int256" },
    ],
    name: "subtract",
    outputs: [{ internalType: "int256", name: "", type: "int256" }],
    stateMutability: "pure",
    type: "function",
  },
];
