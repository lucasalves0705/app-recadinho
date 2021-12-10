import React from "react"
import { StyleSheet, View,  Text, Image, Pressable, TextInput } from 'react-native'
import bootstrap from "../styles/bootstrap"
import api from '../api/api';
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

    const [email, setEmail] = React.useState('')
    const [bio, setBio] = React.useState('')
    const validaCreate = async () => {
        if(email != ''
        && bio !=''){
            let obj,
                response

                obj = {
                    'email': email,
                    'bio': bio
                }

                response = await 
                api.createShow(obj)
                .then((data) => {
                    if(data.success == true){
                        props.navigation.navigate('PainelAdmin')
                    } else {
                        alert(data.message)
                    }
                }).catch((error) => {
                    alert('Aconteceu um erro ao fazer o cadastro. Desculpe :(')
                })

        } else {
            alert('Preencha todos os campos!.')
        }
    }

    return (
        <View style={ bootstrap.container }>
            <View style={ [ bootstrap.row, { flexGrow: 1 }] } >
                <View style={ bootstrap.container }>

                    <View style={ [ bootstrap.row, style.header ] } >
                        <View style={ [bootstrap.container, style.rowName] }>
                            <Text style={ style.textName }>Cadastro de Shows</Text>
                        </View>
                    </View>

                    <View style={ style.containerInput }>

                        <View style={ [ bootstrap.row, style.rowImg ] }>
                            <View style={ [ bootstrap.container, style.rowName ] }>
                                <Image source={ require('../images/perfilDefault.png') }></Image>
                            </View>
                        </View>

                        <View style={ style.formGroup }>
                            <Text style={ style.labelInput } >Digite o email do artista</Text>
                            <TextInput style={ style.input } 
                                onChangeText={t => setEmail(t)}
                                value={ email }></TextInput>
                        </View>

                        <View style={ [ style.formGroup, style.textArea ] }>
                            <Text style={ style.labelInput } >Biografia do show</Text>
                            <TextInput
                                multiline={true}
                                numberOfLines={8}
                                style={ style.input }
                                onChangeText={t => setBio(t)}
                                value={ bio }></TextInput>
                        </View>

                        <View style={ [style.containerInput, style.row] }>
                            <Pressable style={[style.button, {width: '100%'}]} onPress={ validaCreate } >
                                <Text style={style.text} >Salvar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}