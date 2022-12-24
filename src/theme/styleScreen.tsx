import { Dimensions, StyleSheet } from "react-native";
import { valueFontScreen, valueColorScreen } from '../utils/values';

export const styles = StyleSheet.create({
    titleRegister:{
        textAlign:"center",
        fontSize: valueFontScreen.H3,
        fontWeight: '700',
        marginTop: 30,
        color:valueColorScreen.ColorTitle,
        marginBottom: 30,
    },
    backgroundColorScreen:{
        backgroundColor:valueColorScreen.ColorBackground,
        height:'100%',
        display:'flex',
        justifyContent:'space-between',
        
    },
    input:{
        /*
        backgroundColor:'#F0F6FA',
        width: '90%',
        padding: 18,
        borderRadius:22,
        marginVertical:10,
        */
        
        width:Dimensions.get('window').height * 0.45,
        padding: 18,
        borderRadius:40,
        backgroundColor:'#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        
    },
    containerInput:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
    },
    customButton:{
        fontSize: valueFontScreen.SIZEBUTTON,
        fontWeight:'700',
        lineHeight:24,
        width:'90%',
        
        backgroundColor:'#FF8755',
        padding:16,
        textAlign:'center',
        borderRadius:16,
        color:'#672A11', 
    },
    styleToucheOpacity:{
        alignItems:'center',
        justifyContent:'flex-end'
    },
    containerRegister:{
        flex:1,
        height: Dimensions.get('window').height * 0.8
    },
    containerCreate:{
        flex:1,
    },
    containerScroll:{
        flex:1,
    },
    containerSafeArea:{
        flex:1,
    },
    ///////////////////////////
    // CHAT SCREEN
    containerChatScreen:{
        height:'80%',
        flexDirection:'column-reverse',
        paddingHorizontal: 16,
        paddingVertical:12,
    },
    containerInputScreen:{
        height:'20%',
        paddingHorizontal:12,
        
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
    },
    
});