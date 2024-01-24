import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail} from "firebase/auth";
import { getFirestore }from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm4_adImOq_mUoeQZ6NZ2r8Tq_ViQiOQY",
  authDomain: "codenovas-react-2023.firebaseapp.com",
  projectId: "codenovas-react-2023",
  storageBucket: "codenovas-react-2023.appspot.com",
  messagingSenderId: "689156116198",
  appId: "1:689156116198:web:4e84612155dc8ae2363527"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export {
  auth,
  db,
  sendPasswordReset,
};