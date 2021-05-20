import React from 'react'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'

import { i18n } from '@lang/index'
import { toggleTheme } from '@store/ducks/config/actions'

const ToggleThemeButton: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <Button mode="contained" onPress={() => dispatch(toggleTheme())}>
      {i18n.t('toggle-theme')}
    </Button>
  )
}

export default ToggleThemeButton
