import axios from 'axios'

const api = axios.create({
  baseURL: __DEV__ ? '' : '',
})

export default api
