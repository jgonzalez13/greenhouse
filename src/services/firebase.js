import app from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config';
import 'firebase/firestore';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.auth.signOut();
  }

  async getDataCurrentUser() {
    // console.log("datos del usaurio: ", this.auth.currentUser);
    app.auth().onAuthStateChanged(function (user) {
      if (user) {
        // store.dispatch(saveUserReload(user));
        window.sessionStorage.setItem('user', user.email);
      }
    });
  }
}

const firebase = new Firebase();
export default firebase;
