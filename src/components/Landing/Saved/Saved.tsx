import React from 'react';
import { View, Text } from 'react-native';
import StyledText from '../../StyledText/StyledText';
import StyleList from '../../../StyleList';
import List from '../../List/List'

const Saved = () => {
    return(
        <View style={StyleList.flatsContainer}>
            <StyledText big bold>Saved</StyledText>
            <List/>
        </View>
    )
}

export default Saved