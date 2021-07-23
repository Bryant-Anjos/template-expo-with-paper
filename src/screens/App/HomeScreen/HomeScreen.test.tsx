import axios from 'axios'
import * as React from 'react'
import { Provider as StoreProvider } from 'react-redux'

import { StyledProvider } from '@contexts/StyledProvider'
import { store } from '@store/index'
import { render, waitFor } from '@testing-library/react-native'

import HomeScreen from './index'

jest.mock('axios')
jest.mock('reactotron-react-native')

const mockedAxios = axios as jest.Mocked<typeof axios>

it('renders correctly', async () => {
  const response = {
    data: { message: 'Hello world!' },
  }

  mockedAxios.get.mockResolvedValue(response)
  const { getByText } = render(
    <StoreProvider store={store}>
      <StyledProvider>
        <HomeScreen />
      </StyledProvider>
    </StoreProvider>,
  )

  expect(await waitFor(() => getByText('Hello world!'))).toBeDefined()
})
