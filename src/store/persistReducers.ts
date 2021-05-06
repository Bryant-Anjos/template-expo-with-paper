import { Reducer } from 'redux'
import { persistReducer } from 'redux-persist'

// eslint-disable-next-line import/no-unresolved
import { asyncStoreKey } from '@constants/env'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: asyncStoreKey,
      storage: AsyncStorage,
      whitelist: ['auth', 'config', 'subjects', 'user'],
    },
    reducers,
  )

  return persistedReducer
}
