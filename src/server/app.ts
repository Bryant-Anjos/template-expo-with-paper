// eslint-disable-next-line import/no-extraneous-dependencies
import { Server } from 'miragejs'

import { apiUrl } from '@constants/env'

export default new Server({
  routes() {
    this.namespace = 'api'
    this.passthrough(apiUrl)
    this.timing = 2000

    this.get('/hello', () => {
      return { message: 'Api response' }
    })
  },
})
