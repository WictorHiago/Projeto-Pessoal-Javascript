import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

/* CONTEXT */
import { AuthProvider } from './context/AuthContext';

/* PAGES */
import Home from './pages/Home';
import About from './pages/About';
import CreatePosts from './pages/CreatePosts/CreatePosts';
import Dashboard from './pages/Dashboard/Dashboard';
/* COMPONENTS */
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
function App() {
   const [user, setUser] = useState(undefined);
   const { auth } = useAuthentication();

   const loadingUser = user === undefined;

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         setUser(user);
      });
   }, [auth]);

   if (loadingUser) {
      return <p>Carregando...</p>;
   }

   return (
      <div className="App">
         <AuthProvider value={{ user }}>
            <BrowserRouter>
               <Navbar />
               <div className="container">
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/about" element={<About />} />
                     <Route path="/register" element={<Register />} />
                     <Route path="/login" element={<Login />} />
                     <Route path="/posts/create" element={<CreatePosts />} />
                     <Route path="/dashboard" element={<Dashboard />} />
                  </Routes>
               </div>
               <Footer />
            </BrowserRouter>
         </AuthProvider>
      </div>
   );
}

export default App;
