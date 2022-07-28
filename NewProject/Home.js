import { Text, View , StyleSheet, Image, ScrollView , onPress } from 'react-native';
import React, { Component } from 'react';
import VectorNew from '../assets/VectorNew.png';
import Carousel from '../NewProject/component/CarouselItem';
import  dummyData  from './component/data';
import  Rating  from "./component/Sports/GamesTrade";
import Navbar  from "../NewProject/component/ShowNavbar";



const Home = ({navigation}) =>  {

    const styles = StyleSheet.create({
        MainBody : {
            Color: "#ffff",
            margin: 0,
            padding: 0,
            height: 900,
        },
        HomeFirst : {
            borderBottomWidth: 1,
            borderColor:"rgba(0, 0, 0, 0.15)",
        },
        HomeRule : {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 12,
          marginLeft: 12,
          marginTop:  12,
          marginBottom: 12,
          
        },
        HomeText : {
            fontFamily: 'Poppins',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 18,
            color:"#000000"
        },
        ImageTurn : {
            height: 20,
            width: 17,
        }
        
      });
    return (
        <>
        <View style={styles.MainBody} >
          <View  style={styles.HomeFirst} >
            <View  style={styles.HomeRule} >
            <Text style={styles.HomeText} >Home</Text>
            <Text><Image style={styles.ImageTurn} source={VectorNew} /></Text>
            </View>
          </View>
          <ScrollView>
            <Carousel data = {dummyData} navigation={navigation} />
            <View>
               <Rating />
            </View>
            </ScrollView>
            </View>
            <View>
              {/* <Navbar /> */}
            </View>
           

        </>
    )
 }

 export default Home;