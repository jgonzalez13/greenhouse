import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const Tabla = ({ datos }) => {
  const [data, setData] = useState({
    labels: [21321323213, 12312312],
    datasets: [
      {
        label: 'popular',
        data: [1, 12],
      },
    ],
  });
  useEffect(() => {
    createData();
    // eslint-disable-next-line
  }, []);

  function createData() {
    const newData = datos.map((item) => {
      return {
        labels: item.idDatoSensor,
      };
    });
    setData({ ...data, labels: newData });
  }
  return <Line data={data} />;
};

export default Tabla;
