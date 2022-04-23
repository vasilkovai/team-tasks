import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBghRcljK_EfcYQljGdx4W66eHdUQxW6ck",
  authDomain: "community-management-6af6f.firebaseapp.com",
  projectId: "community-management-6af6f",
  storageBucket: "community-management-6af6f.appspot.com",
  messagingSenderId: "874593143322",
  appId: "1:874593143322:web:3420f8f0cd2345a7ca1fa3"
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