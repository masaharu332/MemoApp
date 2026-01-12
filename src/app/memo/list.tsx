import { View, Text, StyleSheet } from 'react-native'
import { JSX } from 'react'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import { Entypo } from '@expo/vector-icons';
import Icon  from '../../components/Icon'

import { router } from 'expo-router';

const handlePress = (): void => {
  // メモ新規作成画面へ遷移
    router.push('/memo/create') 
}


const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
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
