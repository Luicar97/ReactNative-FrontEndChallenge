import React from 'react'
import { View, Text, SafeAreaView, Dimensions, Image } from 'react-native';
import { CustomTextInput } from '../components/CustomTextInput';
import { styles } from '../theme/styleScreen';
import { normalize } from '../utils/normalize';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BaseIcon = require('../assets/base.png');
const BaseActiveIcon = require('../assets/base-active.png');

export const ChatScreen = () => {

  const [createData, setCreateData] = React.useState({
    chatbox:'',
  });

  const reuseCreateData = (fieldName:string, fieldValue:string ) => {
    setCreateData(
      prevState => ({
        ...prevState,
        [fieldName]:fieldValue,
      }),
      
    ) 
  }


  let mapArrData = [
    {
      'text':'Hola humano, como estas?',
      'status':'received',
    },
    {
      'text':'Hola Yana',
      'status':'sent',
    },
  ];

  console.log('createData.chatbox');
  console.log(!!createData.chatbox.length);
  console.log(createData.chatbox.length ?  'base-active.png' : 'base.png')

  let buttonPng =  !!createData.chatbox.length ?  BaseActiveIcon : BaseIcon

  console.log('buttonPng');
  //console.log(buttonPng);

  return (

    

    <SafeAreaView>
        <View style={styles.containerChatScreen}>
          {mapArrData.reverse().map(r => 
          {
            let alingSelfText = '';
            let colorBack = '';
            let colortextBack = '';
            if (r['status'] == 'received') {
              alingSelfText = 'flex-start';
              colorBack = '#e7edf2';
              colortextBack = '#4B5959';
            } else {
              alingSelfText = 'flex-end';
              colorBack = '#3B9391';
              colortextBack = '#FFFFFF';
            }

            return <View style={{backgroundColor:`${colorBack}` , alignSelf: `${alingSelfText}` , paddingHorizontal: 15, paddingVertical: 8, borderRadius:25 }}>
              <Text style={{color: `${colortextBack}`}} >{r['text']}</Text>
            </View>  
          }
          )}
        </View>
        
        <View style={styles.containerInputScreen}>
          <View>
            <CustomTextInput name='chatbox'  reuseCreateData={ reuseCreateData } text={createData.chatbox} placeholder='Ingresa aqui tu mensaje' />
          </View>
          
          <View style={{position:'relative', left: 0, top: 0, }}>  
            <Image style={{ width: 56, height: 56,}}
            source={buttonPng} />
            <Image style={{ width: 32, height: 28, position:'absolute', left: 14, top: 14 }}
            source={require("../assets/Icon.png")}/>
          </View>

        </View>
    </SafeAreaView>
  )
}
