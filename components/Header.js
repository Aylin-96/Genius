import React from 'react'
import { View, Text, TextInput } from 'react-native'
import {styles} from './'

const Header = () => {
    const {header, headText} = styles
    return(
        <View style={header}>
            <Text style={headText}>My Music</Text>
            <TextInput style={{fontSize: 19}}
                placeholder='Search Your Music'>
            </TextInput>
        </View>
    )
}

export default Header