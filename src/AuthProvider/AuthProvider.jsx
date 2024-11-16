import { createContext } from "react"
import { app } from "../firebase-config/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = () => {

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const Login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email, password)
    }

    

  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider