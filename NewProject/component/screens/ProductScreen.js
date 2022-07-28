import React from 'react';
import {
  View,
  Text,
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
} from 'react-native';
import image from '../../../assets/4bNcfx9DftHRdlSy.png';
import Circle from '../../../assets/RealCircle.png';
import Sport from "../../../assets/61pH6i+KGTL.png";
import Heart from "../../../assets/Heart.png";
import IconCircle from "../../../assets/IconCircle.png"
const {width, height} = Dimensions.get('window');

const ProductScreen = ({navigation}) => {
  const styles = StyleSheet.create({
    cardView: {
      width: width - 20,
      height: 'auto',
      backgroundColor: '#FFFFFF',
      margin: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0.5, height: 0.5},
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 5,
    },
    btn20: {
      marginRight: 18,
      marginLeft: 18,
      marginTop: 25,
      backgroundColor: '#4297EC',
      borderColor: '#4297EC',
      color: '#2B435D',
      borderRadius: 3,
      borderWidth: 1,
      paddingTop: 2,
      paddingBottom: 7,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fffff',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: '700',
    },
    MainRole: {
      display: 'flex',
      flexDirection: 'row',
    },
    image: {
      width: 150,
      height: 200,
      borderRadius: 10,
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
    },
    RookieCard: {
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 18,
      lineHeight: 19,
      color: '#000000',
      paddingRight: 20,
      paddingLeft: 20,
      paddingBottom: 5,
      width: 180,
      paddingTop: 14,
    },
    HowardPera: {
      color: '#000000',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 15,
      textTransform: 'capitalize',
      paddingLeft: 20,
      width: 180,
    },
    HowardScale: {
      color: '#000000',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 15,
      textTransform: 'capitalize',
      paddingLeft: 20,
      paddingTop: 5,
    },
    lastSale: {
      color: '#868686',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 12,
      lineHeight: 15,
      textTransform: 'capitalize',
    },
    TardeCreate: {
      background: '#ffff',
      color: 'red',
    },
    USDollar: {
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 20,
      fontSize: 17,
      color: '#ffff',
      marginBottom: 15,
    },
    PrizeTrade: {
      display: 'flex',
      flexDirection: 'row',
      marginRight: 20,
      marginLeft: 20,
      marginTop: 55,
    },
    Price: {
      marginRight: 20,
      color: '#ffff',
    },
    Image12: {
      marginLeft: 4,
      marginRight: 4,
    },
    RelatedText : {
        fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 22,
      color: "rgba(0, 0, 0, 0.8)",
      marginLeft: 20
    },
    MainDetails : {
       borderBottomWidth: 1,
       paddingBottom:8
    },
    details : {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 22,
        color: "rgba(0, 0, 0, 0.8)",
        marginLeft: 15,
        marginTop: 15,
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
           borderColor: "#D0D0D0",
           padding: 5,
           marginLeft: 8,
           marginRight: 8,
           borderRadius: 4
           
     },
     PanniClearly32 : {
       backgroundColor: "#ffff",
           borderWidth: 1,
           borderColor: "#D0D0D0",
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
     Products : {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 8,
        marginBottom: 20,
     },
     Product : {
        display:"flex",
        color:"#0000",
        flexDirection: "row",
        justifyContent:"space-between"
     },
     Product1 : {
        color:"#868686",
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
       lineHeight: 27,
       

     },
     Latest : {
        color:"#000000",
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
       lineHeight: 27,
     }

  });
  return (
    <>
    <ScrollView>
      <View style={styles.cardView}>
        <View style={styles.MainRole}>
          <View>
            <Image style={styles.image} source={image} />
          </View>
          <View>
            <View>
              <Text style={styles.RookieCard}>2021 Panni Clearly Donruss</Text>
              <Text style={styles.HowardPera}>
                Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
                tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Text style={styles.HowardScale}>
                <Text style={styles.lastSale}>Last Sale:</Text> $118
              </Text>
              <TouchableOpacity>
                <Text
                  style={styles.btn20}
                  onPress={() => navigation.navigate('DashBoard')}>
                  Create trade <Image style={styles.Image12} source={Circle} />{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text     style={styles.RelatedText} >Related Products</Text>
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
     <View style={styles.MainDetails} >
        <Text style={styles.details} >Product details</Text>
     </View>
     <View style={styles.Products} >
          <View style={styles.Product} >
             <Text style={styles.Product1}  >Product Line</Text>
             <Text style={styles.Latest} >Latest edition</Text>
            </View>
            <View style={styles.Product}  >
             <Text style={styles.Product1} >Year</Text>
             <Text style={styles.Latest} >2022</Text>
            </View>    
            <View style={styles.Product}  >
             <Text style={styles.Product1} >Greade</Text>
             <Text style={styles.Latest} >PSA 10</Text>
            </View>  
            <View style={styles.Product}  >
             <Text style={styles.Product1} >Greading Company</Text>
             <Text style={styles.Latest} >PSA</Text>
            </View>  
     </View>
     </ScrollView>
     
    </>
  );
};

export default ProductScreen;
