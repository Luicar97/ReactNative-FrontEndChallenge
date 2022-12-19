import { NavigationContainerProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, SafeAreaView, Text, TextInput, Touchable, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/styleScreen';
import { valueColorScreen } from '../utils/values';

interface Props extends StackScreenProps<any, any>{};


export const RegisterScreen = ( { navigation }:Props ) => {
  
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.backgroundColorScreen}>
        

        <SafeAreaView  >
          <Text style={styles.titleRegister}>Regístrate</Text>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder='Nombre de usuario'
              placeholderTextColor={valueColorScreen.ColorPlaceHolder}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder='Correo Electronico'
              placeholderTextColor={valueColorScreen.ColorPlaceHolder}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder='Contrasenia'
              placeholderTextColor={valueColorScreen.ColorPlaceHolder}
            />
          </View>
        </SafeAreaView>
        
        <View  style={{marginBottom:30}}>
            <TouchableOpacity style={styles.styleToucheOpacity}  onPress={ () => navigation.navigate('ChatScreen') }> 
              <Text style={styles.customButton}> Crear cuenta </Text> 
            </TouchableOpacity>
        </View>

    </View>
  )
}
