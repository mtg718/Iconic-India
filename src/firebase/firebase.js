import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "iconic-india.firebaseapp.com",
  projectId: "iconic-india",
  storageBucket: "iconic-india.appspot.com",
  messagingSenderId: "664443843698",
  appId: "1:664443843698:web:6ac14459412a4ec76dfeeb"
};

console.log("API Key:", process.env.REACT_APP_API_KEY);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const sitesRef = collection(db, "sites");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
