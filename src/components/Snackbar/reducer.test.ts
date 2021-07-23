import { Action, dismissSnackbarMessage, showSnackbarMessage } from './actions'
import Snackbar from './index'
import reducer from './reducer'

test('snackbar reducer should return the initial state', () => {
  expect(reducer(undefined, {} as Action)).toEqual({
    message: '',
    duration: undefined,
    theme: undefined,
  })
})

test('should return the default values given only a message to showSnackbarMessage', () => {
  expect(
    reducer(
      undefined,
      showSnackbarMessage({
        message: 'Test message',
      }),
    ),
  ).toEqual({
    message: 'Test message',
    duration: 8000,
    theme: 0,
  })
})

test('should return the personalized values given to showSnackbarMessage', () => {
  expect(
    reducer(
      undefined,
      showSnackbarMessage({
        message: 'Warning message!!!',
        duration: Snackbar.LENGTH_SHORT,
        theme: Snackbar.WARNING,
      }),
    ),
  ).toEqual({
    message: 'Warning message!!!',
    duration: 2000,
    theme: 2,
  })
})

test('should return none values calling dismissSnackbarMessage', () => {
  expect(reducer(undefined, dismissSnackbarMessage())).toEqual({
    message: '',
    duration: undefined,
    theme: undefined,
  })
})
