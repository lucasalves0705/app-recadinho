import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Login'
import LoginVip from './LoginVip'
import ListMessage from './ListMessage'
import Message from './Message'
import CreateShows from './CreateShows'
import PainelAdmin from './PainelAdmin';
import CreateArtist from './CreateArtist';

const Stack = createNativeStackNavigator();

export default props=>{

    return(
        <Stack.Navigator initialRouteName="Login" screenOptions = {{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="LoginVip" component={LoginVip}></Stack.Screen>
            <Stack.Screen name="ListMessage" component={ListMessage}></Stack.Screen>
            <Stack.Screen name="Message" component={Message}></Stack.Screen>
            <Stack.Screen name="CreateShows" component={CreateShows}></Stack.Screen>
            <Stack.Screen name="PainelAdmin" component={PainelAdmin}></Stack.Screen>
            <Stack.Screen name="CreateArtist" component={CreateArtist}></Stack.Screen>
        </Stack.Navigator>
    )
}
