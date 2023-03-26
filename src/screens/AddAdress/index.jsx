import * as Location from "expo-location";

import { Boton, MapPreview, PhotoButton, PostHeader, TextBox } from "../../components";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Color from "../../constants/color";

const AddAdress = ({ navigation }) => {
  //useState
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [coords, setCoords] = useState(null);
  const [wCoords, setWCoords] = useState("Coordenadas: No hay coordenadas");

  //onChangeAdress
  const onChangeAddress = (text) => {
    setAddress(text);
  };

  //onChangeCity
  const onChangeCity = (text) => {
    setCity(text);
  };

  //onChangeCountry
  const onChangeCountry = (text) => {
    setCountry(text);
  };



  //onPressCamera
  const onPressCamera = () => {
    navigation.navigate('AFoto');
  }

  //onPressall
  const onPressall = () => {
    console.log("hola");
  };

  //onPressObtener
  const onPressObtener = async () => {
    const largeAddress = address + " " + city + " " + country;
    const geocodedLocation = await Location.geocodeAsync(largeAddress);
    const { latitude, longitude } = geocodedLocation;
    setCoords({ lat: latitude, lgn: longitude });
    onChangeCoords(coords);
  };

  //onChangeCoords
  const onChangeCoords = (coord) => {
    if (coord.lat == "" && coord.lgn == "") {
      console.log("No hay coordenadas");
    }
    else {
      const { lat, lgn } = coord;
      setWCoords("Coordenadas: Latitud: " + lat + " Longitud: " + lgn);
    }

  };

  //onPressReset
  const onPressReset = () => {
    setAddress("");
    setCity("");
    setCountry("");
    setCoords({ lat: "", lgn: "" });
    setWCoords("");
  };


  const PhotoHead = require("../../../assets/Logo2.png");

  return (
    <SafeAreaView style={style.container}>
      <PhotoButton onPress={onPressCamera} img={PhotoHead}></PhotoButton>
      <PostHeader section="Per" />
      <View style={style.containerTextInput}>
        <Text style={style.font}>Agregar Direccion</Text>
        <TextBox
          placeholder="Direccion"
          value={address}
          onChangeText={onChangeAddress}
          alt={25}
          multiline={false}
          numLine={1}
        />
        <TextBox
          placeholder="Ciudad"
          value={city}
          onChangeText={onChangeCity}
          alt={25}
          multiline={false}
          numLine={1}
        />
        <TextBox
          placeholder="Pais"
          value={country}
          onChangeText={onChangeCountry}
          alt={25}
          multiline={false}
          numLine={1}
        />
        <View style={style.containerMap}>
          <View style={style.buttonMap}>
            <Boton title="Obtener" bkcolor={Color.primary} color={Color.white} onPress={onPressObtener} />
            <Boton title="Reset" bkcolor={Color.primary} color={Color.white} onPress={onPressReset} />
          </View>
          <View style={style.map}>
            <MapPreview location={coords} style={style.mapReal} >
              <Text>Hola</Text>
            </MapPreview>
          </View>
        </View>
        <Text style={style.textAdress}>Direccion: {address}</Text>
        <Text style={style.textAdress}>Ciudad: {city}</Text>
        <Text style={style.textAdress}>Pais: {country}</Text>
        <Text style={style.textAdress}>{wCoords}</Text>
        <Boton title="Guardar" bkcolor={Color.primary} color={Color.white} onPress={onPressall} />
      </View>
    </SafeAreaView>
  );
}

export default AddAdress;

const style = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    alignItems: "center",
    justifyContent: "center",
    height: '100%',
  },
  containerTextInput: {
    alignItems: "center",
    backgroundColor: Color.primary,
    width: 404,
    height: "70%",
    borderRadius: 30,
  },
  font: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: Color.white,
    marginHorizontal: 25,
    marginVertical: 10,
    alignSelf: 'baseline',
    marginLeft: 30,
  },

  containerMap: {
    width: '50%',
    height: '42%',
    alignItems: 'center',
  },

  buttonMap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  map: {
    marginTop: 10,
  },

  mapReal: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  textAdress: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: Color.white,
    marginHorizontal: 20,
    alignSelf: 'flex-start',
  },
});
