import '@config/reactotronConfig'

import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import SnackbarProvider from '@components/Snackbar/provider'
import { PaperProvider } from '@contexts/PaperProvider'
import { StyledProvider } from '@contexts/StyledProvider'
import { persistor, store } from '@store/index'

import Routes from './src/routes'

__DEV__ &&
  (async () => {
    ;(await import('@server/app')).default
  })()

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <StyledProvider>
            <SnackbarProvider>
              <Routes />
            </SnackbarProvider>
          </StyledProvider>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  )
}

export default App
