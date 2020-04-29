import React from 'react'
import { View, Text, Image } from 'react-native'
import {styles} from './'

const Saved = () => {
    const {saved, savedImage, savedText, row, text} = styles
    return(
        <View style={saved}>
            <Text style={savedText}>SAVED</Text>
            <View style={row}>
                <Image
                style={savedImage}
                source={require('../images/mtv.jpg')}/>
                <View style={text}>
                    <Text style={{fontSize: 17}}>Frogs (Unplugged)</Text>
                    <Text style={{fontSize: 12, color: 'gray'}}>Alice in Chains</Text>
                </View>
            </View>
            <View style={row}>
                <Image
                style={savedImage}
                source={require('../images/mtv.jpg')}/>
                <View style={text}>
                    <Text style={{fontSize: 17}}>Nutshell (Unplugged)</Text>
                    <Text style={{fontSize: 12, color: 'gray'}}>Alice in Chains</Text>
                </View>
            </View>
            <View style={row}>
                <Image
                style={savedImage}
                source={require('../images/mtv.jpg')}/>
                <View style={text}>
                    <Text style={{fontSize: 17}}>Down in a Hole (Unplugged)</Text>
                    <Text style={{fontSize: 12, color: 'gray'}}>Alice in Chains</Text>
                </View>
            </View>
            <View style={row}>
                <Image
                style={savedImage}
                source={require('../images/black.jpg')}/>
                <View style={text}>
                    <Text style={{fontSize: 17}}>Black Gives Way to Blue</Text>
                    <Text style={{fontSize: 12, color: 'gray'}}>Alice in Chains</Text>
                </View>
            </View>
            <View style={row}>
                <Image
                style={savedImage}
                source={require('../images/above.jpg')}/>
                <View style={text}>
                    <Text style={{fontSize: 17}}>Wake Up</Text>
                    <Text style={{fontSize: 12, color: 'gray'}}>Mad Season</Text>
                </View>
            </View>
            <View style={row}>
                <Image
                style={savedImage}
                source={require('../images/above.jpg')}/>
                <View style={text}>
                    <Text style={{fontSize: 17}}>Long Gone Day</Text>
                    <Text style={{fontSize: 12, color: 'gray'}}>Mad Season</Text>
                </View>
            </View>
        </View>
    )
}

export default Saved