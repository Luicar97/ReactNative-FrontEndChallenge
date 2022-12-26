import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { CustomTextInput } from '../components/CustomTextInput';
import { styles } from '../theme/styleScreen';
import { normalize } from '../utils/normalize';

const BaseIcon = require('../assets/base.png');
const BaseActiveIcon = require('../assets/base-active.png');

const mapArrData = [
  {
    'text':'Hola humano, como estas?',
    'status':'received',
  },
];

export const ChatScreen = () => {

  const [createData, setCreateData] = React.useState({
    chatbox:'',
  });

  const [mapArrChat, setMapArrChat] = React.useState(mapArrData);

  const reuseCreateData = (fieldName:string, fieldValue:string ) => {
    setCreateData(
      prevState => ({
        ...prevState,
        [fieldName]:fieldValue,
      }),
      
    ) 
  }


  

  let buttonPng =  !!createData.chatbox.length ?  BaseActiveIcon : BaseIcon;

  const addArrData = () => {

    console.log('createData.chatbox');
    console.log(createData);

    const newArr = [
      {
        'text':'Hola humano, como estas?',
        'status':'received',
      },
      {
        'text':createData.chatbox,
        'status':'sent',
      }
      
    ];

    setMapArrChat(
      [
        ...newArr, ...mapArrChat
      ]
    );

    setCreateData({
      chatbox: ''
    })



  }

  return (

    

    <SafeAreaView>
        
        <View style={styles.containerChatScreen}>

          <ScrollView>

          {mapArrChat.map(r => 
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
          </ScrollView>
        </View>
        
        <View style={styles.containerInputScreen}>
          <View>
            <CustomTextInput name='chatbox'  reuseCreateData={ reuseCreateData } text={createData.chatbox} placeholder='Ingresa aqui tu mensaje' />
          </View>
         
              
          <TouchableOpacity onPress={ 
            addArrData
          }>
            <Image style={{ width: 56, height: 56,}}
            source={buttonPng} />
            <Image style={{ width: 32, height: 28, position:'absolute', left: 14, top: 14 }}
            source={require("../assets/Icon.png")}/>
          </TouchableOpacity>
            
          

        </View>
    </SafeAreaView>
  )
}
