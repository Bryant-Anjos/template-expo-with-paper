import { StyleSheet } from 'react-native'

const themedStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
    },
    text: {
      fontSize: 22,
      color: theme.colors.primary,
      marginBottom: 10,
    },
    apiView: {
      marginTop: 15,
    },
  })

export default themedStyles
