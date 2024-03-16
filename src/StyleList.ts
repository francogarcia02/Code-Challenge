import {StyleSheet} from 'react-native';

const StyleList = StyleSheet.create({
    flexHeader:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 175,
    },
    flexSubHeader:{
        width: '100%',
        padding: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subHeaderItem:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: 'gray',
        padding: 6,
        textAlign: 'center',
    },
    subHeaderItemIcon:{
        paddingLeft: 5,
        paddingRight: 2.5,
        fontWeight: '700',
        fontSize: 16
    },
    subHeaderItemText:{
        paddingLeft: 2.5,
        paddingRight: 5,
        fontWeight: '700',
        fontSize: 16
    },
    flexHeaderInput:{
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 40,
        borderColor: 'gray',
        borderWidth: 0.2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 20,
    },
    headerInputSubCont:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputText:{
        color: 'gray',
        width: '83%',
        padding: 10,
        borderColor: 'transparent'
    },
    flexCard:{
        width: '92%',
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30,
        margin: 20,
        gap: 20,
        background: 'linear-gradient(to bottom, #ff7e5f, #feb47b)',
        borderRadius: 20,
    },
    flexCardText:{
        width: '65%',
        marginRight: 10
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
        paddingLeft: 8,
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
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatsContainer:{
        flex: 1,
        alignItems: 'start',
        justifyContent: 'center',
        width: '97%',
        height: 400,
        padding: 10,
        margin: 10
    },
    container: {
        flex: 1,
        alignItems: 'start',
        justifyContent: 'start',
        position: 'relative',
        width: '100%',
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
        width: '100%',
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


