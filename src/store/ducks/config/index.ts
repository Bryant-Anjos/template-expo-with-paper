import { Reducer } from 'redux'

import { Action } from './actions'
import { ConfigState, ConfigTypes } from './types'

const INITIAL_STATE: ConfigState = {
  darkTheme: false,
}

const reducer: Reducer<ConfigState, Action> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ConfigTypes.TOGGLE_THEME:
      return {
        ...state,
        darkTheme: !state.darkTheme,
      }
    default:
      return state
  }
}

export default reducer
