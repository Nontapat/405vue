import Firebase from 'firebase'

/* Firebase configuration */
let config = {
    apiKey: "AIzaSyAauq0qMGXlOQboBnCFlvRB0pxJR0tolug",
    authDomain: "vuejs-6ddd2.firebaseapp.com",
    databaseURL: "https://vuejs-6ddd2.firebaseio.com",
    projectId: "vuejs-6ddd2",
    storageBucket: "vuejs-6ddd2.appspot.com",
    messagingSenderId: "652996177776"
};

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();

export {firebaseApp, db};