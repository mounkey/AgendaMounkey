import { StyleSheet, Text, View } from 'react-native';

import Color from '../../constants/Color';
import React from 'react';

const See = () => {
  return (
    <View style={styles.container}>
      <Text>See</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default See;

