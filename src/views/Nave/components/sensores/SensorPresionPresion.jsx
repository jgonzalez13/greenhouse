import React, { useEffect, useState } from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

charts(FusionCharts);

const SensorPresionPresion = ({ datos }) => {
  const [data, setData] = useState({
    chart: {
      caption: 'PRESION',
      yaxisname: 'INTENSIDAD',
      subcaption: '[FOTOCELDA]',
      numbersuffix: '',
      rotatelabels: '1',
      setadaptiveymin: '1',
      theme: 'fusion',
      anchorbgcolor: '#72D7B2',
      palettecolors: '#5cb192',
      showvalues: '0',
    },
    data: [],
  });

  useEffect(() => {
    createData();
    // eslint-disable-next-line
  }, []);

  function createData() {
    const newData = datos.map((item) => {
      return {
        label: item.idDatoSensor,
        value: item.datoSensor.presion,
      };
    });
    setData({ ...data, data: newData });
  }

  return <ReactFusioncharts type="line" width="100%" height="40%" dataFormat="JSON" dataSource={data} />;
};

export default SensorPresionPresion;
