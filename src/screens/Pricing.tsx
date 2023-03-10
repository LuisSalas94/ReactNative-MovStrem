import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
  return (
    <ScrollView>
      <View style={styles.pricingContainer}>
        <Text style={styles.pricingTitle}>
          Choose The Plan The Suits For You
        </Text>
        <Text style={styles.pricingContent}>
          We present 3 packages that you can choose to start watching various of
          our content at low prices and according to your needs.
        </Text>
        <View style={styles.pricingCardContainer}>
          <PricingCard />
        </View>
      </View>
    </ScrollView>
  );
};

export default Pricing;

const styles = StyleSheet.create({
  pricingContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  pricingTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  pricingContent: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
  },
  pricingCardContainer: {
    marginTop: 20,
  },
});
