import { Boton, PhotoButton, PostHeader, TextBox } from "../../components";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Color from "../../constanst/color";

const AddAdress = ( {navigation}) => {
  //useState
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, seTCountry] = useState("");

  //onChangeAdress
  const onChangeAdress = (text) => {
    setAdress(text);
  };

  //onChangeCity
  const onChangeCity = (text) => {
    setCity(text);
  };

  //onChangeCountry
  const onChangeCountry = (text) => {
    seTCountry(text);
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
  const onPressObtener = () => {
    console.log("hola");
  };

  //onPressReset
  const onPressReset = () => {
    console.log("hola");
  };


  const PhotoHead = require("../../../assets/Logo2.png");

  return (
    <SafeAreaView style={style.container}>
      <PhotoButton onPress= {onPressCamera} img= {PhotoHead}></PhotoButton>
      <PostHeader section="Per" />
      <View style={style.containerTextInput}>
        <Text style={style.font}>Agregar Direccion</Text>
        <TextBox
          placeholder="Direccion"
          value={adress}
          onChangeText={onChangeAdress}
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
        <View style = {style.containerMap}>
          <View style = {style.buttonMap}>
            <Boton title="Obtener" bkcolor={Color.primary} color={Color.white} onPress={onPressObtener} />
            <Boton title="Reset" bkcolor={Color.primary} color={Color.white} onPress={onPressReset} />
          </View>
          <View style = {style.map}>
            <Image source={require('../../../assets/mapa.png')}/>
          </View>
        </View>
        <Text style={style.textAdress}>Direccion: {adress}</Text>
        <Text style={style.textAdress}>Ciudad: {city}</Text>
        <Text style={style.textAdress}> Pais: {country}</Text>
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
    height: '45%',
    alignItems: 'center',
  },

  buttonMap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  map: {
    marginTop: 10,
  },
  textAdress:{
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: Color.white,
    marginHorizontal: 25,
    alignSelf: 'flex-start',
  },
});
