/**
 * Action types
 */
export enum ReduxPersistorTypes {
  REHYDRATE = 'persist/REHYDRATE',
}

/**
 * Data types
 */
export interface ReduxPersistor {
  auth: {
    accessToken: string
  }
}
