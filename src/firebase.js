import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD7PQkjXYNU7n9w0r7y5lj6T7wGz8WOveE",
    authDomain: "react-pwa-notification-308e3.firebaseapp.com",
    projectId: "react-pwa-notification-308e3",
    storageBucket: "react-pwa-notification-308e3.appspot.com",
    messagingSenderId: "982202085764",
    appId: "1:982202085764:web:33a171a407deebd3666dd1",
    measurementId: "G-TFBYS174M9"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;