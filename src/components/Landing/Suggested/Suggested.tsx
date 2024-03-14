import React from 'react';
import { View, Text } from 'react-native';
import StyledText from '../../StyledText/StyledText';
import StyleList from '../../../StyleList';
import List from '../../List/List'

const Suggested = () => {
    return(
        <View style={StyleList.flatsContainer}>
            <StyledText big bold>Places you may like</StyledText>
            <List/>
        </View>
    )
}

export default Suggested