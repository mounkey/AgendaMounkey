import {Image, View} from 'react-native';

import {URL_MAPS} from '../../utils/maps';
import {styles} from 'styles';

const MapPreview = ({children,location, style}) => {
  const {lat, lgn } = location || {};
  const mapPreviewURL = Location ? `${URL_MAPS}${lat},${lgn}` : "";
  return (
    <View style={{...styles.container, ...style}}>
      { location ? <Image style={styles.mapImage} source={{uri: mapPreviewURL}} /> : children}
    </View>
  );
};

export default MapPreview;


