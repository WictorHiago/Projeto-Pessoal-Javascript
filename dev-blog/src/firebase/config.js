// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import config from '../firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: config.API_KEY,
   authDomain: config.AUTH_DOMAIN,
   projectId: 'devblog-7ead3',
   storageBucket: config.STORAGE_BUCKET,
   messagingSenderId: '202968159058',
   appId: '1:202968159058:web:970ae8f655ca31cdc6a08b',
   measurementId: 'G-2424H2TXC2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
