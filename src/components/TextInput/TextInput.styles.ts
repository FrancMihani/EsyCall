import _useStyles from 'styles/useStyles'
import useTheme from 'theme/useTheme'

const useStyles = (isFocused: boolean) => {
  const { colors } = useTheme()
  return _useStyles({
    input: {
      color: colors.onSurface,
      borderWidth: 2,
      borderColor: isFocused ? colors.secondary : colors.outline,
      backgroundColor: isFocused ? colors.secondary10 : colors.outline10,
      borderRadius: 5,
      minHeight: 48,
      fontSize: 20,
    },
  })
}

export default useStyles
