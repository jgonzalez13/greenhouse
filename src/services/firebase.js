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

  createNave(id, data, resetValue) {
    this.db.ref(`naves/nave${id}`).set(data);
    this.restartESP8266(id, resetValue);
  }

  updateSensor(id, name, value, resetValue) {
    this.db.ref(`naves/nave${id}/sensores/${name}/status`).set(value);
    this.restartESP8266(id, resetValue);
  }

  removeNave(id) {
    this.db.ref(`naves/nave${id}`).set({ idNave: id, status: false, reset: false });
  }

  restartESP8266(id, value) {
    this.db.ref(`naves/nave${id}/reset`).set(value);
  }
}

const firebase = new Firebase();
export default firebase;
