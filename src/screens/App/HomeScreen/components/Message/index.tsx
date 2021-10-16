import React from 'react'
import { Text } from 'react-native-paper'

import { States, useGetMessage } from '@hooks/useHelloWorld'

import Loader from './components/Loader'

const Message = () => {
  const result = useGetMessage()

  switch (result[0] /* state */) {
    case States.IDLE:
      return <></>
    case States.LOADING:
      return <Loader />
    case States.SUCCESS: {
      const [, data] = result

      return <Text>{data.message}</Text>
    }
    case States.FAILURE: {
      const [, error] = result

      return <Text>{error.message}</Text>
    }
    default:
      return <></>
  }
}

export default Message
