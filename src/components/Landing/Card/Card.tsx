import React from 'react';
import { View, Text } from 'react-native';
import StyledText from '../../StyledText/StyledText';
import StyleList from '../../../StyleList';
import Icon from 'react-native-vector-icons/Ionicons';
import {LinearGradient} from 'expo-linear-gradient'

const Card = () => {
    return(
        <LinearGradient
            style={StyleList.flexCard}
            colors={['#E9D5FA','#FCDFCB']}
            start={{x: 1, y: 1}}
            end={{x: 0, y: 0}}
            >
            <View style={StyleList.flexCardText}>
                <Icon name='home-outline' size={25} color='black' style={StyleList.cardIcon}/>
                <Text style={StyleList.cardTextTitle}>Earn extra credits</Text>
                <Text style={StyleList.cardTextSubTitle}>Earn 350 SC by adding your home. You ll be traveling more!</Text>
            </View>
            <View>
                <Text style={StyleList.cardTextTitle}>Add home</Text>
            </View>
        </LinearGradient>
    )
}

export default Card