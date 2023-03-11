import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {pricingInfo} from '../priceInfo';

const PricingCard = () => {
  return pricingInfo.map(item => {
    return (
      <View style={styles.pricingCardContainer} key={item.title.toString()}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.lineDivider} />
        <View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View>
          <Text style={styles.price}>
            <Text style={{color: '#f44336'}}>${item.price}</Text> / month
          </Text>
        </View>
        <View style={styles.features}>
          {item.features.map(item => {
            return (
              <Text>
                <Icon name="checkmark-outline" size={20} color="#ccc" />
                {item}
              </Text>
            );
          })}
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.button}>Choose Plan</Text>
        </TouchableOpacity>
      </View>
    );
  });
};

export default PricingCard;

const styles = StyleSheet.create({
  pricingCardContainer: {
    height: 400,
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    padding: 20,
  },
  lineDivider: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 10,
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    opacity: 0.3,
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    paddingVertical: 10,
  },
  price: {
    fontSize: 18,
    textAlign: 'center',
  },
  features: {
    marginTop: 10,
    flex: 1,
    gap: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#f44336',
    width: '40%',
    padding: 8,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 5,
  },
});
