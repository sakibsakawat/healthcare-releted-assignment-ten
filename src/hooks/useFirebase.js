import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
const useFirebase = () => {
    const [user, setUser] = useState({});
   
    const [isLoading, setIsLoading] = useState(true);
    
    const [ email, setEmail] = useState('');

    const [password, setPassword] = useState ('');




     const auth = getAuth();


     


     const signInUsingGoogle =() => {

        setIsLoading(true);

     const googleProvider = new GoogleAuthProvider();
           signInWithPopup(auth, googleProvider)
           .then (result =>{
               setUser(result.user);
           })
           .finally(() => setIsLoading(false));
     }
// user state observer
      useEffect( () => {
   const unsubscribed = onAuthStateChanged(auth, user => {
              if(user) {
                  setUser(user);
              }
              else{
                  setUser({})
              }
              setIsLoading(false)
          });
          return () => unsubscribed;
      },[] )









          const logOut = () => {
              setIsLoading(true);
              signOut(auth)
              .then(() => {  })
              .finally(() => setIsLoading(false));
          }


    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        
    }
}


export default useFirebase;