import * as firebase from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
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

export const createUserProfileDocumentIfNotExistsAndGetUserRef = async (
  userAuth,
  additionalData
) => {
  if (!userAuth) return;

  const userRef = doc(getFirestore(), `users`, userAuth.uid);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating  user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(getFirestore(), collectionKey);

  const batch = writeBatch(getFirestore());

  objectsToAdd.forEach((object) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  const transformedCollection = collectionsSnapshot.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = getAuth();
// export const firestore = firebase.firestore();
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export default firebase;
