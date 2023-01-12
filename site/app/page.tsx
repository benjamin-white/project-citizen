import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Button from '@ui/core/Button'
import NHostQueryTest from './nhost-query-test'
// import { NhostProvider, NhostClient } from '@nhost/nextjs'
// import { NhostClient } from '@nhost/nhost-js'
// import { gql } from '@apollo/client';

// const nhost = new NhostClient({
//   subdomain: 'bjdymnmskaubnexijpns',
//   region: 'eu-west-2',
// })

// const CUSTOMERS = gql`
//   query {
//     customers {
//       id
//       name
//     }
//   }
// `
// const { data, error } = await nhost.graphql.request(CUSTOMERS)

// console.log(nhost.graphql.getUrl())

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.description} ${inter.className}`}>
        <Button label="Button" />
        <NHostQueryTest />
      </div>
    </main>
  )
}

export default Home
