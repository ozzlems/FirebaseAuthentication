import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation(){
const {user} = useAuth();
  if(user) { 
    return(
        <NavigationContainer>
         <Stack.Navigator initalRouteName='Home'>
            <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}></Stack.Screen>
         
         </Stack.Navigator>


        </NavigationContainer>
    )
}
else{

}return(
        <NavigationContainer>
         <Stack.Navigator initalRouteName='Welcome'>
         <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
         </Stack.Navigator>


        </NavigationContainer>
    )
}
