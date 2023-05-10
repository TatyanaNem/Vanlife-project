import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore/lite";

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
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  console.log(dataArr)
  return dataArr
}


/*export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans"
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

export async function getHostVans(id) {
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
}

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
