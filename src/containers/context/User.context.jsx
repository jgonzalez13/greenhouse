import React, { createContext, useReducer, useCallback, useState, useEffect } from 'react';
import firebase from 'services/firebase';
import { initialState, reducer } from '../reducer/User.reducer';

const UserStore = createContext({});
const { Provider } = UserStore;

function UserProvider({ children }) {
  const [user, setUser] = useReducer(reducer, initialState);
  const [naves, setNaves] = useState([]);
  const { auth } = user;

  const getNaves = useCallback(() => {
    firebase.db.ref('naves').on('value', (snapShot) => {
      const allNaves = [];
      snapShot.forEach((snap) => {
        allNaves.push(snap.val());
      });

      setUser({ type: 'updateUser', payload: { naves: allNaves } });
      setNaves(allNaves);
    });
  }, [setUser]);

  useEffect(() => {
    getNaves();
  }, [getNaves]);

  return <Provider value={{ auth, naves, setUser }}>{children}</Provider>;
}

export { UserStore, UserProvider };
