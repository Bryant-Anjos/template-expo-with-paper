import React from 'react'

import ThemedSkeleton from '@components/Loaders/Skeleton/ThemedSkeleton'

const Skeleton: React.FC = () => (
  <ThemedSkeleton>
    <ThemedSkeleton.Item width={100} height={26} borderRadius={4} />
  </ThemedSkeleton>
)

export default Skeleton
