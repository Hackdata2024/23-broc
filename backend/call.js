const { Web3 } = require("web3");

// Loading the contract ABI
// (the results of a previous compilation step)
const fs = require("fs");
const { abi } = JSON.parse(fs.readFileSync("PrescriptionContract.json"));

function contract_init(CONTRACT_ADDRESS) {
  // Configuring the connection to an Ethereum node
  const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`
    )
  );
  
  // Creating a signing account from a private key
  const signer = web3.eth.accounts.privateKeyToAccount(
    "0x" + process.env.SIGNER_PRIVATE_KEY
  );
  web3.eth.accounts.wallet.add(signer);
  
  // Creating a Contract instance
  const contract = new web3.eth.Contract(
    abi,
    CONTRACT_ADDRESS
  );

  return contract;
}

async function RefillCount(x) {
  const updatedRefillCount = await contract_init(x).methods.refillCount().call();
  return updatedRefillCount;
}
async function LimitCount(x) {
  const limitCount = await contract_init(x).methods.limitCount().call();
  return limitCount;
}

async function IdentityHash(x) {
  const identityHash = await contract_init(x).methods.identityHash().call();
  return identityHash;
}
async function PrescriptionHash(x) {
  const prescriptionHash = await contract_init(x).methods.prescriptionHash().call();
  return prescriptionHash;
}
module.exports = {
  RefillCount,
  LimitCount,
  IdentityHash,
  PrescriptionHash
};

require("dotenv").config();
