import React, { useEffect, useMemo, useState } from 'react'
import { Colors, Snackbar as PaperSnackbar } from 'react-native-paper'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import Snackbar from './index'
import { INITIAL_STATE } from './reducer'
import store from './store'
import styles from './styles'
import { SnackbarState } from './types'

interface Props {
  children: React.ReactNode
}

const SnackbarProvider: React.FC<Props> = ({ children }: Props) => {
  const [snackbar, setSnackbar] = useState<SnackbarState>(INITIAL_STATE)

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState()
      setSnackbar(state)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const snackbarVisible = useMemo(() => !!snackbar.message, [snackbar.message])

  const CustomSnackbar: React.FC = () => (
    <PaperSnackbar
      visible={snackbarVisible}
      onDismiss={Snackbar.dismiss}
      style={styles[snackbar.theme ?? Snackbar.SUCCESS]}
      duration={snackbar.duration ?? Snackbar.LENGTH_LONG}
      action={{
        label: (
          <MaterialCommunityIcons name="close" size={24} color={Colors.white} />
        ) as any,
        onPress: Snackbar.dismiss,
      }}
    >
      {snackbar.message}
    </PaperSnackbar>
  )

  return (
    <>
      {children}
      <CustomSnackbar />
    </>
  )
}
export default SnackbarProvider
