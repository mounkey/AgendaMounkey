import { Text, TextInput, View } from "react-native";

import React from "react";
import { styles } from './style';

const textbox = ({placeholder, value, onChangeText, alt, multiline, numLine }) =>{
  return (
    <View style={styles.container} >
      <TextInput
        style={[styles.TextInput, { height: alt }]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numLine}
      />
    </View>
  );
}

export default textbox;
