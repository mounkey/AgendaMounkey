import { FlatList, StyleSheet, Text, View } from "react-native";
import {HLogo, PostHeaderPlus} from '../../components/index';
import { useDispatch, useSelector } from 'react-redux';

import Color from "../../constanst/color";
import React from 'react';
import { getTasks } from '../../store/actions';

const See = ({ navigation }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  //keyExtractor
  const keyExtractor = (item, index) => index.toString();

  //renderItem
  const renderItem = ({ item }) => (
    <View style={styles.render}>
      <Text style={styles.fontRender}>Nombre: {item.name}</Text>
      <Text style={styles.fontRender}>Motivo: {item.reason}</Text>
      <Text style={styles.fontRender}>Detalle: {item.detail}</Text>
      <Text style={styles.fontRender}>Fecha: {item.date}</Text>
      <Text style={styles.fontRender}>Hora: {item.status}</Text>
      <TouchableOpacity onPress={() => onPressDetails(item)}>
        <Text style={styles.fontRender}>Detalles</Text>
      </TouchableOpacity>
    </View>
  );

  //onPressDetails
  const onPressDetails = (item) => {
    dispatch(getTasks(item));
    navigation.navigate('Detalle');
  };

  //onPressNew
  const onPressNew = () => {
    navigation.navigate('Actividades');
  };

  return (
    <View style={styles.container}>
      <HLogo/>
      <PostHeaderPlus section="Act" onPress={onPressNew}/>
      <Text>See</Text>
      <View style={styles.containerFlat}>
        <FlatList data={tasks} renderItem={renderItem} keyExtractor={keyExtractor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    alignItems: 'center',
    justifyContent: 'center',
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

export default See;

