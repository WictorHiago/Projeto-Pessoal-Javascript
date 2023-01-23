// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import dotenv from 'dotenv';
dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// YOUR CONFIG HERE
const firebaseConfig = {
   apiKey: process.env.API_KEY,
   authDomain: process.env.AUTH_DOMAIN,
   projectId: 'dev-blog-59ab9',
   storageBucket: process.env.STORAGE_BUCKET,
   messagingSenderId: process.env.MESSAGE_SENDER,
   appId: process.env.APP_ID,
   measurementId: process.env.MEASUREMENT_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//connection dabase firebase
const db = getFirestore(app);

export { db };
