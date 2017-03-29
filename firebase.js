/* eslint-diable no-console */

const firebase = require("firebase");

// The following initializes Firebase:
    // TODO: Replace code snippet
const config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

