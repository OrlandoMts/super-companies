import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../src/components/Layout'
// import Company from '../src/components/Company'
import CompanyList from '../src/components/CompanyList'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>  
      </div>

      <main>
        {/* <Company /> */}
        <CompanyList />
      </main>
    </Layout>
  )
}
