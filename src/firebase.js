import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgCwBOuQho-rzZ8ggprIKQ6h0S0_a3kdw",
  authDomain: "slack-clone-7b5be.firebaseapp.com",
  databaseURL: "https://slack-clone-7b5be.firebaseio.com",
  projectId: "slack-clone-7b5be",
  storageBucket: "slack-clone-7b5be.appspot.com",
  messagingSenderId: "330110236530",
  appId: "1:330110236530:web:84a7e058281f36d9514feb",
  measurementId: "G-MCZDCB9KHY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
