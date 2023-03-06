import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MovstremIcon from './MovstremIcon';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View>
        <MovstremIcon />
      </View>
      <View style={styles.homeScreenContainer}>
        <Text style={styles.homeScreenTitle}>
          Let's Make Your {'\n'} Own Cinema
        </Text>
        <Text style={styles.homeScreenContent}>
          MOVstrem has an extremely impressive film catalog for you to choose
          from. If you’re looking to watch an obscure film title—maybe a movie
          from decades prior—MOVstrem is the best choice. You also will have the
          ability to rent the most recently released films and recent home
          premieres. {'\n'} If there’s a movie currently only playing in
          theaters that you’re dying to see, MOVstrem can even help you view
          show times and purchase tickets for in person viewing.
        </Text>
        <View style={styles.homeScreenButtonContainer}>
          <TouchableOpacity style={styles.homeScreenButton1}>
            <Text style={styles.homeScreenButton1Text}>Show Plan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeScreenButton2}>
            <Text style={styles.homeScreenButton2Text}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    paddingHorizontal: 15,
  },
  homeScreenTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 25,
  },
  homeScreenContent: {
    fontSize: 15,
    lineHeight: 25,
  },
  homeScreenButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    gap: 105,
  },
  homeScreenButton1: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#f44336',
    backgroundColor: '#f44336',
    borderRadius: 5,
    width: 140,
  },
  homeScreenButton1Text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  homeScreenButton2: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#f44336',
    backgroundColor: 'white',
    borderRadius: 5,
    width: 140,
  },
  homeScreenButton2Text: {
    color: '#f44336',
    fontSize: 16,
    textAlign: 'center',
  },
});
