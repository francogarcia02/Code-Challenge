import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import StyledText from '../../StyledText/StyledText';
import StyleList from '../../../StyleList';
import Icon from 'react-native-vector-icons/FontAwesome';

const Item = (props) => {
    return (
        <View style={StyleList.container}>
            <Image
               source={{uri: props.src}}
               style={StyleList.image}
             />
             <View style={StyleList.heartContainer}>
                <Icon style={StyleList.heartIcon} name="heart-o" size={20} color="#000" />
            </View>
            <View style={StyleList.flexTitle}>
                <View style={StyleList.title}>
                    <StyledText body bold>{props.title}</StyledText>
                </View>
                <View style={StyleList.flexHCenter}>
                    <Icon name="star-o" size={20} color="#000" />
                    <StyledText body>{props.stars}</StyledText>
                </View>
            </View>
            <StyledText body gray>{props.address}</StyledText>
            <View style={StyleList.flexPrice}>
                <StyledText body bold separator>${props.price}</StyledText>
                <StyledText body separator> / night</StyledText>
            </View>
        </View>
    );
}

export default Item;



