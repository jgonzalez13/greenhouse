#include <ArduinoJson.h>
#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

//Time
#include <NTPClient.h>
#include <WiFiUdp.h>
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org");

//Firebase settings
#define FIREBASE_HOST "redes-esp8266.firebaseio.com"
#define FIREBASE_AUTH "bs81U99xP6gyVzwtKTLyXn8ieoKPGqfsjZAak0Vi"
//Wi-Fi settings
#define WIFI_SSID "55te4"
#define WIFI_PASSWORD "thelastofus1"



//DHT11
#include <DHT.h> // including the library of DHT11 temperature and humidity sensor
#define DHTTYPE DHT11 // DHT 11
#define dht_dpin 12 //d6
DHT dht(dht_dpin, DHTTYPE);

//BMP180
#include <SFE_BMP180.h>
#include <Wire.h>
SFE_BMP180 bmp180;
double  ALTITUDE = 550.0; // Altitude in meters

///sensorDHT11
///sensorPresion
    float FotoceldaMaximo, FotoceldaMinimo, DHT11HumedadMaximo,DHT11HumedadMinimo, DHT11TempeMaximo,DHT11TempeMinimo,PresionMaximo,PresionMinimo,AltitudMaximo,AltitudMinimo;
    bool dht11,foto,bmp, rest, startup;
//Buzzer+Led
#define D4 LED_BUILTIN
#define D5 14
 


    StaticJsonBuffer<2000> jsonBuffer;
    JsonObject& root = jsonBuffer.createObject();
    JsonObject& nave = root.createNestedObject("nave"); // nave
    JsonObject& datosSensorDHT11 = root.createNestedObject("datosSensor"); // DHT11 - Data
    JsonObject& datoSensorDHT11 = datosSensorDHT11.createNestedObject("datoSensor"); // DHT11 - Dato
    JsonObject& datosSensorFotocelda = root.createNestedObject("datosSensor");
    JsonObject& datosSensorBMP180 = root.createNestedObject("datosSensor");
    JsonObject& datoSensorBMP180 = datosSensorBMP180.createNestedObject("datoSensor");

    
//Info nave
const String idNave = "0004"; // change

int registerDHT11 = 0;
int registerFotocelda = 0;
int registerBMP180 = 0;


void setup()
{
    Serial.begin(9600);
    // Connect to Wi-Fi
    Serial.print("Wi-Fi...");
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Connecting...");
    while (WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(500);
    }
    Serial.println();
    Serial.print("Connected to: ");
    Serial.println(WiFi.localIP());

    Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH); 


     pinMode (D5,OUTPUT);
    pinMode (D4,OUTPUT);
    //DHT11
    dht.begin();

    //BMP180
    if(bmp180.begin()){
      Serial.print("180 a todo");
    }else{Serial.print("180 no jala");}

    //Time
    timeClient.begin();
    timeClient.setTimeOffset(-18000);

    if ( !Firebase.getBool("naves/nave" + idNave + "/status" )){
      nave["idNave"] = idNave;
      nave["status"] = false;
      Firebase.set("naves/nave" + idNave, nave);
      }

    ////validacion inicial
   FotoceldaMaximo = Firebase.getString("naves/nave" + idNave + "/sensores/sensorFotocelda/valorMaximoSensor").toFloat();
   FotoceldaMinimo = Firebase.getString("naves/nave" + idNave + "/sensores/sensorFotocelda/valorMinimoSensor").toFloat();
    Serial.println("foto maximo " + String(FotoceldaMaximo) + " minimo " + String(FotoceldaMinimo));
    DHT11HumedadMaximo = Firebase.getString("naves/nave" + idNave + "/sensores/sensorDHT11/valorMaximoSensor/humedad").toFloat();
    DHT11HumedadMinimo = Firebase.getString("naves/nave" + idNave + "/sensores/sensorDHT11/valorMinimoSensor/humedad").toFloat();
    Serial.println("humedad maximo " + String(DHT11HumedadMaximo) + " minimo " + String(DHT11HumedadMinimo));
   DHT11TempeMaximo = Firebase.getString("naves/nave" + idNave + "/sensores/sensorDHT11/valorMaximoSensor/temperatura").toFloat();
   DHT11TempeMinimo = Firebase.getString("naves/nave" + idNave + "/sensores/sensorDHT11/valorMinimoSensor/temperatura").toFloat();
    Serial.println("temp maximo " + String(DHT11TempeMaximo) + " minimo " + String(DHT11TempeMinimo));
   PresionMaximo = Firebase.getString("naves/nave" + idNave + "/sensores/sensorPresion/valorMaximoSensor/presion").toFloat();
    PresionMinimo = Firebase.getString("naves/nave" + idNave + "/sensores/sensorPresion/valorMinimoSensor/presion").toFloat();
    Serial.println("pres maximo " + String(PresionMaximo) + " minimo " + String(PresionMinimo));
    AltitudMaximo = Firebase.getString("naves/nave" + idNave + "/sensores/sensorPresion/valorMaximoSensor/altitud").toFloat();
     AltitudMinimo = Firebase.getString("naves/nave" + idNave + "/sensores/sensorPresion/valorMinimoSensor/altitud").toFloat();
    Serial.println("alti maximo " + String(AltitudMaximo) + " minimo " + String(AltitudMinimo));
    
    startup=Firebase.getBool("naves/nave" + idNave + "/status" );
    dht11 = Firebase.getBool("naves/nave" + idNave + "/sensores/sensorDHT11/status");
    foto = Firebase.getBool("naves/nave" + idNave + "/sensores/sensorFotocelda/status");
    bmp = Firebase.getBool("naves/nave" + idNave + "/sensores/sensorPresion/status");
    Serial.println("dht11 " + String(AltitudMaximo) );
   //// Serial.println("foto " + String(AltitudMaximo));
    ////Serial.println("bmp " + String(AltitudMaximo));
    
    rest = Firebase.getBool("naves/nave" + idNave + "/reset");
}

