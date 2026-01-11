import { View, Text, StyleSheet, TextInput } from "react-native"
import { JSX } from "react"
import Header from "../../components/Header"


const Login = (): JSX.Element => {
    return (
        <View style={styles.cotasiner}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Log in</Text>
                <TextInput style={styles.input} value="EmailAdress" />
                <TextInput style={styles.input} value="Password" /> 
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <Text style={styles.footerLink}>Sign Up Here!</Text>
                </View>
            </View>
            
        </View>
    )

}

const styles = StyleSheet.create({
    cotasiner: {
        flex: 1,
        backgroundColor:'#F0F4F8'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    inner:{
        paddingHorizontal: 27,
        paddingVertical: 32,
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#FFFFFF',
        height: 48,
        padding: 8,
        fontSize: 16,
        color: '#000000',
        marginBottom: 16,
    },
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
    },
    footer:{
        flexDirection: 'row',
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        color: '#000000',
        marginRight: 8

    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3',
        marginRight: 8
    }

})

export default Login
