import React, { useState, useEffect } from 'react';
import firebase from 'services/firebase';
import MyCard from './components/Card';

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
    <div>
      <h1>Hol Mundo</h1>
      <div className="container pt-2">
        <div className="d-flex">
          {naves.map((nave, i) => (
            <MyCard key={i} nave={nave} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Naves;
