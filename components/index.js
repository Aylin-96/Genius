import { Dimensions, StyleSheet } from 'react-native'

const win = Dimensions.get('window')
export const h = win.height
export const w = win.width

export const styles = StyleSheet.create({
    recent: {
        marginTop: 11,
        height: h/4.2,
        paddingLeft: 15,
        backgroundColor: 'white',
        elevation: 1,
    },
    recImages: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 19,
        paddingRight: 10
    },
    recImage: {
        height: 120,
        width: 120
    },
    recText: {
        paddingTop: 17,
        fontSize: 12,
        color: 'gray'
    },
    saved: {
        marginTop: 17,
        height: h/1.7,
        justifyContent: 'space-between',
        paddingLeft: 15,
        backgroundColor: 'white',
        elevation: 5
    },
    savedText: {
        paddingTop: 15,
        fontSize: 12,
        color: 'gray'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    savedImage: {
        height: h/16,
        width: h/16
    },
    text: {
        paddingLeft: 15,
        justifyContent: 'center'
    },
    header: {
        height: h/7,
        backgroundColor: '#fffc61',
        justifyContent: 'space-evenly',
        paddingLeft: 20,
        elevation: 2,
        position: 'relative'
    },
    headText: {
        paddingTop: 10,
        fontSize: 23,
        paddingLeft: 3
    }
})