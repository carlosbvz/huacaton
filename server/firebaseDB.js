const firebase = require('firebase')
require('firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAv3PAJmvnyc6ri-DIVuFaUYdIGYW9tS1g",
  authDomain: "huacaton-1135b.firebaseapp.com",
  databaseURL: "https://huacaton-1135b.firebaseio.com",
  projectId: "huacaton-1135b",
  storageBucket: "huacaton-1135b.appspot.com",
  messagingSenderId: "935966273145",
  appId: "1:935966273145:web:94fff358b93d08287e6ea8"
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
module.exports = {
    db
}