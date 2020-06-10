import * as yup from 'yup';

const initialValues = {
  idNave: '',
  nombreNave: '',
  location: '',
  name: '',
  rutaNave: '',
  descripcionNave: '',
  sensores: {
    sensorFotocelda: {
      idSensor: '',
      msgValorMaximoSensor: '',
      msgValorMinimoSensor: '',
      tipoSensor: '',
      valorMaximoSensor: '',
      valorMinimoSensor: '',
      status: false,
    },
    sensorPresion: {
      idSensor: '',
      msgValorMaximoSensor: {
        presion: '',
        altitud: '',
      },
      msgValorMinimoSensor: {
        presion: '',
        altitud: '',
      },
      tipoSensor: '',
      valorMaximoSensor: {
        presion: '',
        altitud: '',
      },
      valorMinimoSensor: {
        presion: '',
        altitud: '',
      },
      status: false,
    },
    sensorDHT11: {
      idSensor: '',
      msgValorMaximoSensor: {
        temperatura: '',
        humedad: '',
      },
      msgValorMinimoSensor: {
        temperatura: '',
        humedad: '',
      },
      tipoSensor: '',
      valorMaximoSensor: {
        temperatura: '',
        humedad: '',
      },
      valorMinimoSensor: {
        temperatura: '',
        humedad: '',
      },
      status: false,
    },
  },
};

const isMin = 'SE REQUIEREN CUATRO DIGITOS';
const isRequired = 'ESTE CAMPO ES REQUERIDO';

const NaveValidations = yup.object().shape({
  idNave: yup.string().min(4, isMin).required(isRequired),

  nombreNave: yup.string().required(isRequired),

  rutaNave: yup.string().required(isRequired),

  descripcionNave: yup.string().required(isRequired),

  sensores: yup.object().shape({
    // DHT11
    sensorDHT11: yup.object().shape({
      idSensor: yup.string().min(4, isMin).required(isRequired),

      tipoSensor: yup.string().required(isRequired),

      msgValorMinimoSensor: yup.object().shape({
        temperatura: yup.string().required(isRequired),

        humedad: yup.string().required(isRequired),
      }),

      valorMinimoSensor: yup.object().shape({
        temperatura: yup.string().required(isRequired),

        humedad: yup.string().required(isRequired),
      }),

      msgValorMaximoSensor: yup.object().shape({
        temperatura: yup.string().required(isRequired),

        humedad: yup.string().required(isRequired),
      }),

      valorMaximoSensor: yup.object().shape({
        temperatura: yup.string().required(isRequired),

        humedad: yup.string().required(isRequired),
      }),
    }),

    // BMP180
    sensorPresion: yup.object().shape({
      idSensor: yup.string().min(4, isMin).required(isRequired),

      tipoSensor: yup.string().required(isRequired),

      msgValorMinimoSensor: yup.object().shape({
        presion: yup.string().required(isRequired),

        altitud: yup.string().required(isRequired),
      }),

      valorMinimoSensor: yup.object().shape({
        presion: yup.string().required(isRequired),

        altitud: yup.string().required(isRequired),
      }),

      msgValorMaximoSensor: yup.object().shape({
        presion: yup.string().required(isRequired),

        altitud: yup.string().required(isRequired),
      }),

      valorMaximoSensor: yup.object().shape({
        presion: yup.string().required(isRequired),

        altitud: yup.string().required(isRequired),
      }),
    }),

    // Fotocelda
    sensorFotocelda: yup.object().shape({
      idSensor: yup.string().min(4, isMin).required(isRequired),

      tipoSensor: yup.string().required(isRequired),

      msgValorMinimoSensor: yup.string().required(isRequired),

      valorMinimoSensor: yup.string().required(isRequired),

      msgValorMaximoSensor: yup.string().required(isRequired),

      valorMaximoSensor: yup.string().required(isRequired),
    }),
  }),
});

export { initialValues, NaveValidations };
