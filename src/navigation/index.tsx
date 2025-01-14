import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from 'screens/Home.screen.tsx'
import { RootScreensNavigationProps } from 'navigation/types'
import useTheme from 'theme/useTheme'

const Stack = createNativeStackNavigator<RootScreensNavigationProps>()

const Navigation = () => {
  const { navigatorTheme } = useTheme()
  return (
    <NavigationContainer theme={navigatorTheme}>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
