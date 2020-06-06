import React, { useState, useEffect } from 'react';
import firebase from 'services/firebase';
import MyCard from './components/Card';
import './Naves.css';

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
    <div className="cards-containers">
      <div className="container">
        <div className="d-flex mx-auto">
          {naves.map((nave, i) => (
            <MyCard key={i} nave={nave} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Naves;
