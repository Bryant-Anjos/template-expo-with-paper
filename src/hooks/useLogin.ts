import { useState } from 'react'
import { useDispatch } from 'react-redux'

import api from '@services/api'
import { signIn } from '@store/ducks/auth/actions'

export const useLogin = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const defaultLogin = (email: string, password: string) => {
    setLoading(true)
    setError('')

    const body = {
      email,
      password,
    }

    api
      .post('/auth/login', body)
      .then(({ data: { accessToken } }) => {
        api.defaults.headers.Authorization = `Bearer ${accessToken}`

        api.get('/auth/me').then(({ data }) => {
          dispatch(
            signIn({
              accessToken,
              user: data,
            }),
          )
        })
      })
      .catch(err => setError(err.response.data.error))
      .finally(() => setLoading(false))
  }

  return { loading, error, defaultLogin }
}
