import firebase from 'firebase';

const firebaseConfig = {
 apiKey: "AIzaSyC6Yr3MApWPebSk28wkDBadgShCwJy7G2Y",
  authDomain: "wireless-buzzer-56697.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-56697-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-56697",
  storageBucket: "wireless-buzzer-56697.appspot.com",
  messagingSenderId: "758989387452",
  appId: "1:758989387452:web:741b0c741a0d90631002b9",
  measurementId: "G-DVE96EZKFL",
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
