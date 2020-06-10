import React, { createContext, useReducer } from 'react';

import { initialState, reducer } from '../reducer/User.reducer';

const UserStore = createContext({});
const { Provider } = UserStore;

function UserProvider({ children }) {
  const [user, setUser] = useReducer(reducer, initialState);
  const { auth, naves } = user;

  return <Provider value={{ auth, naves, setUser }}>{children}</Provider>;
}

export { UserStore, UserProvider };
