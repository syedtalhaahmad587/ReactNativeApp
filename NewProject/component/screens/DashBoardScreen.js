import React, {useState} from 'react';
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
import Search from '../../../assets/Search.png';
import Group4534615 from '../../../assets/Group4534615.png';
import Wallet from '../../../assets/Vector9.png';
import {DataTable} from 'react-native-paper';
import ImageFie from '../../../assets/61pH6i+KGTL.png';
import Popup from "./Modal";

const DashBoardScreen = ({navigation}) => {
  const styles = StyleSheet.create({
    Dash: {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
    },
    MainDash: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 40,
      paddingLeft: 20,
      paddingTop: 10,
      paddingBottom: 10,
      borderWidth: 1,
      borderColor: '#E4E4E4',
      boxShadow: '0 0 7 rgba(0, 0, 0, 0.15)',
      borderRadius: 5,
      width: '100%',
    },
    total: {
      color: '#B7B7B7',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 20,
      lineHeight: 19,
    },
    num: {
      color: '#000000',
      borderWidth: 1,
      borderColor: '#E4E4E4',
      borderRadius: 5,
      borderColor: '#E4E4E4',
      textAlign: 'center',
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 5,
      paddingBottom: 5,
    },
    ImgSourceBoard: {
      height: 25,
      width: 25,
    },
    ImgSourceBoard2: {
      height: 25,
      width: 25,
      borderRadius: 25,
    },
    colorText: {
      paddingTop: 5,
      textAlign: 'center',
      borderWidth: 1,
      borderColor: 'rgba(25, 118, 210, 0.18)',
      borderRadius: 25,
      backgroundColor: 'rgba(25, 118, 210, 0.18)',
      width: 50,
      height: 50,
    },
    RoleMain: {
      borderBottomWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.15)',
      display: 'flex',
      flexDirection: 'row',
      marginTop: 25,
      justifyContent: 'space-evenly',
    },
    Real: {
      marginRight: 10,
      marginLeft: 10,
      marginBottom: 0,
      marginTop: 10,
      paddingBottom: 2,
      cursor: 'pointer',
      color: '#868686',
      fontSize: 18,
      textAlign: 'center',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 18,
      lineHeight: 21,
      width: 100,
    },
    TCG: {
      borderBottomWidth: 3,
      borderColor: '#4297EC',
    },
    formMain: {
      marginRight: 5,
      marginLeft: 5,
      marginTop: 5,
      position: 'relative',
    },
    formInput: {
      height: 40,
      marginTop: 20,
      borderColor: '#ffff',
      boxShadow: '0 0 15 rgba(0, 0, 0, 0.15)',
      borderWidth: 1,
      borderRadius: 3,
      width: '100%',
      paddingLeft: 18,
      fontSize: 20,
      marginBottom: 4,
      backgroundColor: '#ffff',
      placeholderTextColor: '#333',
    },

    ImageSearch: {
      position: 'absolute',
      right: 18,
      top: 26,
    },
    MainRows: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 20,
    },
    container: {
      paddingTop: 20,
      paddingHorizontal: 0,
    },
    container2: {
      // marginLeft:20
    },
    ImgWallet: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: "500",
      fontSize: 14,
      color: "#4297EC",
      position:"absolute",     
       right:0,
       top: -20,
       zIndex:20,

    },
  });
  const [change, SetChange] = useState('1');
  const handelChange = value => {
    SetChange(value);
  };
  return (
    <>
      <ScrollView>
        <View>

          <Text style={styles.ImgWallet}
            onPress={() => navigation.navigate("Referral")}>
            My Wallet <Image style={styles.ImgSourceBoard} source={Wallet} />{' '}
          </Text>
        </View>
        <View style={styles.Dash}>
          <View style={styles.MainDash}>
            <Text style={styles.colorText}>
              <Image style={styles.ImgSourceBoard} source={Group4534615} />
            </Text>
            <Text style={styles.total}>Total Cards</Text>
           
            <Text style={styles.num}>2</Text>
          </View>
        </View>
        <View>
          <View style={styles.RoleMain}>
            <Text
              style={[styles.Real, change == '1' ? styles.TCG : null]}
              onPress={() => handelChange('1')}>
              Current
            </Text>
            <Text
              style={[styles.Real, change == '2' ? styles.TCG : null]}
              onPress={() => handelChange('2')}>
              Pending
            </Text>
            <Text
              style={[styles.Real, change == '3' ? styles.TCG : null]}
              onPress={() => handelChange('3')}>
              History
            </Text>
          </View>
          <View style={styles.formMain}>
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
        </View>
        <View style={styles.container}>
          <DataTable>
            <DataTable.Header style={styles.container2}>
              <DataTable.Title>Item</DataTable.Title>
              <DataTable.Title numeric>Order No</DataTable.Title>
              <DataTable.Title numeric>Sale Date</DataTable.Title>
              <DataTable.Title numeric>Sale Price</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row style={styles.container2}>
              <DataTable.Cell>
                <Image style={styles.ImgSourceBoard2} source={ImageFie} /> 2021
                Panni Cle....{' '}
              </DataTable.Cell>
              <DataTable.Cell numeric>03245</DataTable.Cell>
              <DataTable.Cell numeric>04/26/2022</DataTable.Cell>
              <DataTable.Cell numeric>$110</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>
                <Image style={styles.ImgSourceBoard2} source={ImageFie} /> 2021
                Panni Cle....{' '}
              </DataTable.Cell>
              <DataTable.Cell numeric>03245</DataTable.Cell>
              <DataTable.Cell numeric>04/26/2022</DataTable.Cell>
              <DataTable.Cell numeric>$110</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
        <Popup />
      </ScrollView>
    </>
  );
};

export default DashBoardScreen;
