import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Main from './Main';
import History from './Screens/History';
import Explore from './Screens/Explore';
import Messages from './Screens/Messages';
import Account from './Screens/Account';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabHeaderStyle:{
                    color: 'red'
                },
                tabBarStyle: {
                    height: 100,
                    borderTopWidth: 0.1,
                    borderTopColor: '#CECECE',
                },
                tabBarIconStyle:{
                    marginTop: 20,
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                    marginBottom: 30,
                },
                tabBarActiveTintColor: '#FA8072',
                tabBarInactiveTintColor: 'black'
            }}
        >
            <Tab.Screen
                name="Home"
                component={Main}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="History"
                component={History}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="bed" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="search" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="envelope" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="user-o" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}

export default Navigation;
