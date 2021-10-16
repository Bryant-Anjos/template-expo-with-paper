import axios from 'axios'
import { useEffect, useState } from 'react'

export enum States {
  IDLE,
  LOADING,
  SUCCESS,
  FAILURE,
}

type Message = { message: string }

type Data = Message

type Results =
  | [States.IDLE, undefined]
  | [States.LOADING, undefined]
  | [States.SUCCESS, Data]
  | [States.FAILURE, Error]

export const useGetMessage = (): Results => {
  const [result, setResult] = useState<Results>([States.IDLE, undefined])

  useEffect(() => {
    setResult([States.LOADING, undefined])

    axios
      .get<Message>('api/hello')
      .then(response => setResult([States.SUCCESS, response.data]))
      .catch(error => setResult([States.FAILURE, error]))
  }, [])

  return result
}
