import firebase from 'firebase/app';
import '@firebase/firestore';



 const app =  firebase.initializeApp ({
    apiKey: "AIzaSyAdrM_sp3hTyEIcBaO-MEtx4k3zjPm4Ups",
    authDomain: "proyectoreact-2fbc2.firebaseapp.com",
    projectId: "proyectoreact-2fbc2",
    storageBucket: "proyectoreact-2fbc2.appspot.com",
    messagingSenderId: "190006291679",
    appId: "1:190006291679:web:7bde0afc94ff687840cd6a",
    measurementId: "G-TRMGQ4MPSR"
  });

 export const getFirebase = () => {
     return app;
 }

 export const getFirestore = () => {
    return firebase.firestore(app);
}

