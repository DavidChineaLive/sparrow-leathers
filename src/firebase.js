import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "sparrow-leathers.firebaseapp.com",
  projectId: "sparrow-leathers",
  storageBucket: "sparrow-leathers.firebasestorage.app",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_KEY",
  measurementId: "MEASUREMENT_ID"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { firebaseConfig };
