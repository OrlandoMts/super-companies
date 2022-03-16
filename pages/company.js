import React from 'react'
import Layout from '../src/components/Layout'
import CompanyList from '../src/components/CompanyList'
import Head from 'next/head'

const company = () => {
    return (
        <Layout>
          <Head>
              <title>Empresas</title>
              <meta name="description" content="Empresas" />
              <link rel="icon" href="/favicon.svg" />
          </Head>
          <div>
            <CompanyList />
          </div>  
        </Layout>
        );
}

export default company