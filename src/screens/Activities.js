import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import { Boton } from "../components/index";
import Color from "../constanst/color";
import { StatusBar } from "expo-status-bar";

export default function Activities({ onSelectedChangePage }) {
  // useState
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [detail, setDetail] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selected, setSelected] = useState(false);
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
    const task = {
      id: Date.now(),
      name: name,
      reason: reason,
      detail: detail,
      date: date(),
    };
    console.warn(task)
    setTasks([...tasks, task]);
    setName("");
    setReason("");
    setDetail("");

  };
  //onPressReturn
  const onPressReturn = () =>{
    setSelected(!selected);
    onSelectedChangePage(selected);
  }

  //render Item
  const renderItem = ({ item }) => (
    <View style={styles.render}>
      <Text style={styles.fontRender}>Nombre: {item.name}</Text>
      <Text style={styles.fontRender}>Motivo: {item.reason}</Text>
      <Text style={styles.fontRender}>Detalle: {item.detail}</Text>
      <Text style={styles.fontRender}>Fecha: {item.date}</Text>
    </View>

  );

  const keyExtractor = (item) => item.id;
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imageLogo} source={require("../../assets/Logo2.png")} />
      <StatusBar style="auto" />
      <View style={styles.containerInPut}>
        <>
          <View style={styles.containerImage}>
            <Image style={styles.imagen2} source={require("../../assets/Activities.png")} />
          </View>
          <View style={styles.containerTextInput}>
            <Text style={styles.font}>Activities</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Nombre"
              value={name}
              onChangeText={onChangeName}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Motivo"
              value={reason}
              onChangeText={onChangeReason}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Detalle"
              value={detail}
              onChangeText={onchangeDetail}
            />
            <Boton
              style={styles.btn}
              title="Guardar"
              onPress={onPressBottom}
              bkcolor={Color.primary}
              color={Color.white}
            />
            <Boton
              style={styles.btn}
              title="Regreso"
              onPress={onPressReturn}
              bkcolor={Color.primary}
              color={Color.white}
            />
          </View>
          <View style={styles.containerFlat}>
            <FlatList data={tasks} renderItem={renderItem} keyExtractor={keyExtractor} />
          </View>
        </>
      </View>
    </SafeAreaView>
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
    fontFamily: 'Montserrat-Regular',
    fontSize: 25,
    color: Color.white,
    marginHorizontal: 19,
    marginVertical: 3,
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
    fontSize: 25,
  }
});
