import React from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const Loader = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" color="#f44336" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight / 5,
  },
});
