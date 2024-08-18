import _useStyles from 'styles/useStyles'
import useTheme from 'theme/useTheme'

const useStyles = (disabled?: boolean) => {
  const { colors } = useTheme()
  return _useStyles({
    container: {
      paddingVertical: 10,
      opacity: disabled ? 0.4 : 1,
      backgroundColor: colors.secondary,
      width: 'auto',
      borderRadius: 5,
    },
    text: { color: colors.onSurface, textAlign: 'center', fontSize: 18, fontWeight: '600' },
  })
}

export default useStyles
