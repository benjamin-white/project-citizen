'use client'

import { NhostClient } from '@nhost/nhost-js'
import { useEffect } from 'react'

const useNHostQueryTest = () => {
  useEffect(() => {
    const nhost = new NhostClient({
      backendUrl: 'https://bjdymnmskaubnexijpns.hasura.eu-west-2.nhost.run',
    })

    ;(async () => {
      const todos = await nhost.graphql.request(`
        query {
          article(where: {title: {_eq: "The title"}}) {
            id,
            title
          }
        }
      `)
      console.log(todos)
    })()
  })
}

const NHostQueryTest = () => {
  useNHostQueryTest()
  return <h1>NHost Query Test</h1>
}

export default NHostQueryTest
