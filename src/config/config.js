module.exports = {
  FIREBASE: {
    CONFIG: {
      API_KEY: process.env.FIREBASE_API_KEY || "apikey",
      AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || "authdomain",
      PROJECT_ID: process.env.FIREBASE_PROJECT_ID || "projectid",
      STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET || "storagebucket",
      MESSAGING_SENDER_ID:
        process.env.FIREBASE_MESSAGING_SENDER_ID || "messagingsenderid",
      APP_ID: process.env.FIREBASE_APP_ID || "firebaseappid",
      MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID || "measurementid",
    },
  },
};
