declare module '*.jpg'
declare module '*.png'
declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'

  const content: React.FC<SvgProps>
  export default content
}

declare module '@env' {
  export const API_URL: string
  export const ASYNC_STORE_KEY: string
}