void loop(){
  if (rest != Firebase.getBool("naves/nave" + idNave + "/reset")){
    ESP.restart();
  }
  if ( startup ){
    if ( dht11 ){
      getDataDHT11();
    }
    
    if ( foto ){
      getDataFotocelda();
    }
    
    if ( bmp ){
      getDatabmp180();
    }
  }
  
  timeClient.update();
   delay(1000);
  
}

void getDataDHT11(){
   
 float h = dht.readHumidity();
 float t = dht.readTemperature();
  
  Serial.println("hume  " + String(h) + " temp " + String(t));
 validateMin(DHT11HumedadMinimo, h);
 validateMax(DHT11HumedadMaximo, h);
 validateMin(DHT11TempeMinimo, t);
 validateMax(DHT11TempeMaximo, t);
 
 datosSensorDHT11["idDatoSensor"] = registerDHT11;
 datosSensorDHT11["createdSensor"] = timeClient.getFormattedTime();
 datoSensorDHT11["humedad"] = h;
 datoSensorDHT11["temperatura"] = t;
 Firebase.set("naves/nave" + idNave + "/sensores/sensorDHT11/datosSensor/" + registerDHT11,  datosSensorDHT11);
 registerDHT11++;

 if(registerDHT11 == 100){
  registerDHT11 = 0;
  }

}


void getDataFotocelda(){
  
  int sensorvalue = analogRead(A0);
  
  float voltaje = sensorvalue * (5.0 /1023.0);

  Serial.println("luz  " + String(voltaje));
  validateMin(FotoceldaMinimo, voltaje);
  validateMax(FotoceldaMaximo, voltaje);
  
  datosSensorFotocelda["idDatoSensor"] = registerFotocelda;
  datosSensorFotocelda["createdSensor"] = timeClient.getFormattedTime();
  datosSensorFotocelda["datoSensor"] = voltaje;


  Firebase.set("naves/nave" + idNave + "/sensores/sensorFotocelda/datosSensor/" + registerFotocelda,  datosSensorFotocelda);
  registerFotocelda++;

  

  if(registerFotocelda == 100){
  registerFotocelda = 0;
  }

  
}

void getDatabmp180(){
  char status;
  double T,P,A;
  
  status = bmp180.startTemperature();//Inicio de lectura de temperatura
  Serial.println(String(status));
  if (status != 0)
  {   
    delay(status); //Pausa para que finalice la lectura
    status = bmp180.getTemperature(T); //Obtener la temperatura
    Serial.println(String(status));
    if (status != 0)
    {
      status = bmp180.startPressure(3);//Inicio lectura de presión
      Serial.println(String(status));
      if (status != 0)
      {        
        delay(status);//Pausa para que finalice la lectura        
        status = bmp180.getPressure(P,T);//Obtenemos la presión
        Serial.println(String(status));
        Serial.println("presion  " + String(P));
        if (status != 0)
        {                  
          A= bmp180.altitude(P,ALTITUDE);
            Serial.println("alti  " + String(A));
        }      
      }      
    }   
  } 

  
  
  
   validateMin(PresionMinimo, P);
   validateMax(PresionMaximo, P);
   validateMin(AltitudMinimo, A);
   validateMax(AltitudMaximo, A);
  
  datosSensorBMP180["idDatoSensor"] = registerBMP180;
  datosSensorBMP180["createdSensor"] = timeClient.getFormattedTime();
  datoSensorBMP180["presion"] = P;
  datoSensorBMP180["altitud"] = A;
  Firebase.set("naves/nave" + idNave + "/sensores/sensorPresion/datosSensor/" + registerBMP180,  datosSensorBMP180);
  registerBMP180++;

 if(registerBMP180 == 100){
  registerBMP180 = 0;
  }
}


void activateBuzzer(){
  digitalWrite(D4,LOW) ; //Turn on the built in led
  digitalWrite(D5,HIGH) ; //Turn on active buzzer
  delay (500);
 
  digitalWrite(D4,HIGH) ; //Turn off the built in led
  digitalWrite(D5,LOW) ; //Turn off active buzzer
  delay (500); 
}

void deactivateBuzzer(){
  digitalWrite(D4,LOW) ; //Turn off the built in led
  digitalWrite(D5,LOW) ; //Turn off active buzzer
}

void validateMin(float contrapart, float value){
  if(value <= contrapart){
    activateBuzzer();
  }else{
    deactivateBuzzer();
  }
}

void validateMax(float contrapart, float value){
  ///Serial.println(Firebase.getString("naves/nave" + idNave + "/sensores/sensorFotocelda/valorMaximoSensor").toFloat());
  if(value >= contrapart ){
    activateBuzzer();
  }else{
    deactivateBuzzer();
  }
  
}
