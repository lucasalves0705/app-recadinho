import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "./Login"
import ListMessage from './ListMessage'
import Message from './Message'

const Stack = createNativeStackNavigator();

export default props=>{

    return(
        <Stack.Navigator initialRouteName="ListMessage" screenOptions = {{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="ListMessage" component={ListMessage}></Stack.Screen>
            <Stack.Screen name="Message" component={Message}></Stack.Screen>
        </Stack.Navigator>
    )
}
