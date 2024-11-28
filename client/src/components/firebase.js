// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdh_Ehvnwz_v5SEyE0_TDbi5gYXzZPkTs",
  authDomain: "test-d35b4.firebaseapp.com",
  projectId: "test-d35b4",
  storageBucket: "test-d35b4.appspot.com",
  messagingSenderId: "323431574052",
  appId: "1:323431574052:web:8168390ff1354ac8b746b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
export {app,auth,googleProvider}