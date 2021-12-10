import React from 'react'
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native'
import api from '../api/api';
import bootstrap from '../styles/bootstrap';
import { Icon } from 'react-native-vector-icons/Icon';

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
            marginTop: 60,
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
        mensagemErro: {
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
        avatarVip: {
            width: 90,
            height: 90,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 45,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
    
    
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    
    const validaCreate = async () => {
        if( username != ''
            && email != ''
            && password != ''
        ){
            let obj,
            response

            obj = {
                'type_of_user_id': 2,
                'name': username,
                'email': email,
                'password': password
            }
            
            console.log(username, email, password)

            response = await 
                api.createUser(obj)
                .then((data) => {
                    console.log(data)
                    if(data.success == true){
                        props.navigation.navigate('PainelAdmin')
                    } else {
                        if(data.errors.name[0] != ''){
                            alert(data.errors.name[0])
                        } else {
                            alert(data.errors.message)
                        }
                    }
                }).catch((error) => {
                    alert('Aconteceu um erro ao fazer o cadastro. Desculpe :(')
                })
        } else {
            alert('Preencha todos os campos!.')
        }
    }

    return (
        <View style={ [ bootstrap.container ] }>
            <View style={ [ bootstrap.row, { flexGrow: 1 }] }>
                <View style={ bootstrap.container }>

                    <View style={ [ bootstrap.row, bootstrap.header ] } >
                        <View style={ [bootstrap.container, bootstrap.rowName] }>
                            <Text style={ bootstrap.textName }>Cadastro de Vip</Text>
                        </View>
                    </View>

                    <View style={ [ bootstrap.container, style.paddingForm ] }>
                        
                        <View style={ [ style.imgLogo, style.row ] } >
                            <View style={ style.avatarVip }>
                                <Image style={ { maxWidth: 30, maxHeight: 30 } } source={ require('../images/logoSimbolo.png') }>
                                </Image>
                            </View>
                        </View>
                        
                        <View style={ [style.containerInput, style.row] }>
                            <Text style={ style.labelInput } >Digite o nome do Artista</Text>
                            <TextInput style={ style.input } 
                                onChangeText={t => setUsername(t)}
                                value={ username } ></TextInput>
                        </View>

                        <View style={ [style.containerInput, style.row] }>
                            <Text style={ style.labelInput } >Digite o email do Artista</Text>
                            <TextInput style={ style.input } 
                                onChangeText={t => setEmail(t)}
                                value={ email }></TextInput>
                        </View>

                        <View style={ [style.containerInput, style.row] }>
                            <Text style={ style.labelInput } >Digite a senha temporária</Text>
                            <TextInput style={ style.input } 
                                onChangeText={t => setPassword(t)}
                                value={ password }></TextInput>
                        </View>

                        <View style={ [style.containerInput, style.row] }>
                            <Pressable style={[style.button, {width: '100%'}]} onPress={ validaCreate } >
                                <Text style={style.text} >Criar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
