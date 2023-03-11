import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loader = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="#f44336" />
    </View>
  );
};

export default Loader;
