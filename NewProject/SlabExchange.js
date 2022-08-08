import React from "react";
import {View , Text } from "react-native";
import  SigUp  from "./SigUp";
import  Login  from "./Login";
import Home  from "./Home";
import ProductScreen from "../NewProject/component/screens/ProductScreen";
import DashBoardScreen from "./component/screens/DashBoardScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Referral from "../NewProject/component/screens/Referral";
import TradeCenter from "../NewProject/component/screens/TradeCenter";
import MyTabs from "../NewProject/component/NavTab";
const Stack = createNativeStackNavigator();

const SlabExchange = () => {
    return (
        <>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ unmountOnBlur: true, headerShown: false }}
        />
        <Stack.Screen 
        name="SigUp"
        options={{ unmountOnBlur: true, headerShown: false }} 
        component={SigUp} />
        <Stack.Screen 
        name="tabs"
        options={{ unmountOnBlur: true, headerShown: false }} 
        component={MyTabs} />
        
        {/* <Stack.Screen 
        options={{ unmountOnBlur: true, headerShown: false }} 
        name="Home" 
        component={Home} />  
        <Stack.Screen 
        options={{ title: 'Product' }}
        name="Product" 
        component={ProductScreen} />  
        <Stack.Screen 
        options={{ title: 'DashBoard' }}
        name="DashBoard" 
        component={DashBoardScreen} /> 
        <Stack.Screen 
        options={{ title: 'Referral' }}
        name="Referral" 
        component={Referral} />
        <Stack.Screen 
        options={{ title: 'TradeCenter' }}
        name="TradeCenter" 
        component={TradeCenter} />   */}
      </Stack.Navigator> 
    </NavigationContainer>
      
    </>
    )
}

export default SlabExchange;