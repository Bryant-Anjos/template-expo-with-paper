import React from 'react'
import { Button } from 'react-native-paper'

import Snackbar from '@components/Snackbar'
import { i18n } from '@lang/index'

const DisplaySnackbarButton: React.FC = () => {
  return (
    <Button
      mode="outlined"
      onPress={() => Snackbar.show(i18n.t('snackbar.message'))}
    >
      {i18n.t('snackbar.show')}
    </Button>
  )
}

export default DisplaySnackbarButton
