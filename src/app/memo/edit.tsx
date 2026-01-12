import { View, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native"
import { JSX } from "react"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"
import { router } from "expo-router"

const handlePress =(): void => {
    // 保存処理をここに実装
    router.back()
}

const Edit = (): JSX.Element => {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value={'買い物\nリスト'}></TextInput>
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

export default Edit 