import React from 'react';
/* CSS */
import styles from '../Register/Register.module.css';
/* HOOKS */
import { useState, useEffect } from 'react';

const Register = () => {
   return (
      <div>
         <h1>Cadastr-se para postar</h1>
         <p>Crie seu usuário e compartilhe suas histórias</p>
         <form action="">
            <label htmlFor="">
               <span>Nome:</span>
               <input
                  type="text"
                  name="displayName"
                  required
                  placeholder="Nome de usuário"
               />
            </label>
            <label htmlFor="">
               <span>Email:</span>
               <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-mail de usuário"
               />
            </label>
            <label htmlFor="">
               <span>Senha:</span>
               <input
                  type="password"
                  name="password"
                  required
                  placeholder="Insira sua senha"
               />
            </label>
            <label htmlFor="">
               <span>Comfirme sua senha:</span>
               <input
                  type="password"
                  name="confirmPassword"
                  required
                  placeholder="Confirme sua senha"
               />
            </label>
            <button className="btn">Cadastrar</button>
         </form>
      </div>
   );
};

export default Register;
