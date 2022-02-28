const config = require("../config/config");
const admin = require("firebase-admin");

const serviceAccount = require(`../config/${config.FIREBASE.ADMIN.SERVICE_ACCOUNT_JSON_FILE}.json`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = {
  admin,
  db,
};
