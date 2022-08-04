import { Text,
    View ,
    TextInput,
    onChangeText,
    SafeAreaView,
    ScrollView,
    Image,
    Icon,
    label,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Button,
    onPress,
    Dimensions, 
} 
    from 'react-native'
import React, { Component } from 'react'
import CopyImage from "../../../assets/fluent.png";

const Referral = () => {

    const styles = StyleSheet.create({
        DashRef : {
           
        },
        Referral: {
            fontFamily: 'Poppins',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 14,
            color: "#868686",
            paddingTop: 20,
            paddingRight: 15,
            paddingLeft: 15
        },  
        copy : {
           margin: 24,
           display:"flex",
           flexDirection:"row",
           justifyContent:"center"
        },
        formRef : {
            borderWidth: 1,
            borderRadius: 10,
            borderColor:"#D9D9D9",
            
        },
        ImageIcon : {
         position:"absolute",
         right:25,
         top:12
        },
        Share : {
            marginRight: 80,
            marginLeft: 80,
            marginTop: 30,
            
        },
        ShareLink : {
            alignContent:"center",
             backgroundColor: "#0057FF",
             paddingBottom: 10,
             borderWidth: 1,
            borderColor: "#0057FF",
            textAlign:"center",
            paddingTop:20,
            paddingBottom:20,
            borderRadius: 25,
          },
          peraLink : {
             marginRight: 50,
            marginLeft: 50,
            marginTop: 30,
          },
          LinkText : {
            fontFamily: 'Poppins',
            fontStyle: "normal",
            fontWeight: "600",
            color: "#868686",
           
          },
          Steps : {
            marginTop: 40,
          },
          step1 : {
            marginBottom: 12,
          },
          stepKey  : {
            fontFamily: 'Poppins',
            fontStyle: "normal",
            fontWeight: "600",
            color:"#3D3D3D",
          }
          
 
      })
    return (
        <>
      <View style={styles.DashRef} >
        <Text style={styles.Referral} >Your Customer referral link is:</Text>
        <View style={styles.copy} >
        <TextInput
        style={styles.formRef}
       onChangeText={onChangeText} 
       placeholder="https://www.figma.com/file/QJ9F6YGV7yco....."
       />
       <Image style={styles.ImageIcon} source={CopyImage} />
       </View>
       <View style={styles.Share} >
       <Button
             style={styles.ShareLink}
       title="Login"
       color="#4297EC"
       onPress={() => navigation.navigate("SigUp")}
       />
       </View>
      </View>
      <View   style={styles.peraLink} >
      <Text style={styles.LinkText} >You will receive $5 every time someone you refer completes their first trade!</Text>
      <View style={styles.Steps} >
     <Text style={[styles.LinkText,styles.step1]} ><Text style={styles.stepKey} >Step 1:</Text> Copy your referral link. </Text>
     <Text style={[styles.LinkText,styles.step1]} ><Text style={styles.stepKey} >Step 2:</Text> Share it with your friends, family, followers....</Text>
     <Text style={styles.LinkText} ><Text style={styles.stepKey} >Step 2:</Text> Cash in as they start trading.</Text>
     </View>
      </View>
      </>
    )
}

export default Referral