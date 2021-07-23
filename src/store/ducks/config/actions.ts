import { action } from 'typesafe-actions'

import { ConfigTypes } from './types'

export const toggleTheme = () => action(ConfigTypes.TOGGLE_THEME)

export type Action = ReturnType<typeof toggleTheme>
