import _useStyles from 'styles/useStyles'
import useTheme from 'theme/useTheme'

const useStyles = () => {
  const { colors } = useTheme()
  return _useStyles({
    container: { paddingVertical: 10 },
    text: { color: colors.onSurfaceVariant, textAlign: 'center', fontSize: 18, fontWeight: '400' },
  })
}

export default useStyles
