import React from 'react'
import { TextInput } from 'react-native'
import { styles } from '../theme/styleScreen'
import { valueColorScreen } from '../utils/values';

interface Props {
    text: string;
    reuseCreateData: (fieldName:string, fieldValue:string) => void;
    placeholder: string;
    name: string;
}

export const CustomTextInput = ( { text, reuseCreateData, placeholder, name } : Props ) => {
  return (
    <TextInput
        style={styles.input}
        onChangeText={(text) => reuseCreateData(name, text)}
        value={text}
        placeholder={placeholder}
        placeholderTextColor={valueColorScreen.ColorPlaceHolder}
    />
  )
}
