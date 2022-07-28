import React from "react";
import {View , Text } from "react-native";
import  SigUp  from "./SigUp";
import  Login  from "./Login";
import Home  from "./Home";
import ProductScreen from "../NewProject/component/screens/ProductScreen";
import ProductScren from "../NewProject/component/screens/ProductScreen";
import DashBoardScreen from "./component/screens/DashBoardScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const SlabExchange = () => {
    return (

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
      </Stack.Navigator> 
    </NavigationContainer>
    )
}

export default SlabExchange;