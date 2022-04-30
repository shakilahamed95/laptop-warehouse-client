// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbtG3vUtC75q7wgYi5ngINDOzF7yF4T-Y",
    authDomain: "laptop-warehouse-69e21.firebaseapp.com",
    projectId: "laptop-warehouse-69e21",
    storageBucket: "laptop-warehouse-69e21.appspot.com",
    messagingSenderId: "496679515765",
    appId: "1:496679515765:web:d0daf7fa9b0c15db6caa3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;