// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase:
// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
	apiKey: 'AIzaSyCRthcFGWRV6ZwDYOPaFosCV0jb6TDilFc',
	authDomain: 'todo-app-6c9d1.firebaseapp.com',
	databaseURL: 'https://todo-app-6c9d1.firebaseio.com',
	projectId: 'todo-app-6c9d1',
	storageBucket: 'todo-app-6c9d1.appspot.com',
	messagingSenderId: '577875880101',
	appId: '1:577875880101:web:71ab63904694aaf0c9454c',
};

// Initialize Firebase
const DBInit = firebase.initializeApp(firebaseConfig);

const GoogleProvider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

const DBAuth = DBInit.auth();

export { DBAuth, GoogleProvider, firebase, db };
