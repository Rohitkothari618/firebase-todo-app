import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAtwPzJz4PwXEkRWmpyYswuxULWVAWotIQ',
  authDomain: 'todo-app-a8c6a.firebaseapp.com',
  projectId: 'todo-app-a8c6a',
  storageBucket: 'todo-app-a8c6a.appspot.com',
  messagingSenderId: '146619065053',
  appId: '1:146619065053:web:de25928133a907c356f134',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
