const config = require("../config/config");

const firebaseConfig = {
  apiKey: config.FIREBASE.CONFIG.API_KEY,
  authDomain: config.FIREBASE.CONFIG.AUTH_DOMAIN,
  projectId: config.FIREBASE.CONFIG.PROJECT_ID,
  storageBucket: config.FIREBASE.CONFIG.STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE.CONFIG.MESSAGING_SENDER_ID,
  appId: config.FIREBASE.CONFIG.APP_ID,
  measurementId: config.FIREBASE.CONFIG.MEASUREMENT_ID,
};
