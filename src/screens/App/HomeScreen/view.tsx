import React from 'react'
import { Text } from 'react-native-paper'

import logo from '@assets/svg/react.svg'
import { LoaderResolver } from '@components/Loaders/LoaderResolver'
import SVG from '@components/SVG'
import { i18n } from '@lang/index'

import DisplaySnackbarButton from './components/DisplaySnackbarButton'
import Loader from './components/Loader'
import ToggleThemeButton from './components/ToggleThemeButton'
import { Container, Spacing, TextPrimary } from './styles'

interface Props {
  loading: boolean
  message: string
}

const HomeScreenView: React.FC<Props> = ({ loading, message }: Props) => (
  <Container>
    <SVG source={logo} width={50} height={50} />

    <TextPrimary>{i18n.t('hello-world')}</TextPrimary>
    <ToggleThemeButton />

    <Spacing />

    <DisplaySnackbarButton />

    <Spacing />

    <LoaderResolver loading={loading} loader={Loader}>
      <Text>{message}</Text>
    </LoaderResolver>
  </Container>
)

export default HomeScreenView
