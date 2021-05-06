import React from 'react'
import { SvgProps } from 'react-native-svg'

type Props = SvgProps & {
  source: React.FC<SvgProps>
}

function SVG(props: Props) {
  const { source: Component, ...rest } = props
  return <Component {...rest} />
}

export default SVG
