import { Reducer } from 'redux'

import { Action } from './actions'
import { AuthState, AuthTypes, User } from './types'

const INITIAL_STATE: AuthState = {
  signed: false,
  accessToken: '',
  user: undefined,
  error: '',
  success: '',
}

const reducer: Reducer<AuthState, Action> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN: {
      type Payload = { accessToken: string; user: User }
      const { accessToken, user }: Payload = action.payload

      return {
        ...state,
        signed: true,
        accessToken,
        user,
      }
    }
    case AuthTypes.SIGN_OUT_SUCCESS:
      return INITIAL_STATE
    default:
      return state
  }
}

export default reducer
