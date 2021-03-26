import { combineReducers, Reducer } from 'redux'

import { ApplicationState } from '@store/types'

import auth from './auth'
import { AuthTypes } from './auth/types'
import config from './config'

const combinedReducers = combineReducers({
  auth,
  config,
})

const blacklist = ['config']

const rootReducer: Reducer<ApplicationState> = (state, action) => {
  if (action.type === AuthTypes.SIGN_OUT_SUCCESS) {
    const reducers = Object.keys(state as ApplicationState)
    reducers
      .filter(reducer => !blacklist.some(item => reducer === item))
      .forEach(reducer => {
        if (state) {
          // eslint-disable-next-line no-param-reassign
          state[reducer as keyof ApplicationState] = undefined as any
        }
      })
  }

  return combinedReducers(state, action)
}

export default rootReducer
