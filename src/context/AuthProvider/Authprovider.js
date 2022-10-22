import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)

    // for user state 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }

    }, [])

    //email sign Up method
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // email sign in method 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google sign in method 
    const signInGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // sign out 
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = { user, signUp, signIn, signInGoogle, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;