import { db } from '../../firebase/config';
import React from 'react';
/* CSS */
import styles from '../Register/Register.module.css';
/* HOOKS */
import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
   const [displayName, setDisplayName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');
   //                  rename error to authError
   const { createUser, error: authError, loading } = useAuthentication();

   const handleSubmit = async (e) => {
      e.preventDefault();

      setError('');

      const user = {
         displayName,
         email,
         password,
      };

      if (password !== confirmPassword) {
         setError('As senhas não conferem!');
         return;
      }

      const res = await createUser(user);
      console.log(res);
   };
   // map if auError change
   useEffect(() => {
      if (authError) {
         setError(authError);
      }
   }, [authError]);
   return (
      <div className={styles.register}>
         <h1>Cadastr-se para postar</h1>
         <p>Crie seu usuário e compartilhe suas histórias</p>
         <form onSubmit={handleSubmit}>
            <label htmlFor="">
               <span>Nome:</span>
               <input
                  type="text"
                  name="displayName"
                  required
                  placeholder="Nome de usuário"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
               />
            </label>
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
            <label htmlFor="">
               <span>Comfirme sua senha:</span>
               <input
                  type="password"
                  name="confirmPassword"
                  required
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
               />
            </label>
            {!loading && <button className="btn">Entrar</button>}
            {loading && (
               <button className="btn" diasabled>
                  Aguarde...
               </button>
            )}
            <button className="btn">Cadastrar</button>

            {error && <p className="error">{error}</p>}
         </form>
      </div>
   );
};

export default Register;
