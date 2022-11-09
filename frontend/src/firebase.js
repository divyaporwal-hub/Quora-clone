// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1InF5X0d7kRA36q8H-EZNTrhl5_hV3FI",
  authDomain: "quora-clone-mern-d283b.firebaseapp.com",
  projectId: "quora-clone-mern-d283b",
  storageBucket: "quora-clone-mern-d283b.appspot.com",
  messagingSenderId: "85136442986",
  appId: "1:85136442986:web:d4f78844bf33191ea82c13",
  measurementId: "G-74YP9CPMQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// const analytics = getAnalytics(app);