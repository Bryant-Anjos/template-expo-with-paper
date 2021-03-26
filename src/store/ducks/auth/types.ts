/**
 * Action types
 */
export enum AuthTypes {
  SIGN_IN = '@auth/SIGN_IN',
  SIGN_OUT_REQUEST = '@auth/SIGN_OUT_REQUEST',
  SIGN_OUT_SUCCESS = '@auth/SIGN_OUT_SUCCESS',
}

/**
 * Data types
 */
export interface User {
  id: string
  name: string
  email: string
}

/**
 * State type
 */
export interface AuthState {
  readonly signed: boolean
  readonly accessToken: string
  readonly user?: User
  readonly error: string
  readonly success: string
}
