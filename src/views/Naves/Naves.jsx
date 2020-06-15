import React, { useContext } from 'react';
import { UserStore } from 'containers/context/User.context';
import MyCard from './components/Card';
import AddNaveCard from './components/AddNaveCard';
import Spin from 'shared/Spin';

const Naves = () => {
  const { naves } = useContext(UserStore);

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
