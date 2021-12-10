import React from "react"
import { StyleSheet, View,  Text, Image, Pressable, TextInput } from 'react-native'
import bootstrap from "../styles/bootstrap"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default props => {
    const style = StyleSheet.create({
        session: {
            paddingVertical: 20,
            paddingHorizontal: 10 
        },
        nameSession: {
            color: '#aaa',
            fontSize: 17
        },
        cardItem: {
            marginVertical: 10,
            marginHorizontal: 5,
            minHeight: 100,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#aaa'
        },
    })

    return (
        <View style={ bootstrap.container }>
            <View style={ [ bootstrap.row, { flexGrow: 1 }] }>
                <View style={ [ bootstrap.container] }>

                    <View style={ [ bootstrap.row, bootstrap.header ] } >
                        <View style={ [bootstrap.container, bootstrap.rowName] }>
                            <Text style={ bootstrap.textName }>Painel</Text>
                        </View>
                    </View>

                    <View style={ [ bootstrap.container, style.session ] }>
                        <View style={ bootstrap.row }>
                            <View style={ [ bootstrap.row ] }>
                                <Text style={ style.nameSession } >Cadastros</Text>
                            </View>
                        </View>
                    
                        <View style={ [ bootstrap.row ] }>
                            <View style={ [ bootstrap.container, bootstrap.col4 ] }>
                                <Pressable style={ [ bootstrap.row, bootstrap.justifyContentCenter,  style.cardItem ]}
                                    onPress={ p => { props.navigation.navigate('CreateVip') }}>
                                    <View style={ bootstrap.justifyContentCenter }>
                                        <Text>Artista</Text>
                                    </View>
                                </Pressable>
                            </View>
                            
                            <View style={ [ bootstrap.container, bootstrap.col4 ] }>
                                <Pressable style={ [ bootstrap.row, bootstrap.justifyContentCenter,  style.cardItem ]}
                                    onPress={ p => { props.navigation.navigate('CreateShows') }}>
                                    <View style={ bootstrap.justifyContentCenter }>
                                        <Text>Shows</Text>
                                    </View>
                                </Pressable>
                            </View>
                        </View>



                        <View style={ [ bootstrap.row, { marginTop: 20 } ] }>
                            <View style={ [ bootstrap.row ] }>
                                <Text style={ style.nameSession } >Ver</Text>
                            </View>
                        </View>
                    
                        <View style={ [ bootstrap.row ] }>
                            <View style={ [ bootstrap.container, bootstrap.col4 ] }>
                                <Pressable style={ [ bootstrap.row, bootstrap.justifyContentCenter,  style.cardItem ]}
                                    onPress={ p => { props.navigation.navigate('viewArtist') }}>
                                    <View style={ bootstrap.justifyContentCenter }>
                                        <Text>Artista</Text>
                                    </View>
                                </Pressable>
                            </View>
                            
                            <View style={ [ bootstrap.container, bootstrap.col4 ] }>
                                <Pressable style={ [ bootstrap.row, bootstrap.justifyContentCenter,  style.cardItem ]}
                                    onPress={ p => { props.navigation.navigate('ViewShows') }}>
                                    <View style={ bootstrap.justifyContentCenter }>
                                        <Text>Shows</Text>
                                    </View>
                                </Pressable>
                            </View>

                            <View style={ [ bootstrap.container, bootstrap.col4 ] }>
                                <Pressable style={ [ bootstrap.row, bootstrap.justifyContentCenter,  style.cardItem ]}
                                    onPress={ p => { props.navigation.navigate('ListClient') }}>
                                    <View style={ bootstrap.justifyContentCenter }>
                                        <Text>Clientes</Text>
                                    </View>
                                </Pressable>
                            </View>
                        </View>



                        <View style={ [ bootstrap.row, { marginTop: 20 } ] }>
                            <View style={ [ bootstrap.row ] }>
                                <Text style={ style.nameSession } >Mural</Text>
                            </View>
                        </View>
                    
                        <View style={ [ bootstrap.row ] }>
                            <View style={ [ bootstrap.container, bootstrap.col4 ] }>
                                <Pressable style={ [ bootstrap.row, bootstrap.justifyContentCenter,  style.cardItem ]}
                                    onPress={ p => { props.navigation.navigate('Message') }}>
                                    <View style={ bootstrap.justifyContentCenter }>
                                        <Text>Mural</Text>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}