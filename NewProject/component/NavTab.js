import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Home"
import ProductScreen from "../../NewProject/component/screens/ProductScreen";
import DashBoardScreen from "../component/screens/DashBoardScreen";
import Referral from "../../NewProject/component/screens/Referral";
import TradeCenter from "../../NewProject/component/screens/TradeCenter";
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Menu from "../component/screens/Menu";
const Tab = createBottomTabNavigator();

const MyTabs = () =>  {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Menu" component={Menu} /> */}
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      <Tab.Screen 
        options={{ unmountOnBlur: true, headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="logout" color={'red'} size={size} />
            ), 
        
        }} 
        name="Home" 
        component={Home} 
        />  
        <Tab.Screen 
        options={{ title: 'Product' }}
        name="Product" 
        component={ProductScreen} />  
        <Tab.Screen 
        options={{ title: 'DashBoard' }}
        name="DashBoard" 
        component={DashBoardScreen} /> 
        <Tab.Screen 
        options={{ title: 'Referral' }}
        name="Referral" 
        component={Referral} />
        <Tab.Screen 
        options={{ title: 'TradeCenter' }}
        name="TradeCenter" 
        component={TradeCenter} />
    </Tab.Navigator>
  );
}


export default MyTabs