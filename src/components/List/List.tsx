import React from 'react';
import { Text, View, FlatList } from 'react-native';
import repositories from '../../data/repositories';
import Item from './Item/Item';
import StyleList from '../../StyleList'


const List = () => {
    return(
        <FlatList
            data={repositories}
            horizontal
            scrollBar='False'
            renderItem={({ item }) => (
                <Item {...item}/>
            )}
            contentContainerStyle={{ flexGrow: 1 }}
         />
    )
}

export default List