import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PackageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Most Popular Packages Right Now</Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, { backgroundColor: '#fcb138' }]}>
          <Text style={styles.cardText}>Wedding</Text>
          <Text style={styles.startingPrice}>Starting from PKR 500</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={[styles.card, { backgroundColor: '#1b224f' }]}>
          <Text style={styles.cardText}>Casual Events</Text>
          <Text style={styles.startingPrice}>Starting from PKR 235</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={[styles.card, { backgroundColor: '#61422b' }]}>
          <Text style={styles.cardText}>Corporate Events</Text>
          <Text style={styles.startingPrice}>Starting from PKR 450</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 25,
    marginBottom: 20,
  },
  cardContainer: {
    marginBottom: 15,
  },
  card: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  startingPrice: {
    fontSize: 14,
    color: '#fff',
    marginBottom: -35,
    marginTop:20,
    marginLeft:150
  },
});

export default PackageScreen;
