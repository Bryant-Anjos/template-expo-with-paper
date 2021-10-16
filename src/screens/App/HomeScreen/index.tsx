import React from 'react'

import logo from '@assets/svg/react.svg'
import SVG from '@components/SVG'
import { i18n } from '@lang/index'

import DisplaySnackbarButton from './components/DisplaySnackbarButton'
import Message from './components/Message'
import ToggleThemeButton from './components/ToggleThemeButton'
import { Container, Spacing, TextPrimary } from './styles'

const HomeScreen: React.FC = () => (
  <Container>
    <SVG source={logo} width={50} height={50} />

    <TextPrimary>{i18n.t('hello-world')}</TextPrimary>
    <ToggleThemeButton />

    <Spacing />

    <DisplaySnackbarButton />

    <Spacing />

    <Message />
  </Container>
)

export default HomeScreen
