// // import {
// //     getAuth,
// //     signOut,
// //     signInWithPopup,
// //     onAuthStateChanged,
// //     GoogleAuthProvider,
// //     GithubAuthProvider,
// //     TwitterAuthProvider,
// //     signInWithEmailAndPassword,
// //     createUserWithEmailAndPassword,
// //   } from 'firebase/auth';

// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore, collection, doc, getDoc, setDoc } from 'firebase/firestore';


// const firebaseConfig = {
//   apiKey: 'AIzaSyCnKgFu2JF05ie0oLnJCqaqI9RWVnTTiPk',
//   authDomain: 'dispensarypos-9fb3d.firebaseapp.com',
//   projectId: 'dispensarypos-9fb3d',
//   storageBucket: 'dispensarypos-9fb3d.appspot.com',
//   messagingSenderId: '415976508934',
//   appId: '1:415976508934:web:7614e81279533f5bc1fd87',
//   measurementId: 'G-C3E3LMKM7L'
// };

// const app = initializeApp(firebaseConfig);
// export const AUTH = getAuth(app);
// export const DB = getFirestore(app);


const firebaseConfig = {
  apiKey: 'AIzaSyCnKgFu2JF05ie0oLnJCqaqI9RWVnTTiPk',
  authDomain: 'dispensarypos-9fb3d.firebaseapp.com',
  projectId: 'dispensarypos-9fb3d',
  storageBucket: 'dispensarypos-9fb3d.appspot.com',
  messagingSenderId: '415976508934',
  appId: '1:415976508934:web:7614e81279533f5bc1fd87',
  measurementId: 'G-C3E3LMKM7L'
};
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MSG_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID
// };

export default firebaseConfig;
