import '@testing-library/jest-native/extend-expect'

import * as React from 'react'
import { Provider as StoreProvider } from 'react-redux'

import { StyledProvider } from '@contexts/StyledProvider'
import { store } from '@store/index'
import { fireEvent, render } from '@testing-library/react-native'

import ToggleThemeButton from './index'

jest.mock('reactotron-react-native')

it('ToggleThemeButton renders correctly', async () => {
  const { getByText } = render(
    <StoreProvider store={store}>
      <StyledProvider>
        <ToggleThemeButton />
      </StyledProvider>
    </StoreProvider>,
  )

  const button = await getByText('Mudar o tema')
  fireEvent.press(button)
  expect(store.getState().config.darkTheme).toBe(true)
  fireEvent.press(button)
  expect(store.getState().config.darkTheme).toBe(false)
})
