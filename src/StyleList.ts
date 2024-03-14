import {StyleSheet} from 'react-native';

const StyleList = StyleSheet.create({
    flexTitle:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flexPrice:{
        flexDirection: 'row',
    },
    flexHCenter:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatsContainer:{
        flex: 1,
        alignItems: 'start',
        justifyContent: 'start',
        width: 400,
        height: 400,
        padding: 10,
        margin: 10
    },
    container: {
        flex: 1,
        alignItems: 'start',
        justifyContent: 'start',
        position: 'relative',
        width: 300,
        height: 400,
        borderRadius: 10,
        marginRight: 20,
        marginTop: 20,
        overflow: 'hidden',
    },
    title:{
        width: 250
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 20,
        marginBottom: 20
    },
    heartContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 20,
        right: 10
    },
    heartIcon:{
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 100,
    }
})

export default StyleList