const {
  RefillCount,
  LimitCount,
  IdentityHash,
  PrescriptionHash,
} = require("./call.js");
const { DeployContract } = require("./deploy.js");

const crypto = require("crypto");

const { createHash } = require("crypto");

function generateRandomSHA256Hash() {
  const randomData = Math.random().toString(36).substring(2, 15);

  const sha256Hash = crypto
    .createHash("sha256")
    .update(randomData)
    .digest("hex");

  return sha256Hash;
}

const {MongoClient} = require("mongodb");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 6000;

const client = new MongoClient(process.env.MONGO_URI);

app.use(express.json());

app.get("/", (req, res)=>{
  console.log("We are on buys");
})

app.post("/api/formsubmit", (req, res) => {
  console.log(JSON.stringify(req.body));
  res.send("Hello world");
});

app.listen(PORT, ()=>{
  console.log("Server started on port " + PORT);
})

