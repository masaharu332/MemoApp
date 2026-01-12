import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { JSX } from "react"

const LogOutButtton = () : JSX.Element => {
    return (
        <TouchableOpacity>
            <Text style={styles.text}>ログアウト</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 24,
        color: '#000000'
    }
})

export default LogOutButtton