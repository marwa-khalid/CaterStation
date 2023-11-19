import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RecommendationCard = ({ image, name, rating, reviews, startingPrice, location }) => (
  <View style={styles.cardContainer}>
    <View style={styles.imageContainer}>
      <Image style={styles.cardImage} source={image} />
    </View>
    <View style={styles.contentContainer}>
      <View style={styles.nameContainer}>
        <Text style={styles.cardName}>{name}</Text>
        <View style={styles.reviewContainer}>
          <Text style={styles.star}>⭐</Text>
          <Text style={styles.rating}>{rating}</Text>
          <Text style={styles.reviewCount}>({reviews})</Text>
        </View>
      </View>
      <Text style={styles.startingPrice}>Starting from PKR {startingPrice}</Text>
      <View style={styles.locationContainer}>
        <Image style={styles.locationIcon} source={require('../images/location.png')} />
        <Text style={styles.locationText}>{location}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
  },
  imageContainer: {
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  contentContainer: {
    padding: 15,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardName: {
    fontSize: 15,
    color: '#131e45',
    flex: 1,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: 'gold',
    fontSize: 16,
    marginRight: 8,
  },
  rating: {
    fontSize: 14,
    color: '#131e45',
    marginRight: 4,
  },
  reviewCount: {
    fontSize: 14,
    color: 'grey',
  },
  startingPrice: {
    fontSize: 14,
    color: '#131e45',
    marginTop: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  locationText: {
    fontSize: 14,
    color: '#131e45',
  },
});

export default RecommendationCard;
