import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NotFoundMovie = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Opps!</Text>
      <Text style={styles.text2}>
        Sorry, we couldn't find what you're looking for.
      </Text>
    </View>
  );
};

export default NotFoundMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 18,
  },
});
