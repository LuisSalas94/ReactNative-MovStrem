import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const MovstremIcon = () => {
  return (
    <View style={styles.iconContainer}>
      <Text style={styles.iconText}>
        M
        <Icon name="play-circle-outline" size={25} color="#f44336" />
        Vstrem
      </Text>
    </View>
  );
};

export default MovstremIcon;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  iconText: {
    fontSize: 25,
  },
});
