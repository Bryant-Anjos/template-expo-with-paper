import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'

import logo from '@assets/svg/react.svg'
import { LoaderResolver } from '@components/Loaders/LoaderResolver'
import SVG from '@components/SVG'
import { i18n } from '@lang/index'
import { toggleTheme } from '@store/ducks/config/actions'

import Loader from './Loader'
import { ApiWrapper, Container, Text } from './styles'

const HomeScreen: React.FC = () => {
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
    <Container>
      <SVG source={logo} width={50} height={50} />

      <Text>{i18n.t('hello-world')}</Text>
      <Button mode="contained" onPress={() => dispatch(toggleTheme())}>
        {i18n.t('toggle-theme')}
      </Button>

      <ApiWrapper>
        <LoaderResolver loading={loading} loader={Loader}>
          <Text>{message}</Text>
        </LoaderResolver>
      </ApiWrapper>
    </Container>
  )
}

export default HomeScreen
