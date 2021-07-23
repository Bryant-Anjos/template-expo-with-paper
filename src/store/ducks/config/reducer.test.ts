import { Action, toggleTheme } from './actions'
import reducer from './index'

test('config should return the initial state', () => {
  expect(reducer(undefined, {} as Action)).toEqual({
    darkTheme: false,
  })
})

test('toggleTheme should toggle the theme', () => {
  expect(reducer(undefined, toggleTheme())).toEqual({
    darkTheme: true,
  })

  const previousState = { darkTheme: true }
  expect(reducer(previousState, toggleTheme())).toEqual({
    darkTheme: false,
  })
})
