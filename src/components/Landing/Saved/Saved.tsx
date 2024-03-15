import React from 'react';
import { View, Text } from 'react-native';
import StyledText from '../../StyledText/StyledText';
import StyleList from '../../../StyleList';
import List from '../../List/List'

const Saved = () => {
    const save = {saved: true}

    return(
        <View style={StyleList.flatsContainer}>
            <StyledText big bold>Saved</StyledText>
            <List {...save}/>
        </View>
    )
}

export default Saved