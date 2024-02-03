const {
  RefillCount,
  LimitCount,
  IdentityHash,
  PrescriptionHash,
} = require("./call.js");
const { DeployContract } = require("./deploy.js");

const crypto = require("crypto");

const { createHash } = require("crypto");
async function main() {
  const hash1 = "0x" + generateRandomSHA256Hash();
  const hash2 = "0x" + generateRandomSHA256Hash();
  const x = await DeployContract(hash1, hash2, 12);
  console.log(x);
  let temp = await RefillCount(x);
  console.log(temp);
  temp = await LimitCount(x);
  console.log(temp);
  temp = await IdentityHash(x);
  console.log(temp);
  temp = await PrescriptionHash(x);
  console.log(temp);
}

function generateRandomSHA256Hash() {
  const randomData = Math.random().toString(36).substring(2, 15);

  const sha256Hash = crypto
    .createHash("sha256")
    .update(randomData)
    .digest("hex");

  return sha256Hash;
}
main();
