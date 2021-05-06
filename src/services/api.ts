import axios from 'axios'

import { apiUrl, devApiUrl } from '@constants/env'

const api = axios.create({
  baseURL: __DEV__ ? devApiUrl : apiUrl,
})

export default api
