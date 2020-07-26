import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBqP0hYswK7xBlBkhLte6QP8D7a2DfG6R0",
    authDomain: "projectone-ac97c.firebaseapp.com",
    databaseURL: "https://projectone-ac97c.firebaseio.com",
    projectId: "projectone-ac97c",
    storageBucket: "projectone-ac97c.appspot.com",
    messagingSenderId: "448588157749",
    appId: "1:448588157749:web:a235ede43452fad408f27c",
    measurementId: "G-JC0SL7JJKQ"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
      this.db = app.database();
    }
     // *** Auth API ***
 
      doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

      doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

      doSignOut = () => this.auth.signOut();

      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
      doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

        // *** User API ***
    
      user = uid => this.db.ref(`users/${uid}`);
    
      users = () => this.db.ref('users');
  }
   
  export default Firebase;