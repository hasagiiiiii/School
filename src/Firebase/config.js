import { initializeApp } from "firebase/app";
import {getAuth,FacebookAuthProvider,connectAuthEmulator} from "firebase/auth"
import {getFirestore,connectFirestoreEmulator} from "firebase/firestore"

  const firebaseConfig = {
    apiKey: "AIzaSyAO5FB7r9RNceC8s04dTXLFckaaUrB5Zqg",
    authDomain: "trendyt-21c17.firebaseapp.com",
    projectId: "trendyt-21c17",
    storageBucket: "trendyt-21c17.appspot.com",
    messagingSenderId: "230142021727",
    appId: "1:230142021727:web:31ea7b9ce640d138dc8bea",
    measurementId: "G-MFREGP0TYC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  if(window.location.hostname === "localhost"){
    connectFirestoreEmulator(db,"127.0.0.1",8080)
  }
  // if(window.location.hostname === "localhost"){
  //   connectAuthEmulator(auth,"127.0.0.1",9099)
  // }
  const providerFacebook = new FacebookAuthProvider()
  export { db,providerFacebook}