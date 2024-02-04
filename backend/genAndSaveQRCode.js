// Import the required libraries
const QRCode = require("qrcode");
const fs = require("fs");

// Function to generate QR code from a URL and save it as a PNG file
async function generateAndSaveQRCode(url) {
  try {
    // Generate QR code from the URL
    const qrCodeDataURL = await QRCode.toDataURL(url);

    // Convert the data URL to a buffer
    const data = qrCodeDataURL.replace(/^data:image\/png;base64,/, "");

    return data;
  } catch (error) {
    throw new Error("Error generating and saving QR code: " + error.message);
  }
}

module.exports = {
  generateAndSaveQRCode,
};
