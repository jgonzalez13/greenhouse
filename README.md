# greenhouse


## FrontEnd

### Instalacion React 

```
npm install
npm start
open http://localhost:3000/
```

### Nota 
Si el Front no llegara a funcionar instalar
```
npm install -g create-react-ap
```

## Arduino

### Librerias
```
#include <ArduinoJson.h> //5.13.1
#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#include <NTPClient.h>
#include <WiFiUdp.h>
#include <DHT.h>
#include <SFE_BMP180.h>
#include <Wire.h>
```

### Conexionees
```
DHT11
  Data = D6 

LDR
  Analog 0

BMP180
  SDA = D1
  SCL = D2

Buzzer
  D5
```
### Como Utilizarlo

1. Ir a la carpeta arduino y entrar al archivo de greenHouse.ino
2. Buscar la variable idNave ( linea - 53 ) poner el id que usted quiera para su nave recuerde debe de ser un numero del 0000 - 9999, de 4 digitos
3. compilar el codigo y subirlo a su placa 
4. dar de alta la nave en el front
5. ver los datos que envia la nave
