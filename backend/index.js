const {
  RefillCount,
  LimitCount,
  IdentityHash,
  PrescriptionHash,
} = require("./call.js");
const { DeployContract } = require("./deploy.js");

const crypto = require("crypto");

function generateRandomSHA256Hash(randomData) {
  const sha256Hash = crypto
    .createHash("sha256")
    .update(randomData)
    .digest("hex");

  return sha256Hash;
}

const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 6000;

const client = new MongoClient(process.env.MONGO_URI);

app.use(express.json());

app.post("/api/formsubmit", async (req, res) => {
  if (!req.body) {
    res.status(400).send("Form sent had invalid data");
    return;
  }
  const pres_hash = "0x" + generateRandomSHA256Hash(JSON.stringify(req.body));
  let id_hash = crypto.randomBytes(32);
  id_hash = "0x"+ byteToHex(id_hash);
  const contract_address = await DeployContract(id_hash, pres_hash, 2);
  // console.log(
  //   `Smart contract deployed att address ${contract_address} with id ${id_hash} and pres ${pres_hash}`
  // );

  const db = await client.db("Main");
  const prescription_store = db.collection("Prescription-Data");
  const address_store = db.collection("Blockchain-addresses");
  
  delete req.body.p_name;
  delete req.body.d_name;
  
  await prescription_store.insertOne({
    IdentityHash: id_hash,
    PrescriptionData: req.body,
    PrescriptionHash: pres_hash,
  });
  await address_store.insertOne({
    IdentityHash: id_hash,
    ContractAddress: contract_address,
  });
  res.send(contract_address);
});

app.post("/api/verify", async(req, res)=>{
  if(!req.body){
    res.status(400).send("Bad request");
  }
  const db = await client.db("Main");
  const address_store = db.collection("Blockchain-addresses");
  const x = await address_store.findOne({IdentityHash: req.body.IdentityHash});
  if(!x){
    res.status(400).send("Prescription is invalid/does not exist");
    return;
  }
  const hash_from_blockchain = await PrescriptionHash(x.ContractAddress);
  const pres_hash_store = db.collection("Prescription-Data");
  const db_data = await pres_hash_store.findOne({IdentityHash: req.body.IdentityHash});
  if(hash_from_blockchain === db_data.PrescriptionHash){
    res.status(200).json(db_data.PrescriptionData);
  }else{
    res.status(400).send("Prescription is invalid");
  }
})

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});

const byteToHex = (byte) => {
  const key = '0123456789abcdef'
  let bytes = new Uint8Array(byte)
  let newHex = ''
  let currentChar = 0
  for (let i=0; i<bytes.length; i++) { // Go over each 8-bit byte
    currentChar = (bytes[i] >> 4)      // First 4-bits for first hex char
    newHex += key[currentChar]         // Add first hex char to string
    currentChar = (bytes[i] & 15)      // Erase first 4-bits, get last 4-bits for second hex char
    newHex += key[currentChar]         // Add second hex char to string
  }
  return newHex
}