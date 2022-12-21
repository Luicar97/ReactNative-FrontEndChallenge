import { NavigationContainerProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, SafeAreaView, ScrollView, Text, TextInput, Touchable, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomTextInput } from '../components/CustomTextInput';
import { styles } from '../theme/styleScreen';
import { valueColorScreen } from '../utils/values';

interface Props extends StackScreenProps<any, any>{};


export const RegisterScreen = ( { navigation }:Props ) => {

  const [createData, setCreateData] = React.useState({
    name:'',
    email:'',
    password:'',
  });

  const reuseCreateData = (fieldName:string, fieldValue:string ) => {
    setCreateData(
      prevState => ({
        ...prevState,
        [fieldName]:fieldValue
      })
    )
  }

  return (

        <SafeAreaView style={styles.containerSafeArea}>
          <ScrollView style={styles.containerScroll}>
            <View style={styles.containerRegister}>
              <Text style={styles.titleRegister}>Regístrate</Text>
              <View style={styles.containerInput}>
                <CustomTextInput name='name'  reuseCreateData={ reuseCreateData } text={createData.name} placeholder='Nombre de usuario' />

                <CustomTextInput name='email' reuseCreateData={ reuseCreateData } text={createData.email} placeholder='Correo Electronico' />

                <CustomTextInput name='password' reuseCreateData={ reuseCreateData } text={createData.password} placeholder='Contrasenia' />
              </View>
            </View>

            <View style={styles.containerCreate}>
                <TouchableOpacity style={styles.styleToucheOpacity}  onPress={ () => navigation.navigate('ChatScreen') }> 
                  <Text style={styles.customButton}> Crear cuenta </Text> 
                </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>

  
  )
}
