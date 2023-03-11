import {StyleSheet, View} from 'react-native';
import React from 'react';

const SpaceComponent = () => {
  return <View style={styles.spaceComponentStyle} />;
};

export default SpaceComponent;

const styles = StyleSheet.create({
  spaceComponentStyle: {
    paddingVertical: 40,
  },
});
