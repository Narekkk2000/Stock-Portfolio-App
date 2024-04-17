import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDBM8TuACy-NRx0Rcp0QB_zEmzTrhWrrRo",
  authDomain: "stock-market-portfolio-bff2a.firebaseapp.com",
  databaseURL:
    "https://stock-market-portfolio-bff2a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "stock-market-portfolio-bff2a",
  storageBucket: "stock-market-portfolio-bff2a.appspot.com",
  messagingSenderId: "787215892589",
  appId: "1:787215892589:web:d931c673b9623bfce03f64",
  measurementId: "G-KLQPSGDCRV",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
