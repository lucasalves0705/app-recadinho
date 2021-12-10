import React from "react"
import { StyleSheet, View,  Text, Image, Pressable, TextInput } from 'react-native'
import bootstrap from "../styles/bootstrap"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import api from "../api/api";

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
        rowImg: {
            marginBottom: 40
        },
        imgPerfil: {
            width: 30,
        },
        labelInput: {
            color: '#aaa',
            fontSize: 17
        },input: {
            width: '100%',
            paddingTop: 10,
            paddingBottom: 10,
            fontSize: 15,
            borderBottomColor: '#aaa',
            borderBottomWidth: 1
        },
        containerInput: {
            marginTop: 50,
            paddingLeft: 10,
            paddingRight: 10
        },
        formGroup: {
            marginTop: 10,
            marginBottom: 10
        },
        textArea: {
            marginTop: 50
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            paddingHorizontal: 32,
            borderRadius: 50,
            elevation: 3,
            backgroundColor: 'black',
        },
        text: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        },
    })

    const [ idArtista, setIdArtista ] = React.useState('')
    const [ nome , setNome ] = React.useState('')
    const [ bio, setBio ] = React.useState('')

    const recuperaArtista = async () => {
        
        let response

        response = await 
                api.buscarArtista(2)
                .then((data) => {
                    
                })
                .catch((error) => {

                })

    }

    return (
        <View style={ bootstrap.container }>
            <View style={ [ bootstrap.row, { flexGrow: 1 }] } >
                <View style={ bootstrap.container }>

                    <View style={ [ bootstrap.row, style.header ] } >
                        <View style={ [bootstrap.container, style.rowName] }>
                            <Text style={ style.textName }>Cadastro de Artista</Text>
                        </View>
                    </View>

                    <View style={ style.containerInput }>

                        <View style={ [ bootstrap.row, style.rowImg ] }>
                            <View style={ [ bootstrap.container, style.rowName ] }>
                                <Image source={ require('../images/perfilDefault.png') }></Image>
                            </View>
                        </View>

                        <View style={ style.formGroup }>
                            <Text  >{ nome }</Text>
                        </View>

                        <View style={ [ style.formGroup, style.textArea ] }>
                            <Text  >{ bio }</Text>
                        </View>

                        <View style={ [style.containerInput, style.row] }>
                            <Pressable style={[style.button, {width: '100%'}]} onPress={ p => {
                                props.navigation.navigate('ListMessage')
                            }} >
                                <Text style={style.text} >Salvar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}