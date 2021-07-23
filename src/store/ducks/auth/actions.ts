import { action } from 'typesafe-actions'

import { AuthTypes, User } from './types'

export const signIn = (payload: { accessToken: string; user: User }) =>
  action(AuthTypes.SIGN_IN, payload)

export const signOutRequest = () => action(AuthTypes.SIGN_OUT_REQUEST)

export const signOutSuccess = () => action(AuthTypes.SIGN_OUT_SUCCESS)

export type Action =
  | ReturnType<typeof signIn>
  | ReturnType<typeof signOutRequest>
  | ReturnType<typeof signOutSuccess>
