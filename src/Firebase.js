import firebase from 'firebase'; 
const firebaseConfig = {
    apiKey: "AIzaSyBB3Rj2_BeFN2xyhBB5kjpJvASLOMSebcg",
    authDomain: "portfolio-b22fe.firebaseapp.com",
    projectId: "portfolio-b22fe",
    storageBucket: "portfolio-b22fe.appspot.com",
    messagingSenderId: "933394502768",
    appId: "1:933394502768:web:fb8c1f452d95dd8175d0b5"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
export default db;