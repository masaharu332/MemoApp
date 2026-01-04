import { View, Text, StyleSheet, ScrollView } from "react-native"
import { JSX, memo } from "react"
import Header from "../../components/Header"
import CircleButton from "../../components/CircleButton"
import { Entypo } from '@expo/vector-icons';

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2025年10月1日</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    1. 牛乳
                    2. 卵
                    3. パン
                </Text>
            </ScrollView>
            <CircleButton style={{ top: 160, bottom: 'auto' }}>
                <Entypo name="plus" size={40}/>
            </CircleButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: '#68B76D',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        fontSize: 20,
        lineHeight: 32,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 4
    },
    memoDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#ffffff'
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'

    }

})
export default Detail