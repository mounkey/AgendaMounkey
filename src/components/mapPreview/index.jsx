import {Image, View} from 'react-native';

import {URL_MAPS} from '../../utils/maps';
import {styles} from './style';

export default function MapPreview ({ children,location, style }) {
  const {lat, lgn } = location || {};
  const mapPreviewURL = URL_MAPS(lat, lgn);
  console.log(mapPreviewURL);
  return (
    <View style={{...styles.container, ...style}}>
      { location ? <Image style={styles.mapImage} source={{uri: mapPreviewURL}} /> : children}
    </View>
  );
};
