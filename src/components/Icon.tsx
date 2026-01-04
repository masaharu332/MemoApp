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

interface Props {
    name: string,
    size: number,
    color: string
}

const Icon = (props: Props) :JSX.Element | null => {
    const { name, size, color } = props
    const [fontsLoaded] = useFonts({
        IcoMoon: fontDate
    })
    if (!fontsLoaded) {
        return null
    }
    return (
        <CustomIcon name={name} size={size} color={color} />
    )
}

export default Icon
