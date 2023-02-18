import { Image, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { styles }from './style';

const PhotoButton = ({ onPress, img }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={img} style={styles.photo} />
      <Image source={require("../../../assets/camera.png")} style = {styles.camera}/>
    </TouchableOpacity>
  );
}

export default PhotoButton;
