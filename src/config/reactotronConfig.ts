/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'

const IP_ADDRESS = '192.168.0.100'

if (__DEV__) {
  const tron = Reactotron.configure({ host: IP_ADDRESS })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga({}))
    .connect()

  tron.clear!()

  console.tron = tron
}
