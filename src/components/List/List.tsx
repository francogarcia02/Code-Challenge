import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import publications from '../../data/publications';
import Item from './Item/Item';
import StyleList from '../../StyleList';
import filterPickeds from '../../helpers/filterPickeds';

const List = (props) => {
    const [container, setContainer] = useState(publications);


    if(props.saved){
        useEffect(() => {
            const fetchData = async () => {
                if (props.saved) {
                    try {
                        const savedItems = await AsyncStorage.getItem('Saveds');
                        if (savedItems) {
                            setContainer(JSON.parse(savedItems));
                        }
                    } catch (error) {
                        console.log('Error al recuperar los elementos guardados:', error);
                    }
                } else {
                    setContainer(publications);
                }
            };

            fetchData();
        }, [props.saved]);
    }
    else if(props.picked){
        useEffect(() => {
            const filteredItems = filterPickeds(container);
            setContainer(filteredItems);
        }, [props.picked]);
    }

    return (
        <FlatList
            data={container}
            horizontal
            renderItem={({ item }) => (
                <Item {...item} />
            )}
            contentContainerStyle={{ flexGrow: 1 }}
         />
    );
}

export default List;
