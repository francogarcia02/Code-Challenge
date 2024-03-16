import React from 'react';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import StyleList from '../../../StyleList';
import Icon from 'react-native-vector-icons/Ionicons';
import RNRadialGradient from 'react-native-radial-gradient';

const Header = () =>{
    return(
        <ImageBackground source={require('../../../../assets/images/backgrounds/headerBackground.png')} style={StyleList.flexHeader}>
            <View style={StyleList.flexSubHeader}>
                <View style={StyleList.subHeaderItem}>
                    <Text style={StyleList.subHeaderItemIcon}>$</Text>
                    <Text style={StyleList.subHeaderItemText}>231</Text>
                </View>
                <Icon style={StyleList.subHeaderItem} name="notifications-outline" size={22}/>
            </View>
            <View style={StyleList.flexHeaderInput}>
                <View style={StyleList.headerInputSubCont}>
                    <Icon name="search-outline" size={25} color='gray'/>
                    <TextInput style={StyleList.inputText}>Where to next?</TextInput>
                </View>
                <Icon name="menu" size={25} color='gray'/>
            </View>
        </ImageBackground>
    )
}

export default Header