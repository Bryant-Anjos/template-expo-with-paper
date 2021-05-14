import { StyleSheet } from 'react-native'

import { SnackbarColors } from './colors'
import { Themes } from './enums'

const styles = StyleSheet.create({
  [Themes.SUCCESS]: {
    backgroundColor: SnackbarColors.SUCCESS,
  },
  [Themes.ERROR]: {
    backgroundColor: SnackbarColors.ERROR,
  },
  [Themes.WARNING]: {
    backgroundColor: SnackbarColors.WARNING,
  },
})

export default styles
