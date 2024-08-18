const baseColors = {
  primary: '#385775',
  secondary: '#FBD24D',
  secondary10: '#FBD24D10',
  outline: '#B7C0C6',
  outline10: '#B7C0C610',
  success: '#0A8150',
  danger: '#DE3617',
}

export const lightTheme = {
  colors: {
    ...baseColors,
    onSurface: '#000000',
    onSurfaceVariant: baseColors.primary,
    surface: '#FFFFFF',
  },
}

export const darkTheme = {
  colors: {
    ...baseColors,
    onSurface: '#FFFFFF',
    onSurfaceVariant: '#8da8c4',
    surface: '#000000',
  },
}
