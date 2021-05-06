/* eslint-disable import/no-extraneous-dependencies */
import ReactotronReactJS from 'reactotron-react-js'
import ReactotronReactNative from 'reactotron-react-native'

declare global {
  interface Console {
    tron: typeof ReactotronReactNative | typeof ReactotronReactJS
  }
}
