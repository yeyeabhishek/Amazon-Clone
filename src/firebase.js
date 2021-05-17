import firebase from 'firebase'

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyA80DphZLT27BKk4oisaOKP65vOV2mExzk",
    authDomain: "clone-5fe42.firebaseapp.com",
    databaseURL:"https://clone-5fe42.firebaseapp.com/",
    projectId: "clone-5fe42",
    storageBucket: "clone-5fe42.appspot.com",
    messagingSenderId: "383177104340",
    appId: "1:383177104340:web:8c0e9a9157363bee211441",

});

 const db=firebaseApp.firestore();
 const auth=firebase.auth();

 export {db, auth};