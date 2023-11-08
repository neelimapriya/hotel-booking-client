import { createContext, useEffect, useState } from "react";
import app from "../Firebaase/Firebase.config";
import {
  getAuth,
  
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import axios from "axios";
import { useIsRestoring } from "@tanstack/react-query";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || User?.email;
      const loggedUser={email:userEmail}
      setUser(currentUser);
      setLoading(false)
      if(currentUser){
        
        axios.post('https://hotel-server-wheat.vercel.app/api/v1/auth/access-token', loggedUser,{
          withCredentials:true
        }).then(res=>console.log(res))
      }
      else {
        axios.post('https://hotel-server-wheat.vercel.app/logout', loggedUser, {
            withCredentials: true
        })
            .then(res => {
                console.log(res.data);
            })
          }
    });
    return () => {
      unSubscribe();
    };
  }, [User]);

  const authInfo = {
    createUser,
    login,
    googleLogin,
    logOut,
    User,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
