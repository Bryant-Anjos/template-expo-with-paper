import { useMemo } from 'react'
import { useTheme } from 'react-native-paper'

export type ThemedStyles = (
  theme: ReactNativePaper.Theme,
) => ReturnType<(theme: ReactNativePaper.Theme) => unknown>

export function useThemedStyles<T extends ThemedStyles>(themedStyles: T) {
  const theme = useTheme()
  const styles = useMemo(() => themedStyles(theme), [
    theme,
    themedStyles,
  ]) as ReturnType<T>

  return { styles, theme }
}
