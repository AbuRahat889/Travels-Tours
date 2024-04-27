import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Components/firebase";


export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    //create user
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //update user info 
    const updateUserInfo = (userName, image)=>{
      return  updateProfile(auth.currentUser, {
            displayName: userName,
             photoURL: image
          })
    }

    //sign in user
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //sign out 
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    //user effect 
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            // console.log('observe ', currentUser);     
        });
        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo = {user, 
        createUser, 
        signIn, 
        logOut, 
        loading, 
        updateUserInfo 
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;