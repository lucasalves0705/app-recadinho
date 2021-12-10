import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Login'
import LoginVip from './LoginVip'
import ListMessage from './ListMessage'
import Message from './Message'
import CreateShows from './CreateShows'
import PainelAdmin from './PainelAdmin';
import CreateArtist from './CreateArtist';
import CreateVip from './CreateVip';
import PerfilArtist from './PerfilArtist';
import ViewArtist from './ViewArtist';
import ViewShow from './ViewShow';
import ListClient from "./ListClient";

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
            <Stack.Screen name="CreateVip" component={CreateVip}></Stack.Screen>
            <Stack.Screen name="PerfilArtist" component={PerfilArtist}></Stack.Screen>
            <Stack.Screen name="ViewArtist" component={ViewArtist}></Stack.Screen>
            <Stack.Screen name="ViewShow" component={ViewShow}></Stack.Screen>
            <Stack.Screen name="ListClient" component={ListClient}></Stack.Screen>
        </Stack.Navigator>
    )
}
