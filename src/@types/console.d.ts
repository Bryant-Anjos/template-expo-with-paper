/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-native'

declare global {
  interface Console {
    tron: typeof Reactotron
  }
}
