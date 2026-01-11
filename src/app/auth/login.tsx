import { View, Text, StyleSheet, TextInput } from "react-native"
import { JSX } from "react"
import Header from "../../components/Header"


const Login = (): JSX.Element => {
    return (
        <View style={styles.cotasiner}>
            <Header />
            <View>
                <Text>Log in</Text>
                <TextInput value="EmailAdress" />
                <TextInput value="Password" /> 
                <View>
                    <Text>Submit</Text>
                </View>
                <Text>Not registered?</Text>
                <Text>Sign Up Here!</Text>
            </View>
            
        </View>
    )

}

const styles = StyleSheet.create({
    cotasiner: {
        flex: 1
    }
})

export default Login
