import { Text, View, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

import Suggested from './Landing/Suggested/Suggested';
import Picked from './Landing/Picked/Picked';
import Saved from './Landing/Saved/Saved';
import Card from './Landing/Card/Card';
import Header from './Landing/Header/Header'

import StyleList from '../StyleList';

const Main = () => {
    return(
    <ScrollView>
        <StatusBar/>
        <View style={StyleList.pageContainer}>
            <Header/>
            <Card/>
            <Suggested/>
            <Saved/>
            <Picked/>
        </View>
    </ScrollView>
    )
}

export default Main