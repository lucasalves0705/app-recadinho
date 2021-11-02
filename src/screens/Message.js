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
        textName: {
            color: '#fff',
            fontWeight: '500',
            fontSize: 17
        }
    })

    return (
        <View style={ bootstrap.container}>
            <View style={ [ bootstrap.row, style.header ] } >
                <Text style={ style.textName }>Lucas Alves</Text>
            </View>
        </View>
    )
}