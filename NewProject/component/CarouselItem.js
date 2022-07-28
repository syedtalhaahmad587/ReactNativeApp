import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
  onPress,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import image from '../../assets/4bNcfx9DftHRdlSy.png';


const CarouselItem = ({item , navigation }) => {
  return (
    <>
      <View style={styles.cardView}>
        <View style={styles.MainRole}>
          <View>
            <Image style={styles.image} source={image} />
          </View>
          <View>
            <View>
              <Text style={styles.RookieCard}>ROOkIE CARD</Text>
              <Text style={styles.HowardPera}>
                Ryan Howard RC philadelphia phillies studio baseball rookir card
              </Text>
              <TouchableOpacity>
                <Text style={styles.btn20}
                    onPress={() => navigation.navigate("Product")}
                >Create trade</Text>
              </TouchableOpacity>
              <View style={styles.PrizeTrade}>
                <Text style={styles.Price}>Price:</Text>
                <Text style={styles.USDollar}>US $23.91</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: width - 20,
    height: "auto",
    backgroundColor: '#4297EC',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  btn20: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#ffff',
    borderColor: '#ffff',
    color: '#2B435D',
    borderRadius: 3,
    borderWidth: 1,
    padding: 5,
    textAlign: 'center',
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
  },
  RookieCard: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 19,
    color: '#ffff',
    padding: 20,
  },
  HowardPera: {
    color: '#ffff',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    textTransform: 'capitalize',
    paddingLeft: 20,
    width: 180,
  },
  TardeCreate: {
    background: '#ffff',
    color: 'red',
  },
  USDollar: {
    fontFamily: 'SF Pro Display',
    fontStyle: "normal",
    fontWeight: "700",
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
});

export default CarouselItem;
