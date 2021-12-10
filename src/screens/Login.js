import React, {useState, useContext} from 'react'
import { StyleSheet, View, Text, TextInput, Pressable, Image, Alert } from 'react-native'
import api from '../api/api';

export default props => {
    const style = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center'
        },
        row: {
            flexWrap: 'wrap',
            flexDirection: 'row'
        },
        imgLogo: {
            width: '100%',
            paddingBottom: 100,
            justifyContent: 'center'
        },
        paddingForm: {
            marginTop: 100,
            marginBottom: 50, 
            paddingLeft: 30,
            paddingRight: 30
        },
        containerInput: {
            marginTop: 50
        },
        labelInput: {
            color: '#aaa',
            fontSize: 17
        },
        input: {
            width: '100%',
            paddingTop: 10,
            paddingBottom: 10,
            fontSize: 15,
            borderBottomColor: '#aaa',
            borderBottomWidth: 1
        },
        menssagemErro: {
            marginTop: 5,
            color: '#dc3545'
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
        btnSouRecadinho: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        textSouRecadinho: {
            fontSize: 15
        },
        messageError: {
            justifyContent: 'center',
            marginTop: 25,
            color: '#f00'
        }
    })
    
    
    const [ username, setUsername] = useState('')
    
    const validaLogin = async () => {
        if (username !== ''){
            let obj,
            response

            obj = {
                'type_of_user_id': 3,
                'name': username,
                'email': '',
                'password': ''
            }
            
            response = await 
                api.login(obj)
                .then((data) =>{
                    if(data.success == true){
                        props.navigation.navigate('Message')
                    } else {
                        if(data.errors.name[0] != ''){
                            alert(data.errors.name[0])
                        } else {
                            alert(data.errors.message)
                        }
                    }
                }).catch((error) => {
                    alert('Aconteceu um erro ao fazer login. Desculpe :(')
                })
        } else {
            alert('Inserir um nome de usuario!')
        }
    }

    return (
        <View style={ [ style.container, style.paddingForm ] }>
            <View style={ style.row }>
                <View style={ style.container }>
                    
                    <View style={ [ style.imgLogo, style.row ] } >
                        <Image source={ require('../images/logoSimbolo.png') }>
                        </Image>
                    </View>
                    <View style={ [style.containerInput, style.row] }>
                        <Text style={ style.labelInput }>Digite um nome de usuário</Text>
                        <TextInput 
                            style={ style.input }
                            onChangeText={t => setUsername(t)}
                            value={ username }>
                        </TextInput>
                    </View>
                    <View style={ [style.containerInput, style.row] }>
                        <Pressable 
                            style={[style.button, { width: '100%' }]}
                            onPress={ validaLogin } >
                            <Text style={style.text} >Entrar</Text>
                        </Pressable>
                    </View>
                    <View style={ [ style.containerInput, style.row ] }>
                        <Pressable style={ [style.btnSouRecadinho, {width: '100%'}] } 
                        onPress={ p => { props.navigation.navigate('LoginVip') }} >
                            <Text style={ style.textSouRecadinho }>Sou recadinho</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}