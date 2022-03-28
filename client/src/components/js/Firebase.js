import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCMtb_Xpfa6QJnYNnc0QulBm-KmE2Ee5Kk",
  authDomain: "auth-6143f.firebaseapp.com",
  projectId: "auth-6143f",
  storageBucket: "auth-6143f.appspot.com",
  messagingSenderId: "642484405786",
  appId: "1:642484405786:web:e97e477f3b058e3370f3a3",
  measurementId: "G-1K0D27V4TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signWithGoogle = () => {
  signInWithPopup(auth, provider).then(result => {
    console.log(result);
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);
  }).catch((error) => {
    console.error(error);
  });
};
