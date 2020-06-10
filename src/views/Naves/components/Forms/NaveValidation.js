import * as yup from 'yup';

const initialValues = { idNave: '' };

const isNumber = 'REQUIERE SER NUMERICO';

const NaveValidations = yup.object().shape({
  idNave: yup.number(isNumber).min(4).max(4).required(),

  nombreNave: yup.string().required(),

  rutaNave: yup.string().required(),

  descripcionNave: yup.string().required(),

  sensores: yup.object().shape({
    sensorDHT11: yup.object().shape({
      idSensor: yup.number(isNumber).min(4).max(4).required(),

      tipoSensor: yup.string().required(),

      msgValorMinimoSensor: yup.string().required(),

      valorMinimoSensor: yup.number(isNumber).required(),

      msgValorMaximoSensor: yup.string().required(),

      valorMaximoSensor: yup.number(isNumber).required(),
    }),
  }),
});

export { initialValues, NaveValidations };
