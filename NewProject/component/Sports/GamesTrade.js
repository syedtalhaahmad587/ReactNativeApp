import React, { useState } from 'react';
import Search from "../../../assets/Search.png"
import Filter from "../../../assets/Filter.png"
import Sport from "../../../assets/61pH6i+KGTL.png"
import Heart from "../../../assets/Heart.png"
import IconCircle from "../../../assets/IconCircle.png"

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

const Rating = ()  =>  {
    const styles = StyleSheet.create({
        
        RoleMain : {
            borderBottomWidth: 1,
            borderColor:"rgba(0, 0, 0, 0.15)",
            display:"flex",
            flexDirection: "row",
        },
        Real : {
            marginRight: 10,
            marginLeft: 10,
            marginBottom: 0,
            marginTop: 10,
            paddingBottom: 2,
            cursor: "pointer",
            color:"#868686"
           

        },
        TCG : {
            borderBottomWidth: 3,
            borderColor:"#4297EC",
            
        },
        formMain : {
            marginRight: 25,
            marginLeft: 25,
            marginTop: 5,
            position:'relative',
            
          },
        formInput: {
            height: 40,
            marginTop: 20,
            borderColor: '#ffff',
            boxShadow: "0 0 15 rgba(0, 0, 0, 0.15)",
            borderWidth: 1,
            borderRadius: 3,
            width: "100%",
            paddingLeft: 18,
            fontSize: 20,
           marginBottom: 4,
           backgroundColor: "#ffff",
           placeholderTextColor: '#333'
        },
         
          ImageSearch : {
            position: "absolute",
            right: 18,
            top: 26,
          },
          MainRows : {
            display:"flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:"center",
            marginLeft: 10,
            marginRight: 10,
            marginTop:20,
          },
          textRun : {
            fontFamily: 'Poppins',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 20,
            color: "#000000"
          },
          textFilter : {
            fontFamily: 'Poppins',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 14,
            color: "#868686",
            marginTop: -14,
            
          },
          MainCards : {
             display : "flex",
             flexDirection: "row",
             marginRight: 5,
             marginLeft: 5,
             marginTop: 18,
             

          },
          PanniClearly : {
            backgroundColor: "#ffff",
                borderWidth: 1,
                borderColor: "red",
                padding: 5,
                marginLeft: 8,
                marginRight: 8,
                borderRadius: 4
                
          },
          PanniClearly32 : {
            backgroundColor: "#ffff",
                borderWidth: 1,
                borderColor: "red",
                padding: 5,
                marginLeft: 8,
                marginRight: 8,
                borderRadius: 4,
                marginBottom: 220,
                
          },
          
          MainTerm : {
           display:'flex',
           flexDirection: "row",
           justifyContent:"space-between",
           
           
          },
          Donruss : {
             color: "#000000",
             width:150,
             marginTop: 5,

          },
          createNow : {
            color: "#000000",
            fontSize: 12,
            backgroundColor:"#868686",
            borderColor:"#868686",
            borderRadius: 25,
            padding: 3,
            marginTop: 2

          },
          easter : {
            fontSize:9,
            marginTop: 5,
            marginBottom: 10,
            color: "#000000",
          },
          SportImg : {
             width: 150,
             height: 200
          },
          Handing : {
           borderBottomWidth: 1,
           borderBottomColor: "#E5E5E5"

          },
          peraCard : {
            marginLeft: 12,
            marginBottom: 10,
            marginTop: 18,
            fontFamily: 'Poppins',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 22,
           lineHeight: 27,
           color:"#000000"
          },
        
         


          
    });
    const [change , SetChange] = useState("1");
    const handelChange = (value) => {
        SetChange(value)
    }
    return (
        <>
       
      <View style={styles.RoleMain} >
        <Text  style={[styles.Real , change=="1" ? styles.TCG : null]}
        onPress={() => handelChange("1") } >Sports Card TCG</Text>
        <Text style={[styles.Real , change=="2" ? styles.TCG : null]} onPress={() => handelChange("2") }  >Tickets</Text>
        <Text style={[styles.Real , change=="3" ? styles.TCG : null]} onPress={() => handelChange("3") } >Comic Books</Text>
        <Text style={[styles.Real , change=="4" ? styles.TCG : null]} onPress={() => handelChange("4") } >Video Games</Text>
      </View>
      <View style={styles.formMain} >
      <TextInput
       style={styles.formInput}
       value=""
       placeholderTextColor="#D0D0D0"
       placeholder="Search"
       secureTextEntry={true}
       keyboardType="text"
     />
     
     <Image style={styles.ImageSearch} source={Search} />
     </View>
     <View  style={styles.MainRows} >
        <Text style={styles.textRun} >Comic Books/Magazines</Text>
        <Text  style={styles.textFilter}>Filter by <Image  source={Filter} /></Text>
     </View>
     <View style={styles.MainCards}>
     <View style={styles.PanniClearly}>
     <Image  style={styles.SportImg}  source={Sport} />
     <Text style={styles.Donruss} >2021 Panni Clearly Donruss</Text>
     <Text style={styles.easter}>(W) Wmms Air Jordan 5 retro “easter”</Text>
     <View style={styles.MainTerm} >
        <Text><Image source={Heart} /></Text>
        <Text style={styles.createNow}>Create Trade<Image source={IconCircle} /></Text>
     </View>
     </View>
     <View style={styles.PanniClearly} >
     <Image style={styles.SportImg}  source={Sport} />
     <Text style={styles.Donruss} >2021 Panni Clearly Donruss</Text>
     <Text style={styles.easter}>(W) Wmms Air Jordan 5 retro “easter”</Text>
     <View style={styles.MainTerm} >
        <Text><Image source={Heart} /></Text>
        <Text style={styles.createNow}>Create Trade<Image source={IconCircle} /></Text>
     </View>
     </View>
     </View>
     <View style={styles.Handing}>
     <Text style={styles.peraCard} >Sports Cards/TCG</Text>
     </View>
     <View style={styles.MainCards}>
     <View style={styles.PanniClearly}>
     <Image  style={styles.SportImg}  source={Sport} />
     <Text style={styles.Donruss} >2021 Panni Clearly Donruss</Text>
     <Text style={styles.easter}>(W) Wmms Air Jordan 5 retro “easter”</Text>
     <View style={styles.MainTerm} >
        <Text><Image source={Heart} /></Text>
        <Text style={styles.createNow}>Create Trade<Image source={IconCircle} /></Text>
     </View>
     </View>
     <View style={styles.PanniClearly} >
     <Image style={styles.SportImg}  source={Sport} />
     <Text style={styles.Donruss} >2021 Panni Clearly Donruss</Text>
     <Text style={styles.easter}>(W) Wmms Air Jordan 5 retro “easter”</Text>
     <View style={styles.MainTerm} >
        <Text><Image source={Heart} /></Text>
        <Text style={styles.createNow}>Create Trade<Image source={IconCircle} /></Text>
     </View>
     </View>
     </View>
     <View style={styles.Handing}>
     <Text style={styles.peraCard} >Video Games</Text>
     </View>
     <View style={styles.MainCards}>
     <View style={styles.PanniClearly}>
     <Image  style={styles.SportImg}  source={Sport} />
     <Text style={styles.Donruss} >2021 Panni Clearly Donruss</Text>
     <Text style={styles.easter}>(W) Wmms Air Jordan 5 retro “easter”</Text>
     <View style={styles.MainTerm} >
        <Text><Image source={Heart} /></Text>
        <Text style={styles.createNow}>Create Trade<Image source={IconCircle} /></Text>
     </View>
     </View>
     <View style={styles.PanniClearly} >
     <Image style={styles.SportImg}  source={Sport} />
     <Text style={styles.Donruss} >2021 Panni Clearly Donruss</Text>
     <Text style={styles.easter}>(W) Wmms Air Jordan 5 retro “easter”</Text>
     <View style={styles.MainTerm} >
        <Text><Image source={Heart} /></Text>
        <Text style={styles.createNow}>Create Trade<Image source={IconCircle} /></Text>
     </View>
     </View>
     </View>
     <View style={styles.Handing}>
     <Text style={styles.peraCard} >VHS</Text>
     </View>
     <View style={styles.MainCards}>
     <View style={styles.PanniClearly32}>
     <Image  style={styles.SportImg}  source={Sport} />
     <Text style={styles.Donruss} >2021 Panni Clearly Donruss</Text>
     <Text style={styles.easter}>(W) Wmms Air Jordan 5 retro “easter”</Text>
     <View style={styles.MainTerm} >
        <Text><Image source={Heart} /></Text>
        <Text style={styles.createNow}>Create Trade<Image source={IconCircle} /></Text>
     </View>
     </View>
     <View style={styles.PanniClearly32} >
     <Image style={styles.SportImg}  source={Sport} />
     <Text style={styles.Donruss} >2021 Panni Clearly Donruss</Text>
     <Text style={styles.easter}>(W) Wmms Air Jordan 5 retro “easter”</Text>
     <View style={styles.MainTerm} >
        <Text><Image source={Heart} /></Text>
        <Text style={styles.createNow}>Create Trade<Image source={IconCircle} /></Text>
     </View>
     </View>
     </View>
      </>
    )
}

export default Rating