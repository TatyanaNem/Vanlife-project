import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, getDocs, getDoc, query, where} from "firebase/firestore/lite";
import {getAuth} from 'firebase/auth';

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

/*export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data.vans
}*/

export async function loginUser(creds) {
  const res = await fetch("/api/login",
    { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }

  return data
}
