/**
 * Action types
 */
export enum ConfigTypes {
  TOGGLE_THEME = '@config/TOGGLE_THEME',
}

/**
 * State type
 */
export interface ConfigState {
  readonly darkTheme: boolean
}
