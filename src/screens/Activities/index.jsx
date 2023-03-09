import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Boton, HLogo, PostHeader, TextBox } from "../../components/index";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Color from "../../constants/color";
import { StatusBar } from "expo-status-bar";
import { addTask } from "../../store/actions";

export default function Activities({ navigation }) {

  const dispatch = useDispatch();
  const task = useSelector((state) => state.task)
  // useState
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [detail, setDetail] = useState("");
  //functiom
  const date = () => {
    const date = Date.now();
    const hoy = new Date(date);
    const day = hoy.toLocaleString();
    return day;
  };

  //onChangeName
  const onChangeName = (text) => {
    setName(text);
  };

  //onChangeReason
  const onChangeReason = (text) => {
    setReason(text);
  };

  // onChangeDetail
  const onchangeDetail = (text) => {
    setDetail(text);
  };

  // Onpress
  const onPressBottom = () => {
    if (name === "" || reason === "" || detail === "") {
      Alert.alert("Error", "Todos los campos son obligatorios")
    }
    else {
      dispatch(addTask(name, date(), detail, reason, false));
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <HLogo/>
      <PostHeader section="Act" />
      <View style={styles.containerTextInput}>
        <Text style={styles.font}>Actividades</Text>
        <TextBox
          placeholder="Nombre"
          value={name}
          onChangeText={onChangeName}
          alt={25}
          multiline={false}
          numLine={1}
        />
        <TextBox
          placeholder="Motivo"
          value={reason}
          onChangeText={onChangeReason}
          alt={25}
          multiline={false}
          numLine={1}
        />
        <TextBox
          value= {date()}
          onChangeText = {date}
          alt={25}
          multiline={false}
          numLine={1}
          editable ={false}
        />
        <TextBox
          placeholder="Detalle"
          value={detail}
          onChangeText={onchangeDetail}
          alt={230}
          multiline={true}
          numLine={10}
        />
        <Boton
          style={styles.btn}
          title="Guardar"
          onPress={onPressBottom}
          bkcolor={Color.primary}
          color={Color.white}
        />
        <Boton
          onPress={() => navigation.navigate('Detalles')}
          title="Detalles"
          bkcolor={Color.primary}
          color={Color.white}
        />

      </View>


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    marginLeft:30,
  },
  TextInput: {
    fontFamily: 'Montserrat-Regular',
    width: "90%",
    height: 25,
    backgroundColor: Color.white,
    placeholderTextColor: Color.black,
    fontSize: 20,
    borderRadius: 10,
    marginVertical: 3,
    marginHorizontal: 20,
    paddingLeft: 20,
  },
  containerFlat: {
    flex: 1,
  },
  render: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    width: "90%",
    backgroundColor: Color.white,
    marginVertical: 5,
    borderRadius: 10,
  },
  fontRender: {
    fontFamily: 'Montserrat-Regular',
    color: Color.primary,
    fontSize: 20,
  }
});
