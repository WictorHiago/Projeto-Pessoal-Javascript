// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import config from '../config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: config.API_KEY,
   authDomain: config.AUTH_DOMAIN,
   projectId: 'devblog-16ed9',
   storageBucket: config.STORAGE_BUCKET,
   messagingSenderId: '211429885323',
   appId: '1:211429885323:web:5896714c443d8398b19b8e',
   measurementId: 'G-RGSF0CHM6W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
