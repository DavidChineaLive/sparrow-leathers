import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_lInJMFZJH_oceocrvvAt1de5hPBILGs",
  authDomain: "sparrow-leathers.firebaseapp.com",
  projectId: "sparrow-leathers",
  storageBucket: "sparrow-leathers.firebasestorage.app",
  messagingSenderId: "418413201076",
  appId: "1:418413201076:web:8e6667e7bbede6cbf1b9e1",
  measurementId: "G-DGH2KV74YS"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { firebaseConfig };
