import * as yup from 'yup';

const initialValues = {
  idNave: '',
  nombreNave: '',
  location: '',
  name: '',
  rutaNave: '',
  descripcionNave: '',
  sensores: { sensorDHT11: '', sensorFotocelda: '', sensorPresion: '' },
  sensorFotocelda: {
    idSensor: '',
    msgValorMaximoSensor: '',
    msgValorMinimoSensor: '',
    tipoSensor: '',
    valorMaximoSensor: '',
    ValorMinimoSensor: '',
    status: 'false',
  },
  sensorPresion: {
    idSensor: '',
    msgValorMaximoSensor: '',
    msgValorMinimoSensor: '',
    tipoSensor: '',
    valorMaximoSensor: '',
    ValorMinimoSensor: '',
    status: 'false',
  },
  sensorDHT11: {
    idSensor: '',
    msgValorMaximoSensor: '',
    msgValorMinimoSensor: '',
    tipoSensor: '',
    valorMaximoSensor: '',
    ValorMinimoSensor: '',
    status: 'false',
  },
};

const isNumber = 'REQUIERE SER NUMERICO';
const isMin = 'SE REQUIEREN CUATRO DIGITOS';
const isRequired = 'ESTE CAMPO ES REQUERIDO';

const NaveValidations = yup.object().shape({
  idNave: yup.number().min(4, isMin).required(isRequired),

  nombreNave: yup.string().required(isRequired),

  rutaNave: yup.string().required(isRequired),

  descripcionNave: yup.string().required(isRequired),

  sensores: yup.object().shape({
    sensorDHT11: yup.object().shape({
      idSensor: yup.number(isNumber).min(4, isMin).required(isRequired),

      tipoSensor: yup.string().required(isRequired),

      msgValorMinimoSensor: yup.string().required(isRequired),

      valorMinimoSensor: yup.number(isNumber).required(isRequired),

      msgValorMaximoSensor: yup.string().required(isRequired),

      valorMaximoSensor: yup.number(isNumber).required(isRequired),
    }),
    sensorPresion: yup.object().shape({
      idSensor: yup.number(isNumber).min(4, isMin).required(isRequired),

      tipoSensor: yup.string().required(isRequired),

      msgValorMinimoSensor: yup.string().required(isRequired),

      valorMinimoSensor: yup.number(isNumber).required(isRequired),

      msgValorMaximoSensor: yup.string().required(isRequired),

      valorMaximoSensor: yup.number(isNumber).required(isRequired),
    }),
    sensorFotocelda: yup.object().shape({
      idSensor: yup.number(isNumber).min(4, isMin).required(isRequired),

      tipoSensor: yup.string().required(isRequired),

      msgValorMinimoSensor: yup.string().required(isRequired),

      valorMinimoSensor: yup.number(isNumber).required(isRequired),

      msgValorMaximoSensor: yup.string().required(isRequired),

      valorMaximoSensor: yup.number(isNumber).required(isRequired),
    }),
  }),
});

export { initialValues, NaveValidations };
