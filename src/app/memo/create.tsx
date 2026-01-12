import { View, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native"
import { JSX, memo } from "react"
import Header from "../../components/Header"
import CircleButton from "../../components/CircleButton"
import { Entypo } from '@expo/vector-icons'
import Icon from "../../components/Icon"
import { router } from "expo-router"

const handlePress =(): void => {
    // 保存処理をここに実装
    router.back()
}


const Create = (): JSX.Element => {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <Header />
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value=''></TextInput>
            </View>
            <CircleButton onPress={handlePress}>
                  <Icon name="check" size={40} color="#ffffff" />
            </CircleButton>
        </KeyboardAvoidingView>
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

export default Create 