import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, getDocs, getDoc, query, where} from "firebase/firestore/lite";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRoQbk6F0uZlmM5N9RopKoA2pOxGV2QlE",
  authDomain: "realtime-database-404f0.firebaseapp.com",
  databaseURL: "https://realtime-database-404f0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "realtime-database-404f0",
  storageBucket: "realtime-database-404f0.appspot.com",
  messagingSenderId: "682487367762",
  appId: "1:682487367762:web:33824d9fb7b4a21d0bf78b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef)
  return querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
}

export async function getVan(id) {
  const docRef = doc(db, 'vans', id)
  const vanSnapshot = await getDoc(docRef)
  return {
    ...vanSnapshot.data(),
    id: doc.id
  }
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where('hostId', '==', '123'))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
}

//Authentication
export async function loginUser(email, password) {
  const userCredentials = await signInWithEmailAndPassword(auth, email, password)
  console.log(userCredentials.user)
}

export async function register(email, password) {
  const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
  console.log(userCredentials.user)
}
