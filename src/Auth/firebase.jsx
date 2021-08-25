import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCkqjteTtszSIfJRxPXq4wRHfgS6yfkvYc",
  authDomain: "usersdata-99c0b.firebaseapp.com",
  projectId: "usersdata-99c0b",
  storageBucket: "usersdata-99c0b.appspot.com",
  messagingSenderId: "827332223240",
  appId: "1:827332223240:web:8135b37a040dcb95944cbd"
})

export const auth = app.auth()
export default app