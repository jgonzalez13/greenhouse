import React, { useState, useEffect } from 'react';
import firebase from 'services/firebase';
import MyCard from './components/Card';
import AddNaveCard from './components/AddNaveCard';
import Spin from '../../shared/Smodel';

const Naves = () => {
  const [naves, setNaves] = useState([]);

  const getNaves = () => {
    firebase.db.ref('naves').on('value', (snapShot) => {
      const allNaves = [];
      snapShot.forEach((snap) => {
        allNaves.push(snap.val());
      });

      setNaves(allNaves);
    });
  };

  useEffect(() => {
    getNaves();
  }, []);

  return (
    <div className="container">
      <div className="d-flex mx-auto">
        {naves.map((nave, i) => (
          <MyCard key={i} nave={nave} />
        ))}
        <AddNaveCard />
      </div>
      <Spin />
    </div>
  );
};

export default Naves;
