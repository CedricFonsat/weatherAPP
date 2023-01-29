import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Marker } from 'react-native-maps';


export default function Weather() {

  // var crd = pos.coords;

  // console.log('Your current position is:');
  // console.log(`Latitude : ${crd.latitude}`);
  // console.log(`Longitude: ${crd.longitude}`);

 const apikey = "c4baa0acc24e06600b85076a5b28652b";  
 const image = { uri: "https://i.pinimg.com/originals/63/50/b1/6350b12067f74deccb283957f7a5f091.jpg" };
 const city = "toulon"
 const [result, setResult] = useState([]);
 const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
   useEffect(() => {
     axios
       .get(ApiUrl, {
         headers: {
           'Accept' : 'application/json'
         }
       })
       .then((res) => {

         const results = res.data.main.temp - 273.15

         console.log("temp : "+ Math.round(results))

         setResult(Math.round(results));
       })
       .catch((err) => console.log("err = ", err))
   }, []);

  return (
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Salut</Text>
      <Text style={styles.text}>{result} °C</Text>
      <StatusBar style="auto" />
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



 