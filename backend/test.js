const crypto = require("crypto");

const { createHash } = require("crypto");
function generateRandomSHA256Hash(randomData) {
  const sha256Hash = crypto
    .createHash("sha256")
    .update(randomData)
    .digest("hex");

  return sha256Hash;
}
temp = {
  p_name: "adads",
  d_name: "asdasd",
  gender: "kmkkm",
  place: "123",
  age: "321132",
  weight: "3992",
  date: "2024-02-23T01:51",
  dosage: "asdsad",
};
console.log(generateRandomSHA256Hash(JSON.stringify(temp)))