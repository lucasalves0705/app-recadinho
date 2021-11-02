import React from "react"
import { StyleSheet, View,  Text, Image, Pressable } from 'react-native'
import bootstrap from "../styles/bootstrap"

export default props => {
    const style = StyleSheet.create({
        header: {
            paddingVertical: 17,
            paddingHorizontal: 20,
            backgroundColor: 'black',
            borderColor: '#eee',
            borderBottomWidth: 1
        },
        textLogo: {
            fontSize: 40,
            fontWeight: '100',
            color: '#fff'
        },
        viewMessages: {
        },
        itemList: {
            marginLeft: 30,
            borderColor: '#aaa',
            borderBottomWidth: 0.3
        },
        listName: {
            paddingVertical: 25,
            marginLeft: 15,
            fontWeight: '500',
            fontSize: 17
        }
    })

    return (
        <View style={ bootstrap.container}>
            <View style={ [ bootstrap.row, style.header ] } >
                <Text style={ style.textLogo }>recadinho</Text>
            </View>
            <View style={ [ bootstrap.row, style.viewMessages ] }>
                <View style={ style.itemList }>
                    <Pressable style={[style.button, {width: '100%'}]} onPress={ p => {
                            props.navigation.navigate('Message')
                        }} >
                        <Text style={ style.listName }>Lucas Alves</Text>
                    </Pressable>
                </View>
                <View style={ style.itemList }>
                    <Text style={ style.listName }>Felipe</Text>
                </View>
                <View style={ style.itemList }>
                    <Text style={ style.listName }>Gustavo</Text>
                </View>
                <View style={ style.itemList }>
                    <Text style={ style.listName }>Ana</Text>
                </View>
                <View style={ style.itemList }>
                    <Text style={ style.listName }>Carla</Text>
                </View>
            </View>
        </View>
    )
}