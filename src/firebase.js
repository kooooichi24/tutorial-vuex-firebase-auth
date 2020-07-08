import firebase from "@firebase/app";
import "@firebase/auth";
import store from "./store";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB34-SGco0dWBWdd_sds98xJcy_JDX5SsA",
  authDomain: "tutorial-vuex-firebase-a-6b98e.firebaseapp.com",
  databaseURL: "https://tutorial-vuex-firebase-a-6b98e.firebaseio.com",
  projectId: "tutorial-vuex-firebase-a-6b98e",
  storageBucket: "tutorial-vuex-firebase-a-6b98e.appspot.com",
  messagingSenderId: "704698061434",
  appId: "1:704698061434:web:f0c6a2fb4330b5ae07e1c3",
  measurementId: "G-W9GKS5H6P5"
};

export default {
  init() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  },
  logout() {
    firebase.auth().signOut();
  },
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {};
      store.commit('onAuthStateChanged', user);
      store.commit('onUserStatusChanged', user.uid ? true : false);
    });
  }
}