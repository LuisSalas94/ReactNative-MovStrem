import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <ScrollView>
      <Text>Let's Make Your Own Cinema</Text>
      <Text>
        MOVstrem has an extremely impressive film catalog for you to choose
        from. If you’re looking to watch an obscure film title—maybe a movie
        from decades prior—MOVstrem is the best choice. You also will have the
        ability to rent the most recently released films and recent home
        premieres. If there’s a movie currently only playing in theaters that
        you’re dying to see, MOVstrem can even help you view show times and
        purchase tickets for in person viewing.
      </Text>
      <View></View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
