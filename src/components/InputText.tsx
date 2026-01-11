import { View, Text, StyleSheet, type ViewStyle, TextInput } from 'react-native'
import { JSX } from 'react'

interface Props {
    value: String
}

const InputText = (props: Props) : JSX.Element => {
    const { value } = props
    return (
        <View>
            <TextInput style={styles.input}>{value}</TextInput>
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