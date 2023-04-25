// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh5IpHavzDrHWNh9ET2C4oMeirYGo2lBg",
  authDomain: "the-news-dragon-c105f.firebaseapp.com",
  projectId: "the-news-dragon-c105f",
  storageBucket: "the-news-dragon-c105f.appspot.com",
  messagingSenderId: "659491552774",
  appId: "1:659491552774:web:eeff959c45503033048d87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app