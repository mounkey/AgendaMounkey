import { Image, View } from "react-native";

import React from "react";
import { URL_MAPS } from "../../utils/maps";
import { styles } from "./style";

const MapPreview = ({ children, location, style }) => {
  const { lat, lng } = location || {};
  const mapPreviewUrl = location ? URL_MAPS(lat, lng) : "";
  return (
    <View style={{ ...styles.container, ...style }}>
      {location ? <Image style={styles. mapImage} source={{ uri: mapPreviewUrl }} /> : children}
    </View>
  );
};

export default MapPreview;
