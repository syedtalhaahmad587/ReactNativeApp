import React, { Component, useState } from 'react';
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
import CopyImage from "../../../assets/fluent.png";
import Menu from './Menu';
import Card from './card';

const TradeCenter = () => {

  const [change, SetChange] = useState('1');
  const [changeTrade, SetChangeTrade] = useState("1");
  const [ handle , SetHandle] = useState('1');
  const [ showBtn , SetShowBtn] = useState(false);
  const handelChange = value => {
    SetChange(value);
    
  };
  const TradeHandle = value => {
    SetChangeTrade(value);

  };
  const handelState = value => {
    SetHandle(value)
  };
    return (
        <>
       <ScrollView style={{width:"100%"}}>  

<View>
  <Text style={styles.one}>Trade Center</Text>
  {/* <View style={styles.three}></View> */}
  <View style={styles.two}>
    <Text style={[styles.four,  change=="1" ? styles.OpenTrade : null ]} 
     onPress={() => handelChange('1')}
     >Open Trade
     </Text>
    <Text style={[styles.four , change=="2" ? styles.OpenCompleted : null ]}
     onPress={() => handelChange('2')}
    >  Completed</Text>
  </View>
  {/* <View style={styles.three}></View> */}
  <View style={styles.next}>
  {change=="1" && 
  <>
    <TouchableOpacity style={[handle=="1" ? styles.new : styles.five  ]}>
      <Text  style={[handle=="1" ? styles.colorBar : styles.six  ]}
        onPress={() => handelState('1')}
      >Received</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[handle=="2" ? styles.new : styles.five  ]}>
      <Text style={[handle=="2" ? styles.colorBar : styles.six  ]}
        onPress={() => handelState('2')}
      >Sent</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[handle=="3" ? styles.new : styles.five  ]}>
      <Text style={[handle=="3" ? styles.colorBar : styles.six  ]}
        onPress={() => handelState('3')}
      >Accepted</Text>
    </TouchableOpacity>
    </>
    }
    {change=="2" && <>
    <TouchableOpacity style={[changeTrade=="1" ? styles.new : styles.five  ]}>
      <Text style={[handle=="2" ? styles.colorBar : styles.six  ]}
        onPress={() => TradeHandle('1')}
      >Sent</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[changeTrade=="2" ? styles.new : styles.five  ]}>
      <Text style={[handle=="3" ? styles.colorBar : styles.six  ]}
        onPress={() => TradeHandle('2')}
      >Accepted</Text>
    </TouchableOpacity>
    </> }
  </View>

  {change=="1" &&
         <>
         {handle=="1" && 
     <> 
    <Card />
    <Card />
    </>
  }
 {handle=="2" && 
     <> 
     <View style={styles.SendMer} >
    <Text style={styles.OfferText} >You have no offers</Text>
    <View style={styles.creating} >
    <Text style={styles.createSend} >Create Trade</Text>
    </View>
    </View>
    </>
  }
  {handle=="3" && 
     <> 
    <Card />
    <Card />
    </>

  }
       </>
        }

        {changeTrade=="1" && <>
           <Card />
           <Card />
        </>  }

        {changeTrade=="2" && <>
        <Card TradeCancel="true"  />
           <Card  TradeCancel="true"  />
           </>  }


  <View>
    {/* <Menu /> */}
    
  </View>
</View>

</ScrollView>

      </>
    )
}

export default TradeCenter;

const styles = StyleSheet.create({
  one: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20, 
    fontWeight: 'bold',
  },
  two: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 0.5,
    borderColor: '#868686',
    marginLeft: 1,
    marginRight: 1,

    
  },
  three: {
    borderWidth: 0.5,
    borderColor: '#868686',
    
  },
  four: {
    fontSize: 15,
    color: "#868686",
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    borderColor:"#D0D0D0",
    borderBottomWidth: 2,
    width: 180,
    textAlign:"center",  
    paddingBottom: 10,
    paddingTop: 10,
    
  },
  OpenTrade : {
    borderBottomWidth: 3,
    // width: 200,
    // textAlign:"center",  
    borderColor: "#4297EC",
    // paddingBottom: 10,
    // paddingTop: 10,
  },
  
  OpenCompleted : {
    borderBottomWidth: 3,
    // width: 200,
    // paddingBottom: 10,
    // paddingTop: 10,
    borderColor: "#4297EC",
    // textAlign:"center"
  },
  five: {
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#E3E3E3',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor:"#E3E3E3",
  },
  next: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom:20,
    justifyContent: 'space-evenly',
    marginLeft: 25,
    marginRight: 25,
  },
  six: {
    color: '#868686',
    fontSize: 16,
    paddingRight: 10,
    paddingLeft: 10,
  },  
  colorBar: {
    color: "#ffff",
    fontSize: 16,
    paddingRight: 10,
    paddingLeft: 10,
  },
  new : {
    backgroundColor : "#3D3D3D",
    borderWidth: 1,
    borderColor: "#3D3D3D",
    borderRadius: 50,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
  },
  SendMer : {
     textAlign:"center",
     marginTop: 80,
  },
  OfferText : {
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    color: "#868686",
    textAlign:"center"
  },
  creating : {
   display:"flex",
   flexDirection:"row",
   justifyContent:"center",
   fontFamily: 'Poppins',
   fontStyle: "normal",
   fontWeight: "500",

  },
  createSend : {
    color: "#fff",
    fontSize: 12,
    backgroundColor: "#4297EC",
    borderColor: "#4297EC",
    borderRadius: 5,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 2,
    borderWidth: 1,
    width: 250,
    marginTop: 15,
   fontFamily: 'Poppins',
   fontStyle: "normal",
   fontWeight: "500",
    textAlign:"center",
  
  },
});
