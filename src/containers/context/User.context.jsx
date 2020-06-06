import React, { createContext, useReducer } from 'react';

import { initialState, reducer } from '../reducer/User.reducer';
import { useEffect } from 'react';

const UserStore = createContext({});
const { Provider } = UserStore;

function UserProvider({ children }) {
  const [user, setUser] = useReducer(reducer, initialState);
  const { auth } = user

  useEffect(() => {

  }, [])

  return (
    <Provider value={{ auth, setUser }}>
      {children}
    </Provider>
  );
}

export { UserStore, UserProvider };
