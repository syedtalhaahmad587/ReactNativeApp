import {
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    Button,
    TouchableOpacity,
    onPress,
    TextInput
  } from 'react-native';
import React, { Component } from 'react'

const Navbar = () => {
    const styles = StyleSheet.create({
        Navbar : {
            backgroundColor:"#4297EC", 
            position:'absolute',
            bottom:192,
            paddingRight:20,
            paddingLeft:20,
            paddingTop:10,
            paddingBottom:10
         },
         NavbarBottom : {
           display:"flex",
           flexDirection: "row",
           justifyContent: "space-between", 
           alignItems:"center",
               
         },
         source : {
           marginRight:30,
           marginLeft: 0,
         },
         source1 : {
           marginRight:30,
           marginLeft: 5,
         },
         source2 : {
           marginRight:0,
           marginLeft: 20,
         },
         source3 : {
           marginRight:0,
           marginLeft: 30,
         },
         sourceImg : {
            marginLeft: 4,
            marginBottom: 0,
         },
         sourceImg1 : {
           marginLeft: 5,
           marginBottom: 2,
        },
        sourceImg2 : {
           marginLeft: 17,
           marginBottom: 2,
        },
        sourceImg3 : {
           marginLeft: 20,
           marginBottom: 2,
        },
        sourceImg4 : {
           marginLeft: 2,
           marginBottom: 4,
           
        },
        sourcePera : {
            fontSize:12,
            marginLeft: 2,
        },
        sourcePera1 : {
           fontSize:12,
           marginLeft: 2,
       },
       sourcePera2 : {
           fontSize:12,
            
       },
       sourcePera3: {
           fontSize:12,
       },
       sourcePera4 : {
           fontSize:12,
       }
    })
    return (
        <View style={styles.Navbar} >
        <View style={styles.NavbarBottom} >
        <View style={styles.source}>
        <Image style={styles.sourceImg}  source={Home} />
        <Text style={styles.sourcePera} >Home</Text>
        </View>
        <View style={styles.source1} >
        <Image style={styles.sourceImg1} source={User2} />
        <Text style={styles.sourcePera1} >Profile</Text>
        </View>
        <View >
        <Image style={styles.sourceImg2} source={User} />
        <Text style={styles.sourcePera2} >Notification</Text>
        </View>
        <View style={styles.source2} >
        <Image style={styles.sourceImg3} source={RealCircle} />
        <Text style={styles.sourcePera3} >Trade Center</Text>
        </View>
        <View style={styles.source3} >
        <Image style={styles.sourceImg4}  source={StatusBar} />
        <Text style={styles.sourcePera4} >Menu</Text>
        </View>
      </View>
      </View>
    )
  }

export default Navbar