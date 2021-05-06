/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'

const IP_ADDRESS = '192.168.0.109'

if (__DEV__) {
  const tron = Reactotron.configure({ host: IP_ADDRESS })
    .use(reactotronRedux())
    .use(reactotronSaga({}))
    .connect()

  tron.clear!()

  console.tron = tron
}
