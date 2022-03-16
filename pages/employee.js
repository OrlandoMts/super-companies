import React from 'react'
import Layout from '../src/components/Layout'
import Employee from '../src/components/Employee'
import Head from 'next/head'

const employee = () => {
    return (
        <Layout>
          <Head>
              <title>Empleados</title>
              <meta name="description" content="Empleados" />
              <link rel="icon" href="/favicon.svg" />
          </Head>
          <div >
            <Employee/>
          </div>  
        </Layout>
        );
}

export default employee