import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAsE42Mo7IF4ba33QrClbUVlea8PoELZus",
  authDomain: "team-tasks-f1754.firebaseapp.com",
  projectId: "team-tasks-f1754",
  storageBucket: "team-tasks-f1754.appspot.com",
  messagingSenderId: "301490109666",
  appId: "1:301490109666:web:4a2d41bd2b3183cd8472bb"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }