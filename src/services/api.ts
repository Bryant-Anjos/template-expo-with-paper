import axios from 'axios'

import { apiUrl } from '@constants/env'

const api = axios.create({
  baseURL: apiUrl,
})

export default api
