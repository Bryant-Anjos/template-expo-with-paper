import { action } from 'typesafe-actions'

import { Durations, Themes } from './enums'
import { SnackbarState, SnackbarTypes } from './types'

export const showSnackbarMessage = ({
  message,
  duration = Durations.LENGTH_LONG,
  theme = Themes.SUCCESS,
}: SnackbarState) =>
  action(SnackbarTypes.SHOW_SNACKBAR_MESSAGE, {
    message,
    duration,
    theme,
  })

export const dismissSnackbarMessage = () =>
  action(SnackbarTypes.DISMISS_SNACKBAR_MESSAGE)

export type Action =
  | ReturnType<typeof showSnackbarMessage>
  | ReturnType<typeof dismissSnackbarMessage>
