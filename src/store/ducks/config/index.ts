import { Reducer } from 'redux'

import { ConfigState, ConfigTypes } from './types'

const INITIAL_STATE: ConfigState = {
  darkTheme: false,
}

const reducer: Reducer<ConfigState> = (state = INITIAL_STATE, action) => {
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
