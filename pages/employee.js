import React from 'react'
import Layout from '../src/components/Layout'
import EmployeeList from '../src/components/EmployeeList'
import Head from 'next/head'

const employee = () => {
    return (
        <Layout>
          <Head>
              <title>Empleados</title>
              <meta name="description" content="Empleados" />
              <link rel="icon" href="/favicon.svg" />
          </Head>
          <div>
            <EmployeeList />
          </div>  
        </Layout>
        );
}

export default employee