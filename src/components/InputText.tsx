import { View, Text, StyleSheet, type ViewStyle, TextInput } from 'react-native'
import { JSX } from 'react'
import { useState } from 'react'

interface Props {
    value: String;
}

const InputText = (props: Props) : JSX.Element => {
    const {value} = props
    const [inputValue, setInputValue] = useState('');
    return (
        <View>
            <TextInput 
              style={styles.input}
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
              placeholder={props.value as string}> 
              
            </TextInput>
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