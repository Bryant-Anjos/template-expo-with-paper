import React from 'react'
import { Colors, useTheme } from 'react-native-paper'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

type Props = React.ComponentProps<typeof SkeletonPlaceholder>
type IThemedSkeleton = React.FC<Props> & {
  Item: typeof SkeletonPlaceholder.Item
}

const ThemedSkeleton: IThemedSkeleton = (props: Props) => {
  const { dark } = useTheme()

  const backgroundColor = dark ? Colors.grey700 : undefined
  const highlightColor = dark ? Colors.grey600 : undefined

  return (
    <SkeletonPlaceholder
      backgroundColor={backgroundColor}
      highlightColor={highlightColor}
      {...props}
    />
  )
}

ThemedSkeleton.Item = SkeletonPlaceholder.Item

export default ThemedSkeleton
