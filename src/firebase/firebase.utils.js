import * as firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6SyP-qk_1sI4-zZZG6fNm6qiTdoeXPaY",
  authDomain: "crwn-db-8a584.firebaseapp.com",
  projectId: "crwn-db-8a584",
  storageBucket: "crwn-db-8a584.appspot.com",
  messagingSenderId: "45590791462",
  appId: "1:45590791462:web:85372cf0b199a3eed26de7",
  measurementId: "G-TH6FY2GEL8",
};

firebase.initializeApp(firebaseConfig);

export const auth = getAuth();
// export const firestore = firebase.firestore();
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
export default firebase;
