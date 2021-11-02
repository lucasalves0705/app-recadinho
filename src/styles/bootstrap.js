import React from 'react'
import { StyleSheet } from 'react-native'

export default props => {
    const style = StyleSheet.create({
        container: {
            flex: 1
        },
        row: {
            flexWrap: 'wrap',
            flexDirection: 'row'
        },
        justifyContentCenter: {
            justifyContent: 'center'
        }  
    })
}