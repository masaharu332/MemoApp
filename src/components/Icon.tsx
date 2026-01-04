import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { JSX } from 'react'

import fontDate from '../../assets/fonts/icomoon.ttf'
import fontSelection from '../../assets/fonts/selection.json'

const CustomIcon = createIconSetFromIcoMoon(
    fontSelection,
    'icomoon',
    'icomoon.ttf'
)

const Icon = () :JSX.Element | null => {
    const [fontsLoaded] = useFonts({
        IcoMoon: fontDate
    })
    if (!fontsLoaded) {
        return null
    }
    return (
        <CustomIcon name="plus" size={40} color='red' />
    )
}

export default Icon
