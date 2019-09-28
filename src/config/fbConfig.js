import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDjbBnuJ3RB-l0L_DdJQVq9COkUkIDzedE",
  authDomain: "domum-f6e24.firebaseapp.com",
  databaseURL: "https://domum-f6e24.firebaseio.com",
  projectId: "domum-f6e24",
  storageBucket: "domum-f6e24.appspot.com",
  messagingSenderId: "183964696810",
  appId: "1:183964696810:web:8e7f0bbb19eda593"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
