import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Boton } from "./components/index";
import Color from "./constanst/color";


export default function index() {
  // useState
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [reason, setReason] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [detail, setDetail] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [list, setList] = useState([]);

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
  const onPress = () => {
    if (name != "" && reason != "" && detail != "") {
      setList([
        ...list,
        {
          id: Math.random().toString(),
          name,
          reason,
          detail,
          date: date(),
        },
      ]);
      console.log("aqui paso Willy");
      setList("");
      setName("");
      setReason("");
      setDetail("");
    } else {
      console.log("Error");
    }
  };
  //render Item
  const renderItem = ({ item }) => (
    <View style= {styles.render}>
      <Text>{item.name + "-" + item.date} </Text>
    </View>
  );

  const keyID = (item) => item.id;
  return (
    <View style ={styles.container}>
      <Image style={styles.imageLogo} source={require("../assets/Logo2.png")} />
      <StatusBar style="auto" />
      <View style={styles.containerInPut}>
        <>
          <View style={styles.containerImage}>
            <Image style={styles.imagen2} source={require("../assets/Activities.png")} />
          </View>
          <View style ={styles.containerTextInput}>
            <Text style={styles.font}>Activities</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Nombre"
              value={name}
              onChange={onChangeName}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Motivo"
              value={reason}
              onChange={onChangeReason}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Detalle"
              value={detail}
              onChange={onchangeDetail}
            />
            <Boton
              style={styles.btn}
              title="Guardar"
              onPress={onPress}
              bkcolor={Color.primary}
              color={Color.white}
            />
          </View>
          <View style={styles.containerFlat}>
            <FlatList data={list} renderItem={renderItem} keyExtractor={keyID} />
          </View>
        </>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 44,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageLogo: {
    marginBottom: 12,
    width: 101,
    height: 143,
  },
  containerInPut: {
    backgroundColor: Color.primary,
    width: 404,
    height: "85%",
    borderRadius: 30,
  },
  containerImage: {
    alignItems: "flex-start",
  },
  imagen2: {
    marginTop: 15,
    marginBottom: 30,
    marginLeft: 19,
  },
  containerTextInput: {
    alignItems: "center",
  },
  font: {
    fontSize: 25,
    color: Color.white,
    marginHorizontal: 19,
    marginVertical: 3,
  },
  TextInput: {
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
    backgroundColor: Color.white,
    color: Color.black,
    marginVertical: 5,
  },
});
