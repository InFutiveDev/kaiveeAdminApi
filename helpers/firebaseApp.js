const { v4: uuidv4 } = require("uuid");
const { initializeApp, cert } = require("firebase-admin/app");
const { getStorage, deleteObject } = require("firebase-admin/storage");
const serviceAccount = require("./firebase.json");

// const handleFormData = () => {
initializeApp({
  credential: cert(serviceAccount),
});

const bucket = getStorage().bucket("gs://cityxray-61a3e.appspot.com");
// };
module.exports = { bucket };
