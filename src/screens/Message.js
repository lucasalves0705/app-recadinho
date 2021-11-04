import React from "react"
import { StyleSheet, View,  Text, Image, Pressable, TextInput } from 'react-native'
import bootstrap from "../styles/bootstrap"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default props => {
    const style = StyleSheet.create({
        header: {
            height: '8%',
            justifyContent: 'center',
            backgroundColor: 'black',
            borderColor: '#eee',
            borderBottomWidth: 1
        },
        rowName: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        textName: {
            color: '#fff',
            fontWeight: '500',
            fontSize: 20
        },
        inputFooter: {
            height: '8%',
            paddingHorizontal: 8,
            paddingVertical: 5,
            borderTopColor: '#eee',
            borderTopWidth: 1,            
            backgroundColor: 'black',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        },
        input: {
            width: '85%',
            backgroundColor: '#fff',
            borderRadius: 10
        },
        btnSend: {
            width: '15%',
            height: '90%',
            borderRadius: 50,
            alignItems: 'flex-end',
            justifyContent: 'center'
        },
        iconSend: {
            backgroundColor: 'black'
        },
        containerMessage: {
            height: '84%'
        },
        messageYou: {
            width: '100%',
            justifyContent: 'flex-end'
        },
        messageMe: {
            width: '100%',
            justifyContent: 'flex-start'
        },
        message: {
            width: '75%',
            marginVertical: 5,
            marginHorizontal: 5,
            paddingVertical: 15,
            paddingHorizontal: 10,
            borderColor: '#aaa',
            borderRadius: 50,
            borderWidth: 1,
            justifyContent: 'flex-end'
        }
    })

    return (
        <View style={ bootstrap.container }>
            <View style={ [ bootstrap.row, { flexGrow: 1 }] } >
                <View style={ bootstrap.container }>
                    <View style={ [ bootstrap.row, style.header ] } >
                        <View style={ [bootstrap.container, style.rowName] }>
                            <Text style={ style.textName }>Mural</Text>
                        </View>
                    </View>

                    <View style={ [bootstrap.row, style.containerMessage] }>
                        <View style={ [ bootstrap.row, style.messageYou] }>
                            <View style={ style.message } >
                                <Text>Olá, mundo!</Text>
                            </View>
                        </View>
                        <View style={ [ bootstrap.row, style.messageMe] }>
                            <View style={ style.message } >
                                <Text>Olá!</Text>
                            </View>
                        </View>
                        <View style={ [ bootstrap.row, style.messageYou] }>
                            <View style={ style.message } >
                                <Text>Boa noite!</Text>
                            </View>
                        </View>
                    </View>

                    <View style={ [ style.inputFooter ] }>
                        <TextInput style={ style.input }></TextInput>
                        <View style={ style.btnSend }>
                            <FontAwesome.Button name="send" style={ style.iconSend}>
                            </FontAwesome.Button>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}