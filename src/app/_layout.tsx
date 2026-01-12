import { Stack } from 'expo-router'
import { JSX } from 'react' 

const Layout = (): JSX.Element => {
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#15681B'
        },
        headerTintColor: '#ffffff',
        headerTitle: 'Memo App',
        headerBackTitle: '戻る',
        headerTitleStyle: {
            fontSize:22,
            fontWeight: 'bold'
        }
    }} />
}
export default Layout
