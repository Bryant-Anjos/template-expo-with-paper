import { Reducer } from 'redux'

import { Action } from './actions'
import { SnackbarState, SnackbarTypes } from './types'

export const INITIAL_STATE: SnackbarState = {
  message: '',
  duration: undefined,
  theme: undefined,
}

const reducer: Reducer<SnackbarState, Action> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case SnackbarTypes.SHOW_SNACKBAR_MESSAGE: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case SnackbarTypes.DISMISS_SNACKBAR_MESSAGE: {
      return INITIAL_STATE
    }
    default:
      return state
  }
}

export default reducer
