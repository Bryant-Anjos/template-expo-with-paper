import React, { useMemo } from 'react'
import { Provider } from 'react-native-paper'
import { useSelector } from 'react-redux'

import { ApplicationState } from '@store/types'
import { CombinedDarkTheme, CombinedDefaultTheme } from '@theme/combinedThemes'

interface Props {
  children: React.ReactNode
}

export const PaperProvider: React.FC<Props> = ({ children }: Props) => {
  const darkTheme = useSelector(
    ({ config }: ApplicationState) => config.darkTheme,
  )

  const theme = useMemo(
    () => (darkTheme ? CombinedDarkTheme : CombinedDefaultTheme),
    [darkTheme],
  )

  return <Provider theme={theme as ReactNativePaper.Theme}>{children}</Provider>
}
