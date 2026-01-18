import { View, StyleSheet, TextInput, TextInputProps } from 'react-native'
import { JSX } from 'react'
import { useState } from 'react'

interface Props {
    value: string;
    secureTextEntry?: boolean;
    textContentType?: TextInputProps['textContentType'];
}

const InputText = (props: Props) : JSX.Element => {
    const {value, secureTextEntry, textContentType} = props
    const [inputValue, setInputValue] = useState('');
    return (
        <View>
            <TextInput 
              style={styles.input}
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
              placeholder={props.value}
              autoCapitalize='none'
              keyboardType={secureTextEntry ? 'default' : 'email-address'}
              secureTextEntry ={!!props.secureTextEntry}
              textContentType={textContentType}
              />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#FFFFFF',
        height: 48,
        padding: 8,
        fontSize: 16,
        color: '#000000',
        marginBottom: 16,
    }
})


export default InputText