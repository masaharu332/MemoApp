import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { JSX } from 'react'

interface Props {
    label: String
    onPress?: () => void
}

const Button = (props: Props) : JSX.Element => {
    const { label, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>      
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#15681B',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 24,
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
})


export default Button