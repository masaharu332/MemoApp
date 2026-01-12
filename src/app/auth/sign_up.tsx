import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { JSX } from "react"
import Header from "../../components/Header"
import Button from "../../components/Buttun"
import InputText from "../../components/InputText"


const SignUp = (): JSX.Element => {
    return (
        <View style={styles.cotasiner}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <InputText value="EmailAdress" />
                <InputText value="Password" />
                <Button label="Submit" />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already Registerd?</Text>
                    <TouchableOpacity>
                        <Text style={styles.footerLink}>Log In</Text>
                    </TouchableOpacity>
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

export default SignUp
