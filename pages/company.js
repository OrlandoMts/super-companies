import React from 'react'
import Layout from '../src/components/Layout'
// import Company from '../src/components/Company'
import CompanyList from '../src/components/CompanyList'
import Head from 'next/head'

// Aqui dejare de renderizar company y cambiare por companyList

const company = () => {
    return (
        <Layout>
          <Head>
              <title>Empresas</title>
              <meta name="description" content="Empresas" />
              <link rel="icon" href="/favicon.svg" />
          </Head>
          <div >
            {/* <Company/> */}
            <CompanyList />
          </div>  
        </Layout>
        );
}

export default company