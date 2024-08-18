import { useMemo } from 'react'
import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { darkTheme, lightTheme } from 'theme'

const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const navigatorTheme = useMemo(() => (isDarkMode ? DarkTheme : DefaultTheme), [isDarkMode])
  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode])

  return { isDarkMode, navigatorTheme, ...theme }
}

export default useTheme
