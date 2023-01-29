import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
} from 'firebase/auth';

import { useState, useEffect } from 'react';

export const useAuthentication = () => {
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(null);

   //cleanup , deal with memory leak
   const [cancelled, setCancelled] = useState(false);
   const auth = getAuth();

   const checkIfSsCancelled = () => {
      if (cancelled) {
         return;
      }
   };

   const createUser = async (data) => {
      checkIfSsCancelled();

      setLoading(true);

      //try catch for capture error from firebase
      try {
         const { user } = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
         );

         await updateProfile(user, {
            displayName: data.displayName,
         });

         setLoading(false);
         return user;
      } catch (error) {
         console.log(error.message);
         console.log(typeof error.message);

         let systemErrorMessage;

         if (error.message.includes('Password')) {
            systemErrorMessage = 'A senha precisa ter pelo menos 6 caracteres';
         } else if (error.message.includes('email-already')) {
            systemErrorMessage = 'E-mail já está cadastrado';
         } else {
            systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde';
         }

         setLoading(false);
         setError(systemErrorMessage);
      }
   };
   // logout - sign out
   const logout = () => {
      checkIfSsCancelled();

      signOut(auth);
   };

   // login - sign in
   const login = async (data) => {
      checkIfSsCancelled();
      setLoading(true);
      setError(false);

      try {
         await signInWithEmailAndPassword(auth, data.email, data.password);
         setLoading(true);
      } catch (error) {
         let systemErrorMessage;

         if (error.message.includes('user-not-found')) {
            systemErrorMessage = 'Usuário não encontrado';
         } else if (error.message.includes('wrong-password')) {
            systemErrorMessage = 'Usuário e Senha incorretos';
            console.log(error.message);
         } else {
            systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde';
         }

         setError(systemErrorMessage);
         setLoading(false);
      }
   };

   useEffect(() => {
      return () => setCancelled(true);
   }, []);

   return {
      auth,
      createUser,
      error,
      loading,
      logout,
      login,
   };
};
