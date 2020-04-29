import React from 'react'
import { View, Text, Image } from 'react-native'
import {styles} from './'

const Recent = () => {
    const {recent, recImages, recImage, resText} = styles
    return(
        <View style={recent}>
            <Text style={resText}>RECENT</Text>
            <View style={recImages}>
                <Image
                style={recImage}
                source={require('../images/mtv.jpg')}/>
                <Image
                style={recImage}
                source={require('../images/black.jpg')}/>
                <Image
                style={recImage}
                source={require('../images/above.jpg')}/>
            </View>
        </View>
    )
}

export default Recent