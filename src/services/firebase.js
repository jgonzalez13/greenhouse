import app from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config';
import 'firebase/firebase-database';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.database();
  }

  createNave(id, data) {
    this.db.ref(`naves/nave${id}`).set(data)
  }
}

const firebase = new Firebase();
export default firebase;
