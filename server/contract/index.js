import Web3 from "web3";
import { abi, address, url } from "./contract.config";

let web3 = new Web3(new Web3.providers.HttpProvider(url));
const contract = new web3.eth.Contract(abi, address);

export const loadBlockchainData = async (firstValue, secondValue, method) => {
  try {
    const result = await contract.methods[method](
      firstValue,
      secondValue
    ).call();
    return result;
  } catch (e) {
    throw new Error("loadBlockchainData failed");
  }
};
