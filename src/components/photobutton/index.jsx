import { Image, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import styles from './style';

const PhotoButton = ({ onPress, photo }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={photo} style={styles.photo} />
      <image source={require("../../../assets/camera.png")} style = {styles.camera}/>
    </TouchableOpacity>
  );
}

export default PhotoButton;
