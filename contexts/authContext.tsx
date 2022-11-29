import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from "@components/config/Firebase";
import axios from "axios";

const AuthContext = createContext<any>({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                })
            } else {
                setUser(null)
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const signup = async (email:string, password:string) => {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const token = await result.user.getIdToken()
        console.log("ini: " + token);
        axios
        .post('api/user/post-user', {
  
          "token": token,
  
        }).then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    const login = async (email:string, password:string) => {
        // return signInWithEmailAndPassword(auth, email, password);
        const result = await signInWithEmailAndPassword(auth, email, password);
    }

    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }

    return <AuthContext.Provider value={{user, login, signup, logout}}>
        {loading ? null : children}
    </AuthContext.Provider>
}

// Buat context, 