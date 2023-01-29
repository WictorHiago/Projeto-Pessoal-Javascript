import { db } from '../../firebase/config';
import React from 'react';
/* CSS */
import styles from '../Login/Login.module.css';
/* HOOKS */
import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   //                  rename error to authError
   const { login, error: authError, loading } = useAuthentication();

   const handleSubmit = async (e) => {
      e.preventDefault();

      setError('');

      const user = {
         email,
         password,
      };

      const res = await login(user);
      console.log(res);
   };
   // map if auError change
   useEffect(() => {
      if (authError) {
         setError(authError);
      }
   }, [authError]);
   return (
      <div className={styles.login}>
         <h1>Entrar</h1>
         <p>faça login</p>
         <form onSubmit={handleSubmit}>
            <label htmlFor="">
               <span>Email:</span>
               <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-mail de usuário"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </label>
            <label htmlFor="">
               <span>Senha:</span>
               <input
                  type="password"
                  name="password"
                  required
                  placeholder="Insira sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </label>
            {!loading && <button className="btn">Entrar</button>}
            {loading && (
               <button className="btn" disabled>
                  Aguarde...
               </button>
            )}
            {error && <p className="error">{error}</p>}
         </form>
      </div>
   );
};

export default Login;
