// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG7n5e9uo2i4KhxjAmHkRe_QYDhL0vt3M",
  authDomain: "code-editor-net.firebaseapp.com",
  projectId: "code-editor-net",
  storageBucket: "code-editor-net.appspot.com",
  messagingSenderId: "455489153944",
  appId: "1:455489153944:web:9ef89a9f633310fd3859ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)