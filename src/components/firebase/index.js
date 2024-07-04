import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBB3mrS5hPj9PbeNZI5ScssPq-r2UpeNJs",
  authDomain: "project-65c5f.firebaseapp.com",
  projectId: "project-65c5f",
  storageBucket: "project-65c5f.appspot.com",
  messagingSenderId: "250998214925",
  appId: "1:250998214925:web:32579de885b171a7fce044",
  measurementId: "G-LLWDBKT90K"
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth =  getAuth(app)
export { provider, auth }