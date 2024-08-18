import React, { useState } from 'react'
import useStyles from 'components/TextInput/TextInput.styles'
import { TextInput } from 'react-native'

import { TextInputProps } from 'react-native/Libraries/Components/TextInput/TextInput'
import useTheme from 'theme/useTheme'

export const TextInputComponent = (props: TextInputProps) => {
  const { colors } = useTheme()
  const [isFocused, setIsFocused] = useState(false)
  const styles = useStyles(isFocused)

  return (
    <TextInput
      {...props}
      cursorColor={colors.secondary}
      placeholderTextColor={isFocused ? colors.secondary : colors.outline}
      style={[styles.input, props.style]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  )
}
