const { Web3 } = require("web3");

// Loading the contract ABI and Bytecode
// (the results of a previous compilation step)
const fs = require("fs");
const { abi, bytecode } = JSON.parse(
  fs.readFileSync("PrescriptionContract.json")
);

async function DeployContract(identityHashValue, prescriptionHashValue, limitCountValue) {

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

  // Using the signing account to deploy the contract
  const contract = new web3.eth.Contract(abi);
  const deployTx = contract.deploy({
    data: bytecode,
    arguments: [identityHashValue, prescriptionHashValue, limitCountValue], // Provide constructor arguments here
  });

  const deployedContract = await deployTx.send({
    from: signer.address
  });
  // The contract is now deployed on chain!
  return deployedContract.options.address;
}

module.exports = {
  DeployContract,
};
require("dotenv").config();
