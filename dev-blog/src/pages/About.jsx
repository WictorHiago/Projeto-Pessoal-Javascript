import React from 'react';
/* CSS */
import styles from './About.module.css';
import { Link } from 'react-router-dom';
const About = () => {
   return (
      <div className={styles.about}>
         <h2>
            Sobre o projeto <span>DevBlog</span>
         </h2>
         <p>
            Este projeto consiste em um blog feito com React no frontend e
            firebase no backend
         </p>
         <Link to="/posts/create" className="btn">
            Criar post
         </Link>
      </div>
   );
};

export default About;
