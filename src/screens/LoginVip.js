import React from 'react'
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native'

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
        }
    })
    
    const { onPress, mensagemErro = 'Já existe esse nome de usuário!' } = props;
    const [username, setUsername] = React.useState()

    return (
        <View style={ [ style.container, style.paddingForm ] }>
            <View style={ style.row }>
                <View style={ style.container }>
                    
                    <View style={ [ style.imgLogo, style.row ] } >
                        <Image source={ require('../images/logoSimbolo.png') }>
                        </Image>
                    </View>
                    <View style={ [style.containerInput, style.row] }>
                        <Text style={ style.labelInput } >Digite o email</Text>
                        <TextInput style={ style.input }></TextInput>
                    </View>

                    <View style={ [style.containerInput, style.row] }>
                        <Text style={ style.labelInput } >Digite a senha</Text>
                        <TextInput style={ style.input }></TextInput>
                    </View>

                    <View>
                        <Text style={ style.mensagemErro, { display: 'none' } } >
                            {mensagemErro}
                        </Text>
                    </View>
                    <View style={ [style.containerInput, style.row] }>
                        <Pressable style={[style.button, {width: '100%'}]} onPress={ p => {
                            props.navigation.navigate('PainelAdmin')
                        }} >
                            <Text style={style.text} >Entrar</Text>
                        </Pressable>
                    </View>
                    <View style={ [ style.containerInput, style.row ] }>
                        <Pressable style={ [style.btnSouRecadinho, {width: '100%'}] } onPress={ p => {
                            props.navigation.goBack(null)
                        }} >
                            <Text style={ style.textSouRecadinho }>Login com username</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}
