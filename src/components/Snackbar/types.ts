import { Durations, Themes } from './enums'

/**
 * Action types
 */
export enum SnackbarTypes {
  SHOW_SNACKBAR_MESSAGE = '@app/SHOW_SNACKBAR_MESSAGE',
  DISMISS_SNACKBAR_MESSAGE = '@app/DISMISS_SNACKBAR_MESSAGE',
}

/**
 * State types
 */
export interface SnackbarState {
  readonly message: string
  readonly duration?: SnackbarDurations
  readonly theme?: SnackbarThemes
}

/**
 * Data types
 */
export type SnackbarThemes = Themes
export type SnackbarDurations = Durations
