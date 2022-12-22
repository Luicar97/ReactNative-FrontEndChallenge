import React from 'react'
import { View, Text, SafeAreaView, Dimensions } from 'react-native';
import { styles } from '../theme/styleScreen';
import { normalize } from '../utils/normalize';



export const ChatScreen = () => {
  return (
    <SafeAreaView>
        <View style={styles.containerChatScreen}>
          <View style={{  backgroundColor:'blue', alignSelf:'flex-start', paddingHorizontal: 15 }}>
            <Text>Hola Yana</Text>
          </View>    
          {/* <Text style={{  backgroundColor:'yellow', padding: 16,   }}>Hola humano como estas</Text> */}
        </View>
        <View>

        </View>
    </SafeAreaView>
  )
}
