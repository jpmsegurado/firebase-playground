import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCBGhT4R7l1q1USAXuNTOR2qc-wp7wQLrs",
  authDomain: "test-firabase.firebaseapp.com",
  databaseURL: "https://test-firabase.firebaseio.com",
  projectId: "test-firabase",
  storageBucket: "test-firabase.appspot.com",
  messagingSenderId: "5844705573",
  appId: "1:5844705573:web:0009c4d868a6fde8"
}

firebase.initializeApp(firebaseConfig)

export default firebase