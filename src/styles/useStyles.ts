import { StyleSheet } from 'react-native'

const useStyles = <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(
  styles: T & StyleSheet.NamedStyles<T> = {} as T & StyleSheet.NamedStyles<T>,
): T => StyleSheet.create(styles)

export default useStyles
