// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: 'YOUR_KEY',
   authDomain: 'YOUR_DOMAIN',
   projectId: 'dev-blog-59ab9',
   storageBucket: 'YOUR_BUCKET',
   messagingSenderId: '74163692558',
   appId: '1:74163692558:web:c7a99f1891d3d00834485f',
   measurementId: 'G-6XGPVMME1Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//connection dabase firebase
const db = getFirestore(app);

export { db };
