import React, { useState, useEffect } from 'react';
import firebase from 'services/firebase';

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
      <ul>
        {naves.map((item) => (
          <li key={item.nombreNave}>{item.nombreNave}</li>
        ))}
      </ul>
    </div>
  );
};

export default Naves;
