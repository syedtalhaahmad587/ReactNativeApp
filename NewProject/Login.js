import { View, Text, TextInput , onChangeText , 
    SafeAreaView, ScrollView, Image, Icon , label  , TouchableOpacity, StyleSheet , ImageBackground , Button , onPress } from 'react-native';
import React from 'react';
import background from '../assets/background.png';
import SlabIcon from '../assets/SlabIcon.png';
import Facebook from '../assets/google.png';
import Google from '../assets/fbIcon.png';
import FontAwesome, { facebookSquare } from 'react-native-fontawesome';

export default function Login({navigation}) {
   const [text, onChangeText] = React.useState("");
   const [number, onChangeNumber] = React.useState(null);
   const [number2, onChangeNumber2] = React.useState(null);
   const [number3, onChangeNumber3] = React.useState(null);
   const styles = StyleSheet.create({
     formLabel : {
      marginLeft: 25,
      marginTop: 5,
      fontWeight: "bold",
      fontFamily: "Poppins",
      color:"#BCBCBC",
     },
     formLabel1 :{
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
     },
       main: {
           marginVertical: 10,
           paddingBottom: 45
       },
       buttonChange : {
          backgroundColor: "#4297EC"
       }, 
       formInput: {
        height: 45,
        // borderColor: '#BCBCBC',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        borderColor: "rgba(43, 67, 93, 0.18)",
        width: "100%",
        color:"black",
        marginBottom: 15,
         },
         formInput2: {
           height: 40,
           borderColor: '#0057FF',
           borderWidth: 1,
           borderRadius: 8,
           borderStyle: "solid",
           padding: 10,
           color:"black"
         },
       image: {
           display: "flex",
           alignItems: "center",
           width: "100%",
           height: 200,
         },
       mainInner: {
           flex: 1,
           justifyContent: 'center',
           backgroundColor: "black",
           color: "white",
           paddingVertical: 10
       },
       header: {
           flexDirection: 'row',
           paddingVertical: 10
       },
       headerImgView: {
           marginHorizontal: 10
       },
       headertImgInner: {
           width: 100,
           height: 100,
           borderRadius: 60
       },
       headerText: {
           marginTop: 4,
           color: "white"
       },
       headerTextInner: {
           color: "white"
       },
       titleMain: {
           margin: 5
       },
       centerMainImg: {
           width: 360,
           height: 210,
           resizeMode: 'contain'
       },
       colorBlack: {
           color: "black"
       },
       button: {
           alignItems: "center",
           backgroundColor: "#DDDDDD",
           padding: 10
       },
       navMain: {
           flexDirection: "row",
           marginVertical: 10,
           alignContent: "center",
           alignItems: "center",
           alignSelf: "center"
       },
       navBtn: {
           marginHorizontal: 10,
           backgroundColor: "black",
           borderRadius: 10
       },
       navBtnTxt: {
           color: "white",
           padding: 10
       },
       NowText: {
        color: "#4297EC",
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 36,
        fontFamily:"Poppins",
        textAlign: "center",
        marginTop:0,
        marginBottom: 25,
         },
         ImageIcon : {
            width: 70,
            height: 70,
            marginTop: 40
         },
         main2 : {
           flexDirection: "row",
           flexWrap: "wrap",
           marginLeft:10,
           marginRight:10,
           marginTop:10,
           marginBottom: 10,
           justifyContent: "center"

         },
         main1 : {
           marginRight: 5,
           marginLeft: 5,
           color: "#4297EC",
         },
         btn12 : {
           alignContent:"center",
            backgroundColor: "#4297EC",
            paddingBottom: 10,
            borderWidth: 1,
            color:"#fff",
           borderColor: "#4297EC",
           textAlign:"center",
           marginRight: 10,
           marginLeft: 10,
           marginTop: 10,
           borderRadius: 8,
           paddingTop:12,
           paddingBottom:12,
           display:"flex",
           flexDirection:"row",
           alignItems: "center",
           fontFamily: 'Poppins',
           fontStyle: "normal",
           fontWeight: "500",
         },

         btn1 : {
           alignContent:"center",
            backgroundColor: "#0057FF",
            paddingBottom: 10,
            borderWidth: 1,
           borderColor: "#0057FF",
           textAlign:"center",
           marginRight: 10,
           marginLeft: 10,
           marginTop: 10,
           borderRadius: 4,
         },  
         btn2 : {
           paddingTop: 0,
           alignContent:"center",
            backgroundColor: "#fff",
            paddingBottom: 10,
            borderWidth: 1,
           borderColor: "#B7B7B7",
           textAlign:"center",
           marginRight: 10,
           marginLeft: 10,
           marginTop: 10,
           borderRadius: 4,
         },
         FormButton : {
            marginRight: 10,
            marginLeft: 10,
            marginTop: 100,
         },
         btnText : {
           color: "black",
          
         },
         btnText1 : {
           color: "#ffff",
         },
         ImageRun : {
           width: 25,
           height: 25,
         },
         EmailText : {
           marginRight:24,
           marginLeft: 24,
           marginBottom: 5,
           marginTop: 5,
           
         },
         PasswordText : {
          marginRight:24,
          marginLeft: 24, 
           marginTop: 5,
        },
        accountText : {
          color: "#BCBCBC",
        },
        formLabel12 : {
          marginTop:8,
          marginRight: 10,
          marginLeft: 10,
        }

   })
 return (
   <>
   <View>
       <ImageBackground source={background} style={styles.image}>
     <Image style={styles.ImageIcon} source={SlabIcon} />
   </ImageBackground>
   <View>
   <Text style={styles.NowText}>Login</Text>
     <Text style={styles.formLabel}>Email</Text>  
     <View style={styles.EmailText}>
     <TextInput
        style={styles.formInput}
       onChangeText={onChangeText}
       value={text}
     />
     </View>
     <Text style={styles.formLabel} >Enter Password</Text>
     <View style={styles.PasswordText} >
     <TextInput
       style={styles.formInput}
       onChangeText={onChangeNumber}
       value={number}
       placeholder=""
       secureTextEntry={true}
       keyboardType="text"
     />
     </View>
     <View style={styles.FormButton}>
     <View style={styles.formLabel12}>
      <TouchableOpacity>
     <Text style={styles.btn12}
      onPress={() => navigation.navigate("tabs")}
     >LOGIN</Text>      
     </TouchableOpacity> 
     </View>
     
     <View style={styles.main2}>
       <Text style={styles.accountText}>ALready have an account?</Text>
       <Text style={styles.main1} onPress={() => navigation.navigate("SigUp")}  >Login</Text>
     </View>
     </View>
     </View>
   </View>
   </>
 )
}