// eslint-disable-next-line import/no-extraneous-dependencies
import { Server } from 'miragejs'

export default new Server({
  routes() {
    this.namespace = 'api'
    this.timing = 2000

    this.get('/hello', () => {
      return { message: 'Api response' }
    })
  },
})
