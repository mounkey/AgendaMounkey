import { Alert, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Boton, TextBox } from "../../components/index";
import React, { useState } from "react";

import Color from "../../constanst/color";
import { StatusBar } from "expo-status-bar";

export default function Activities({ navigation }) {
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
    if (name === "" || reason === "" || detail === "") {
      Alert.alert("Error", "Todos los campos son obligatorios")
    }
    else {
      const task = {
        id: Date.now(),
        name: name,
        reason: reason,
        detail: detail,
        date: date(),
      };
      setTasks([...tasks, task]);
      setName("");
      setReason("");
      setDetail("");
    }
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
      <TouchableOpacity onPress={() => onPressDetails(item)}>
        <Text style={styles.fontRender}>Detalles</Text>
      </TouchableOpacity>

    </View>

  );

  const onPressDetails = ({id, name, reason, detail, date}) => {
    navigation.navigate('Detalles', {
      name: name,
      reason: reason,
      detail: detail,
      date: date,
    });

  };

  const keyExtractor = (item) => item.id;
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imageLogo} source={require("../../../assets/Logo2.png")} />
      <StatusBar style="auto" />
      <View style={styles.containerInPut}>
        <>
          <View style={styles.containerImage}>
            <Image style={styles.imagen2} source={require("../../../assets/Activities.png")} />
          </View>
          <View style={styles.containerTextInput}>
            <Text style={styles.font}>Activities</Text>
            <TextBox
              placeholder="Nombre"
              value={name}
              onChangeText={onChangeName}
              alt={25}
              multiline= {false}
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
              placeholder="Detalle"
              value={detail}
              onChangeText={onchangeDetail}
              alt={150}
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
    fontSize: 20,
  }
});