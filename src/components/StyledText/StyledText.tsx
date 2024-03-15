import React from 'react';
import {Text, StyleSheet} from 'react-native';
import theme from '../../theme.ts';

const styles = StyleSheet.create({
    text:{
        fontSize: theme.fontSizes.body,
        color: 'black'
    },
    bold:{
        fontWeight: theme.fontWeights.bold
    },
    gray:{
        color: theme.colors.gray
    },
    big:{
        fontSize: theme.fontSizes.big
    },
    body:{
        fontSize: theme.fontSizes.body
    },
    small:{
        fontSize: theme.fontSizes.small
    },
    separator:{
        marginTop: 15,
        marginBottom: 10
    },
    line1:{

    }
})

export default function StyledText({children, bold, gray, big, body, small, separator}){
    const textStyles = [
        styles.text,
        bold && styles.bold,
        gray && styles.gray,
        big && styles.big,
        small && styles.small,
        separator && styles.separator,
        body && styles.body
    ]

    return(
        <Text
        numberOfLines={1}
        style={textStyles}>
            {children}
        </Text>
    )
}