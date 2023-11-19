import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TrendingCard = ({ image, name, rating, reviews }) => (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={image} />
      <Text style={styles.cardName}>{name.toUpperCase()}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.star}>⭐</Text>
        <Text style={styles.rating}>{rating}</Text>
        <Text style={styles.reviewCount}>({reviews})</Text>
      </View>
    </View>
  );

  const styles = StyleSheet.create({

    cardContainer: {
        marginRight: 20,
        alignItems: 'center',
        backgroundColor:"#FFF"
      },
      cardImage: {
        width: 270,
        height: 130,
        marginBottom: 10,
        resizeMode:"cover"
      },
      cardName: {
        fontSize: 16,
        justifyContent:'center',
        color: '#131e45',
      },
      ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
      },
      star: {
        color: 'gold',
        fontSize: 16,
        marginRight: 8,
      },
      rating: {
        fontSize: 14,
        color: '#131e45',
        marginRight: 8,
      },
      reviewCount: {
        fontSize: 14,
        color: 'grey',
      },
      
  });
  
  export default TrendingCard;
  
  