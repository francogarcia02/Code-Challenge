import React from 'react';
import { View, Text } from 'react-native';
import StyledText from '../../StyledText/StyledText';
import StyleList from '../../../StyleList';
import List from '../../List/List'

const Picked = () => {
    const pick = {picked: true}

    return(
        <View style={StyleList.flatsContainer}>
            <StyledText big bold>Hand picked</StyledText>
            <List {...pick}/>
        </View>
    )
}

export default Picked