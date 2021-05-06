import React from 'react'

interface SVGProps {
  width: number
  height: number
  style?: React.CSSProperties
  alt?: string
}

type Props = SVGProps & {
  source: string
}

function SVG(props: Props) {
  const { source, alt = '', ...rest } = props
  return <img src={source} alt={alt} {...rest} />
}

export default SVG
