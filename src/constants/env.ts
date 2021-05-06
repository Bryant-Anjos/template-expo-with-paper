/* eslint-disable import/no-unresolved */
import { API_URL, ASYNC_STORE_KEY } from '@env'

const asyncStoreKey = ASYNC_STORE_KEY
const ipAddress = '192.168.0.100'
const devApiUrl = `http://${ipAddress}/api`
const apiUrl = __DEV__ ? devApiUrl : API_URL

export { apiUrl, asyncStoreKey, ipAddress }
