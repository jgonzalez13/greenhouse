import React, { useState, useEffect, useContext, useCallback } from 'react';
import { UserStore } from 'containers/context/User.context';
import firebase from 'services/firebase';
import MyCard from './components/Card';
import AddNaveCard from './components/AddNaveCard';
import Spin from 'shared/Spin';

const Naves = () => {
  const { setUser } = useContext(UserStore);
  const [naves, setNaves] = useState([]);

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

  if (!naves.length) return <Spin />;

  return (
    <div className="container">
      <div className="d-flex mx-auto">
        {naves.map((nave, i) => {
          if (nave.status) {
            return <MyCard key={i} nave={nave} />;
          }
        })}
        <AddNaveCard />
      </div>
    </div>
  );
};

export default Naves;
