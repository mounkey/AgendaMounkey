import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, userSelect } from 'react-redux';

import Color from "../../constanst/color";
import {HLogo} from '../../components/index';
import React from 'react';
import { getTasks } from '../../store/actions';

const See = ({ navigation }) => {
  const dispatch = useDispatch();
  const tasks = userSelect(state => state.tasks);

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

  //onPressDetails
  const onPressDetails = (item) => {
    dispatch[getTasks(item.id)];
    navigation.navigate('Detalle');
  };

  return (
    <View style={styles.container}>
      <HLogo/>
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

