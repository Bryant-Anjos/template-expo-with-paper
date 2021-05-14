import { dismissSnackbarMessage, showSnackbarMessage } from './actions'
import { Durations, Themes } from './enums'
import store from './store'
import { SnackbarState } from './types'

const show = (message: string, args?: Omit<SnackbarState, 'message'>) =>
  store.dispatch(showSnackbarMessage({ ...args, message }))

const dismiss = () => store.dispatch(dismissSnackbarMessage())

const Snackbar = {
  ...Themes,
  ...Durations,
  show,
  dismiss,
}

export default Snackbar
