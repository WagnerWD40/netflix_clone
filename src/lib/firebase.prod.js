import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyC_yjff4tQlhFQgAMTIvBx8rQ9f7Z4_kmM",
    authDomain: "netflix-3cb8c.firebaseapp.com",
    databaseURL: "https://netflix-3cb8c.firebaseio.com",
    projectId: "netflix-3cb8c",
    storageBucket: "netflix-3cb8c.appspot.com",
    messagingSenderId: "642801611170",
    appId: "1:642801611170:web:62996331aee630f2b342fb"
};

const firebase = Firebase.initializeApp(config);

export { firebase };