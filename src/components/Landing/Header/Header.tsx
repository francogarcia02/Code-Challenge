import React from 'react';
import {View, Text} from 'react-native';
import StyleList from '../../../StyleList';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient'

const Header = () =>{
    return(
        <LinearGradient
            colors={['#E9D5FA','#FCDFCB']}
            start={{x: 1, y: 1}}
            end={{x: 0, y: 0}}
            >
            <View style={StyleList.flexSubHeader}>
                <Text style={StyleList.subHeaderItem}>$231</Text>
                <Icon style={StyleList.subHeaderItem} name="bell-o" size={20}/>
            </View>
            <View>
                <Text>aaa</Text>
            </View>
        </LinearGradient>
    )
}

export default Header