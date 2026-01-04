import { View, TextInput, StyleSheet, ScrollView } from "react-native"
import { JSX, memo } from "react"
import Header from "../../components/Header"
import CircleButton from "../../components/CircleButton"
import { Entypo } from '@expo/vector-icons'
import Icon from "../../components/Icon"

const Edit = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value={'買い物\nリスト'}></TextInput>
            </View>
            <CircleButton>
                  <Icon name="plus" size={40} color="#ffffff" />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1
    },
    input: {        
        fontSize: 16,
        lineHeight: 24,
        color: '#000000',
        flex: 1,
        textAlignVertical: 'top'
    }
})

export default Edit 