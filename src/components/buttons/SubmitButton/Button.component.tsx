import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import useStyles from 'components/buttons/SubmitButton/Button.styles'

import { TouchableOpacityProps } from 'react-native/Libraries/Components/Touchable/TouchableOpacity'

export const ButtonComponent = (props: TouchableOpacityProps) => {
  const styles = useStyles(props.disabled)

  return (
    <TouchableOpacity disabled={props.disabled} style={[styles.container, props.style]} onPress={props.onPress}>
      <Text {...props} style={styles.text} onPress={undefined} />
    </TouchableOpacity>
  )
}
