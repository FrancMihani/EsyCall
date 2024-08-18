import React from 'react'
import { Text } from 'react-native'
import styles from 'components/text/Title/Title.styles'

import { TextProps as Props } from 'react-native/Libraries/Text/Text'
export const TitleComponent = (props: Props) => <Text {...props} style={[styles.title, props.style]} />
