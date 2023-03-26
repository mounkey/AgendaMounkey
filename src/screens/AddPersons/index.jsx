import { Alert, Boton, PhotoButton, PostHeader, TextBox } from "../../components/index";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Color from "../../constants/color";
import { addPerson } from '../../store/actions';

const AddPersons = ( {navigation} ) => {
  //dispatch
  const dispatch = useDispatch();

  //useSelector
  const persons = useSelector((state) => state.persons);

  //useState
  const [name, setName] = useState("");
  const [mailp, setMailp] = useState("");
  const [mails, setMails] = useState("");
  const [phone, setPhone] = useState("");
  const [phones, setPhones] = useState("");
  const [face, setFace] = useState("");
  const [insta, setInsta] = useState("");
  const [link, setLink] = useState("");

  //onChangeName
  const onChangeName = (text) => {
    setName(text);
  };

  //onChangeMailp
  const onChangeMailp = (text) => {
    setMailp(text);
  };

  //onChangeMails
  const onChangeMails = (text) => {
    setMails(text);
  };

  //onChangePhone
  const onChangePhone = (text) => {
    setPhone(text);
  };

  //onChangePhones
  const onChangePhones = (text) => {
    setPhones(text);
  };

  //onChangeFace
  const onChangeFace = (text) => {
    setFace(text);
  };

  //onChangeInsta
  const onChangeInsta = (text) => {
    setInsta(text);
  };

  //onChangeLink
  const onChangeLink = (text) => {
    setLink(text);
  };

  //onPressAddAdress
  const onPressAddAdress = () => {
    if(name === "" || mailp === "" || mails === "" || phone === "" || phones === "" || face === "" || insta === "" || link ===""){
      Alert.Alert("Error", "Todos los campos son obligatorios");
    }
    else{
      dispatch(addPerson(name, mailp, mails, phone, phones, face, insta, link ));
      navigation.navigate('ADireccion');
    }


  };

  //onPressAdPhoto
  const onPressAdPhoto = () => {
    navigation.navigate('AFoto');
  };

  //onPressCamera
  const onPressCamera = () => {
    navigation.navigate('AFoto');
  }

  const PhotoHead = require("../../../assets/Logo2.png");
  return (
    <View style={style.container}>
      <PhotoButton onPress={onPressCamera} img={PhotoHead}></PhotoButton>
      <PostHeader section="Per" />
      <View style={style.containerTextInput}>
        <Text style={style.font}>Agregar Persona</Text>
        <TextBox
          placeholder="Nombre"
          value={name}
          onChangeText={onChangeName}
          alt={25}
          multiline={false}
          numLine={1}
        />
        <TextBox
          placeholder="Mails Principal"
          value={mailp}
          onChangeText={onChangeMailp}
          alt={25}
          multiline={false}
          numLine={1}
        />
        <TextBox
          placeholder="Mail Secundario"
          value={mails}
          onChangeText={onChangeMails}
          alt={25}
          multiline={false}
          numLine={1}
        />
        <TextBox
          placeholder="Telefono Principal"
          value={phone}
          onChangeText={onChangePhone}
          alt={25}
          multiline={false}
          numLine={1}
        />
        <TextBox
          placeholder="Telefono Secundario"
          value={phones}
          onChangeText={onChangePhones}
          alt={25}
          multiline={false}
          numLine={1}
        />
        <Text style={style.font}>Redes Sociales</Text>
        <TextBox
          placeholder="Facebook"
          value={face}
          onChangeText={onChangeFace}
          alt={25}
          multiline={false}
          numLine={1}
        />
        <TextBox
          placeholder="Instagram"
          value={insta}
          onChangeText={onChangeInsta}
          alt={25}
          multiline={false}
          numLine={1}
        />
        <TextBox
          placeholder="Linkedin"
          value={link}
          onChangeText={onChangeLink}
          alt={25}
          multiline={false}
          numLine={1}
        />
        <Boton title="Direccion" bkcolor={Color.primary} color={Color.white} onPress={onPressAddAdress} />
      </View>
    </View>
  );
}

export default AddPersons;

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
});
