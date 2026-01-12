import { View, Text, StyleSheet } from 'react-native'
import { JSX, use } from 'react'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon  from '../../components/Icon'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import LogOutButtton from '../../components/LogOutButton'

const handlePress = (): void => {
  // メモ新規作成画面へ遷移
    router.push('/memo/create') 
}


const List = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
        navigation.setOptions({
      headerRight: () => { return <LogOutButtton /> },
      headerRightContainerStyle: {
        backgroundColor: 'transparent',
      }
    })
  }, [])
  return (
    <View style={styles.container}>
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name="plus" size={40} color="#fff" />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
  

})

export default List
