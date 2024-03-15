import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import StyledText from '../../StyledText/StyledText';
import StyleList from '../../../StyleList';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Item = (props) => {
    const [iconPressed, setIconPressed] = useState(false);

    const handleIconPress = async () => {
        setIconPressed(!iconPressed);

        try {
            let savedItems = await AsyncStorage.getItem('Saveds');
            savedItems = savedItems ? JSON.parse(savedItems) : [];

            const existingItemIndex = savedItems.findIndex(item => item.id === props.id);

            if (iconPressed) {
                // Eliminar el elemento de savedItems
                if (existingItemIndex !== -1) {
                    savedItems.splice(existingItemIndex, 1);
                }
            } else {
                // Guardar el elemento en savedItems solo si no existe
                if (existingItemIndex === -1) {
                    savedItems.push(props);
                }
            }

            await AsyncStorage.setItem('Saveds', JSON.stringify(savedItems));
            } catch (error) {
                console.log('Error al guardar o eliminar el elemento:', error);
            }
        }

    useEffect(() => {
    const checkIfItemIsSaved = async () => {
        try {
            let savedItems = await AsyncStorage.getItem('Saveds');
            savedItems = savedItems ? JSON.parse(savedItems) : [];

            savedItems.map(item => {
                if (item.id === props.id) {
                    setIconPressed(true);
                }
            });
        } catch (error) {
            console.log('Error al verificar si el elemento está guardado:', error);
        }
    };

    checkIfItemIsSaved();
    }, [props.id]); // Asegúrate de solo ejecutar el efecto cuando props.id cambie


    return (
        <View style={StyleList.container}>
            <Image
               source={{uri: props.src}}
               style={StyleList.image}
            />
            <TouchableWithoutFeedback onPress={handleIconPress}>
                <View style={StyleList.heartContainer}>
                    <Icon style={iconPressed ? StyleList.heartIconHidden : StyleList.heartIcon} name={"heart-o"} size={20} color="#000" />
                    <Icon style={iconPressed ? StyleList.heartIcon : StyleList.heartIconHidden} name={"heart"} size={20} color="red" />
                </View>
            </TouchableWithoutFeedback>
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
