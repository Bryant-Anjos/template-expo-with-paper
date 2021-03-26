import { action } from 'typesafe-actions'

import { ReduxPersistor, ReduxPersistorTypes } from './types'

export const setTokenRequest = (reduxPersistor: ReduxPersistor) =>
  action(ReduxPersistorTypes.REHYDRATE, reduxPersistor)
