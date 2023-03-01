import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { Alert, Image, Text, View } from 'react-native';

import Boton from '../index';
import Color from '../../constants/color';
import {styles} from './style';
import { useState } from 'react';

const  ImageSelector= ({onImage}) =>{
  const [pickedUrl, setPickedUrl] = useState(null);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant camera permissions to use this app.',
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  }

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });

    setPickedUrl(image.uri);
    onImage(pickedUrl);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {
          !pickedUrl ? (
            <Text style={styles.text}>No image picked yet.</Text>
          ) : (
            <Image style={styles.image} source={{ uri: pickedUrl }} />
          )
        }
      </View>
      <Boton onPress ={takeImageHandler} title='Seleccionar imagen' bkcolor={Color.primary} color={Color.white}/>
    </View>
    );
}

export default ImageSelector;
