import { initializeApp } from 'firebase/app';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';
// import { firebaseConfig } from './firebaseConfig';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyDdFazGN6qAVa_hU0gcrbVx7zfgKfjIX-M',
    authDomain: 'flightpricetracker-203ce.firebaseapp.com',
    databaseURL: 'https://flightpricetracker-203ce-default-rtdb.firebaseio.com',
    projectId: 'flightpricetracker-203ce',
    storageBucket: 'flightpricetracker-203ce.appspot.com',
    messagingSenderId: '10342481314',
    appId: '1:10342481314:web:7407d16865b5d28bfb06fb'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                name: user.displayName,
                authProvider: 'google',
                email: user.email
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert('Password reset link sent!');
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export { auth, db, signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, logout };
