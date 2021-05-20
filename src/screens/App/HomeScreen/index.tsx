import axios from 'axios'
import React, { useEffect, useState } from 'react'

import HomeScreenView from './view'

const HomeScreenContainer: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setLoading(true)

    axios
      .get('api/hello')
      .then(({ data }) => setMessage(data.message))
      .finally(() => setLoading(false))
  }, [])

  return <HomeScreenView loading={loading} message={message} />
}

export default HomeScreenContainer
