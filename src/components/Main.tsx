import { Text, View, ScrollView } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import Suggested from './Landing/Suggested/Suggested';
import Picked from './Landing/Picked/Picked';
import Saved from './Landing/Saved/Saved';

const Main = () => {
    return(
    <ScrollView
    style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}
     >
        <Suggested/>
        <Saved/>
        <Picked/>
    </ScrollView>
    )
}

export default Main