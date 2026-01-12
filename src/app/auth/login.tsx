import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { JSX } from "react"
import Button from "../../components/Buttun"
import InputText from "../../components/InputText"
import { Link, router } from "expo-router"

const handlePress = (): void => {
    // ログイン処理をここに実装
    router.push('/memo/list')
}


const Login = (): JSX.Element => {
    return (
        <View style={styles.cotasiner}>
            <View style={styles.inner}>
                <Text style={styles.title}>Log in</Text>
                <InputText value="EmailAdress" />
                <InputText value="Password" /> 
                <Button label="Submit" onPress={handlePress} />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <Link href='/auth/sign_up' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign Up Here!</Text>
                        </TouchableOpacity>
                    </Link>
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

export default Login
