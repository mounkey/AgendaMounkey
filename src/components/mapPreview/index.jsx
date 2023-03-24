import {Image, View} from 'react-native';

import  MapView from 'react-native-maps';
import {URL_MAPS} from '../../utils/maps';
import {styles} from './style';
import {useState} from'react';

export default function MapPreview ({ children,location, style }) {
  const { lat, lgn } = location || {};

  // Estados
  const [map, setMap] = useState({latitude: lat, longtitude: lgn, longtitudeDelta: 0.0922, longitudeDelta: 0.8421,});
  console.log(map);
  return (
    <View style={{...styles.container, ...style}}>
      { location ? <MapView style={styles.mapImage} region={map} /> : children}
    </View>
  );
};
