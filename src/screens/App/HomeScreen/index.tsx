import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Button, Text } from 'react-native-paper'
import { useDispatch } from 'react-redux'

import { useThemedStyles } from '@hooks/useThemedStyles'
import { i18n } from '@lang/index'
import api from '@services/api'
import { toggleTheme } from '@store/ducks/config/actions'

import themedStyles from './styles'

const HomeScreen: React.FC = () => {
  const { styles } = useThemedStyles(themedStyles)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setLoading(true)

    api
      .get('api/hello')
      .then(({ data }) => setMessage(data.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n.t('hello-world')}</Text>
      <Button mode="contained" onPress={() => dispatch(toggleTheme())}>
        {i18n.t('toggle-theme')}
      </Button>

      <View style={styles.apiView}>
        {loading ? <ActivityIndicator size="large" /> : <Text>{message}</Text>}
      </View>
    </View>
  )
}

export default HomeScreen
