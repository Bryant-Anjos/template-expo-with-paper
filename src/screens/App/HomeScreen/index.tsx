import axios from 'axios'
import React, { useEffect, useState } from 'react'

import HomeScreenView from './view'

const HomeScreenContainer: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    let mounted = true

    async function fetchMessage() {
      if (mounted) setLoading(true)

      try {
        const response = await axios.get('api/hello')

        if (mounted) setMessage(response.data.message)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    fetchMessage()

    return function unmount() {
      mounted = false
    }
  }, [])

  return <HomeScreenView loading={loading} message={message} />
}

export default HomeScreenContainer
