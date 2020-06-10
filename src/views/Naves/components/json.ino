StaticJsonBuffer<256> jsonBuffer;
JsonObject& root = jsonBuffer.createObject(); // Master bject
JsonArray& sensores = root.createNestedArray("sensores"); // Sensores

JsonObject& sensorDHT11 = sensores.createNestedArray("sensorDHT11"); // DHT11 - information
JsonObject& sensorFotocelda = sensores.createNestedArray("sensorFotocelda"); // Fotocelda - information
JsonObject& sensorPresion = sensores.createNestedArray("sensorPresion"); //Presion - information


/// DHT11 -information
sensorDHT11["idSensor"] = 0001;
sensorDHT11["tipoSensor"] = "urbano";
sensorDHT11["valorMinimoSensor"] = 30;
sensorDHT11["msgValorMinimoSensor"] = "hola soy el valor minimo";
sensorDHT11["valorMaximoSensor"] = 60;
sensorDHT11["msgValorMaximoSensor"] = "hola soy el valor maximo";
sensorDHT11["datosSensor"] = datosSensorDHT11

/// fotocelda
sensorFotocelda["idSensor"] = 0002;
sensorFotocelda["tipoSensor"] = "Fotocelda";
sensorFotocelda["valorMinimoSensor"] = 100;
sensorFotocelda["msgValorMinimoSensor"] = "hola soy el valor minimo";
sensorFotocelda["valorMaximoSensor"] = 30;
sensorFotocelda["msgValorMaximoSensor"] = "hola soy el valor maximo";

// Presion
sensorPresion["idSensor"] = 0003;
sensorPresion["tipoSensor"] = "Presion";
sensorPresion["valorMinimoSensor"] = 100;
sensorPresion["msgValorMinimoSensor"] = "hola soy el valor minimo";
sensorPresion["valorMaximoSensor"] = 30;
sensorPresion["msgValorMaximoSensor"] = "hola soy el valor maximo";

root["idNave"] = 0001;
root["nombreNave"] = "Tesla";
root["descripcionNave"] = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.";
root["rutaNave"] = "Equipamiento Urbano, 28046 Colima, Col.";
sensores["sensorDHT11"] = sensorDHT11;
sensores["sensorFotocelda"] = sensorFotocelda;
sensores["sensorPresion"] = sensorPresion;
root.prettyPrintTo(Serial);


JsonObject& datosSensorDHT11 = sensorDHT11.createNestedArray("datosSensor"); 
JsonObject& datoSensorDHT11 = sensorDHT11.createNestedArray("datoSenor"); 

for(int i = 0 i < 100;i )

datosSensorDHT11.add(datosSensorObjectDHT11)

{ 
  datoSensor: [[]],
  createdSensor: ,
  idDatoSensor: 0
}

for ()

datosSensorDHT11["idDatoSensor"] = ;
datosSensorDHT11["createdSensor"] = "PENDIENTE"
datoSensorDHT11.add()
