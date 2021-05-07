import React from 'react'

interface Props {
  children: JSX.Element
  loader: React.FC
  loading: boolean
}

export const LoaderResolver: React.FC<Props> = (props: Props) => {
  const { children, loader: Loader, loading } = props

  return loading ? <Loader /> : children
}
