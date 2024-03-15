import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const StyleList = StyleSheet.create({
    flexSubHeader:{
        width: 400,
        padding: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subHeaderItem:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: 'gray',
        padding: 7,
    },
    flexCard:{
        width: 400,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        paddingLeft: 30,
        margin: 20,
        gap: 20,
        background: 'linear-gradient(to bottom, #ff7e5f, #feb47b)',
        borderRadius: 20,
    },
    flexCardText:{
        width: '75%',
    },
    cardTextTitle:{
        fontSize: 18,
        paddingBottom: 10,
        fontWeight: '700',
    },
    cardTextSubTitle:{
        fontSize: 18,
        fontWeight: '300',
    },
    cardIcon:{
        paddingLeft: 10,
        paddingBottom: 10
    },
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
    pageContainer:{
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatsContainer:{
        flex: 1,
        alignItems: 'start',
        justifyContent: 'center',
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
    },
    heartIconHidden:{
        display: 'none',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 100,
    }
})

export default StyleList