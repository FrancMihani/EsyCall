import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootScreensNavigationProps = {
  HomeScreen: undefined
}

export type PropsFor<T extends keyof RootScreensNavigationProps> = NativeStackScreenProps<RootScreensNavigationProps, T>
