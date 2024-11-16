/* eslint-disable no-unused-vars */
import { createContext } from "react"
import { app } from "../firebase-config/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";



export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = () => {
    const [user]

    const googleProvider = new GoogleAuthProvider();

    const CreateUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const Login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email, password)
    };

    const Logout = () =>{
        return signOut(auth);
    };

    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider );
    };

    const authInfo = (
        CreateUser, Login, Logout, GoogleLogin,
    )

    

  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider