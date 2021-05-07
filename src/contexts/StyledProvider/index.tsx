import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'

import { ApplicationState } from '@store/types'
import { CombinedDarkTheme, CombinedDefaultTheme } from '@theme/combinedThemes'

interface Props {
  children: React.ReactNode
}

export const StyledProvider: React.FC<Props> = ({ children }: Props) => {
  const darkTheme = useSelector(
    ({ config }: ApplicationState) => config.darkTheme,
  )

  const theme = useMemo(
    () => (darkTheme ? CombinedDarkTheme : CombinedDefaultTheme),
    [darkTheme],
  )

  return (
    <ThemeProvider theme={theme as ReactNativePaper.Theme}>
      {children}
    </ThemeProvider>
  )
}
