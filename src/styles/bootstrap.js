import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    col4: {
        maxWidth: '33.3%' 
    },
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
})