import React from 'react';
import { View, Text, StyleSheet ,Image, TouchableOpacity,ScrollView} from 'react-native';
import RecommendedForYouCard from '../components/RecommendationCard';
import CaterStationCard from '../components/TrendingCard';
import backgroundImage from '../images/image1.jpeg';
import backgroundImage2 from '../images/image2.jpeg';
import catering from '../images/catering.jpeg';
import photography from '../images/photography.jpeg';
import decor from '../images/decor.jpeg';
import dj from '../images/dj.jpeg';
import farm from '../images/farm.jpeg';
import party from '../images/party.jpeg';
import gncater from '../images/gncater.jpeg';
import bella from '../images/bella.jpeg';
import nafoura from '../images/nafoura.jpeg';
import mehran from '../images/mehran.jpeg';
import royal from '../images/royal.jpeg';
import divine from '../images/divine.jpeg';

const ServiceBox = ({ image, serviceName }) => (
  <View style={styles.serviceBox}>
    <Image
      style={styles.serviceImage}
      source={image}
    />
    <Text style={styles.serviceText}>{serviceName}</Text>
  </View>
);


const HomeScreen = () => {

  return (
    <ScrollView>
    <View style={styles.container}>
        
        <Text  style={{ fontSize: 25, color:"#131e45"}}>Hi User</Text>
        <Text style={{ fontSize: 15,  color:"#131e45"}}>Search your favourite catering here..</Text>

        <View style={styles.orderBox}>
          <View style={styles.orderText}>
            <Text style={{ fontSize: 14,color: '#131e45' }}>Use our wizard to create an</Text>
            <Text style={{ fontSize: 14, color: '#131e45' }}>order as per your requirements</Text>
          </View>
          <TouchableOpacity style={styles.createOrderButton}>
            <Text style={{ color: 'white', fontSize: 14, }}>CREATE ORDER</Text>
          </TouchableOpacity>
        </View>

          <Image
            style={styles.backgroundImage}
            source={backgroundImage} 
          />
       
       <View >
       <Text style={{ fontSize: 17, color:"#131e45"}}>Offers</Text>
        </View> 
        
          <Image
            style={styles.backgroundImage}
            source={backgroundImage2} 
          />

       
     
      <View style={styles.brandsContainer}>
          <Text style={styles.brandtext} >Services</Text>
          <TouchableOpacity >
            <Text style={styles.viewalltext}>View All</Text>
            </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesContainer}>
        <ServiceBox image={catering} serviceName={'Catering'} />
        <ServiceBox image={photography} serviceName={'Photography'} />
        <ServiceBox image={decor} serviceName={'Decor'} />
        <ServiceBox image={party} serviceName={'Party Planner'} />
        <ServiceBox image={dj} serviceName={'DJ Service'} />
        <ServiceBox  image={farm} serviceName={'Farm House'} /> 
      </ScrollView>

      <View style={styles.brandsContainer}>
          <Text style={styles.brandtext} >Trending CaterStation</Text>
          <TouchableOpacity >
            <Text style={styles.viewalltext}>EXPLORE</Text>
            </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
          <CaterStationCard image={gncater} name="G.N CATERERS & EVENT" rating={3.76} reviews={17} />
          <CaterStationCard image={royal} name="Royal Castle" rating={2.01} reviews={8} />
          <CaterStationCard image={nafoura} name="Al Nafoura Caterers" rating={3.11} reviews={6} />
          <CaterStationCard image={mehran} name="Mehran Caterers & Ca" rating={4.43} reviews={9} />
          <CaterStationCard image={bella} name="BELLA ROSE EVENT COM" rating={4.50} reviews={15} />
      </ScrollView>

      <View style={styles.brandsContainer}>
          <Text style={styles.brandtext} >Recommended for you</Text>
          <TouchableOpacity >
            <Text style={styles.viewalltext}>EXPLORE</Text>
            </TouchableOpacity>
      </View>

      <RecommendedForYouCard
          image={royal}
          name="Royal Castle"
          rating={3.76}
          reviews={17}
          startingPrice={1398}
          location="8-C Link College Road, Johar Town Lahore"
        />
        <RecommendedForYouCard
          image={nafoura}
          name="Al Nafoura Caterers and Event Complex"
          rating={3.76}
          reviews={17}
          startingPrice={1700}
          location="Lahore, Gujranwala, Sialkot"
        />
        <RecommendedForYouCard
          image={mehran}
          name="Mehran Caterers & Caterings"
          rating={3.76}
          reviews={17}
          startingPrice={1050}
          location="Main Bedian Road Near DHA Phase 7"
        />
        <RecommendedForYouCard
          image={gncater}
          name="BELLA ROSE EVENT COMPLEX"
          rating={3.76}
          reviews={17}
          startingPrice={2050}
          location="Main Bedian Road Near DHA Phase 7"
        />
        <RecommendedForYouCard
          image={divine}
          name="Divine Events & Catering"
          rating={3.76}
          reviews={17}
          startingPrice={1050}
          location="716 D-Block Faisal Town Lahore"
        />
    </View>
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:15
  },
  orderBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#131e45',
    padding: 10,
    marginTop: 15,
    height: 80
  },
  orderText: {
    flex: 1,
    marginRight: 10,
  },
  createOrderButton: {
    backgroundColor: '#131e45',
    paddingVertical: 15,
    paddingHorizontal: 18,
    alignItems: 'center',
  },

  backgroundImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 2,
  },
  
  rowContainer:{
    flexDirection: 'row',
  },
 
  brandsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    marginTop: 15,
  },
  viewBrand:{
    color: "#1D1E20",
    fontSize: 15,
    fontWeight: 500,
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "auto",

  },
  servicesContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 15,
  },
  serviceBox: {
    marginRight: 30,
    alignItems: 'center',
  },
  serviceImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  serviceText: {
    fontSize: 12,
    color: '#131e45',
  },


  brandsContainer2:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:"#F5F5F5",
    width: 'auto',
    marginRight:30,
    marginTop:15,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  brandImage:{
      overflow: "hidden",
      position: "relative",
      display: "flex",
      width: 40,
      flexDirection: "column",
      aspectRatio: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF', 
  },
  icon: {
    backgroundColor: 'rgba(189, 136, 83, 1)',
    color:"#fff",
    padding:7,
    borderRadius:7
  },

  brandtext: {
    fontSize:20,
    color:"black",
  },
  viewalltext: {
    fontSize:15,
    color:"black",
  },
  searchIcon: {
    color:"#fff",
    padding:10,
    backgroundColor: 'rgba(189, 136, 83, 1)', 
    borderRadius:10,
    marginRight:20
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 15,
  },
});

export default HomeScreen;
