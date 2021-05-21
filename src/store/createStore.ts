/* eslint-disable no-console */
import ReactotronReactNative from 'reactotron-react-native'
import {
  applyMiddleware,
  compose,
  createStore,
  Middleware,
  Reducer,
} from 'redux'

export default (reducers: Reducer, middlewares: Middleware[]) => {
  const enhancer =
    __DEV__ && (console.tron as typeof ReactotronReactNative)?.createEnhancer
      ? compose(
          (console.tron as typeof ReactotronReactNative).createEnhancer?.() ??
            (() => null),
          applyMiddleware(...middlewares),
        )
      : applyMiddleware(...middlewares)

  return createStore?.(reducers, enhancer)
}
