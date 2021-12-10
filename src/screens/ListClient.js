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
        itemList: {
            marginLeft: 10,
            marginRight: 10,
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

    const [data, setData] = React.useState('')

    return (
        <View style={ [ bootstrap.container ] }>
            <View style={ [ bootstrap.row, { flexGrow: 1 }] }>
                <View style={ bootstrap.container }>

                    <View style={ [ bootstrap.row, bootstrap.header ] } >
                        <View style={ [bootstrap.container, bootstrap.rowName] }>
                            <Text style={ bootstrap.textName }>Cadastro de Vip</Text>
                        </View>
                    </View>
        
                    <View style={ [ bootstrap.container, style.viewMessages ] }>
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
            </View>
        </View>
    )
}