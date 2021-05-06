import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { useDispatch } from 'react-redux'

import logo from '@assets/svg/react.svg'
import SVG from '@components/SVG'
import { useThemedStyles } from '@hooks/useThemedStyles'
import { i18n } from '@lang/index'
import { toggleTheme } from '@store/ducks/config/actions'

import Loader from './Loader'
import themedStyles from './styles'

const HomeScreen: React.FC = () => {
  const { styles } = useThemedStyles(themedStyles)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setLoading(true)

    axios
      .get('api/hello')
      .then(({ data }) => setMessage(data.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <View style={styles.container}>
      <SVG source={logo} width={50} height={50} />

      <Text style={styles.text}>{i18n.t('hello-world')}</Text>
      <Button mode="contained" onPress={() => dispatch(toggleTheme())}>
        {i18n.t('toggle-theme')}
      </Button>

      <View style={styles.apiView}>
        {loading ? <Loader /> : <Text>{message}</Text>}
      </View>
    </View>
  )
}

export default HomeScreen
