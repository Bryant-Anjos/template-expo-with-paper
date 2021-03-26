import jwtDecode, { JwtPayload } from 'jwt-decode'
import { all, put, takeLatest } from 'redux-saga/effects'

import api from '@services/api'
import { setTokenRequest } from '@store/ducks/reduxPersistor/actions'
import { ReduxPersistorTypes } from '@store/ducks/reduxPersistor/types'

import { signOutRequest, signOutSuccess } from './actions'
import { AuthTypes } from './types'

function* signOut() {
  api.defaults.headers.Authorization = null
  yield put(signOutSuccess())
}

function* setToken({ payload }: ReturnType<typeof setTokenRequest>) {
  if (!payload) return

  const { accessToken } = payload.auth

  if (accessToken) {
    const decoded = jwtDecode<JwtPayload>(accessToken)

    if (decoded.exp! < Date.now() / 1000) {
      yield put(signOutRequest())
      return
    }

    api.defaults.headers.Authorization = `Bearer ${accessToken}`
  }
}

export default all([
  takeLatest(ReduxPersistorTypes.REHYDRATE, setToken),
  takeLatest(AuthTypes.SIGN_OUT_REQUEST, signOut),
])
