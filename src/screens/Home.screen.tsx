import React, { useCallback, useState } from 'react'
import { KeyboardAvoidingView, Linking, SafeAreaView, View } from 'react-native'
import { TextInput } from 'components/TextInput'
import { isIOS } from 'utils/platform'

import { PropsFor } from 'navigation/types'
import { SubmitButton } from '../components/buttons/SubmitButton'

const HomeScreen = ({}: PropsFor<'HomeScreen'>) => {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleWhatsapp = useCallback(async () => {
    try {
      await Linking.openURL(`whatsapp://send?phone=${phoneNumber}`)
    } catch (error) {
      console.log(error)
    }
  }, [phoneNumber])

  return (
    <>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <SubmitButton style={{ marginTop: 'auto', marginBottom: 10 }} onPress={handleWhatsapp}>
          Whatsapp
        </SubmitButton>
      </View>
      <KeyboardAvoidingView {...(isIOS() ? { behavior: 'padding' } : {})}>
        <SafeAreaView>
          <TextInput
            style={{ marginHorizontal: 10, marginBottom: 10 }}
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  )
}

export default HomeScreen
