import { AuthState } from './ducks/auth/types'
import { ConfigState } from './ducks/config/types'

export interface ApplicationState {
  auth: AuthState
  config: ConfigState
}
