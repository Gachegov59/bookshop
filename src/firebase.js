import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCGKRiQkezoErkEh3ErDtZWyDVRVAiXviA",
    authDomain: "bookshop-vue.firebaseapp.com",
    databaseURL: "https://bookshop-vue.firebaseio.com",
    projectId: "bookshop-vue",
    storageBucket: "bookshop-vue.appspot.com",
    messagingSenderId: "708577434205",
    appId: "1:708577434205:web:b7e90fda7314bc58ed4bb4",
    measurementId: "G-K565FZB08T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



