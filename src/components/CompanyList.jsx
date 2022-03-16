import React, {useState, useEffect} from 'react'
import * as CompanyServer from '../utils/CompanyServer'
import Company from './Company'

const CompanyList = () => {

  const [companies, setCompanies] = useState([])

  const listCompanies = async () => {
    try {
      const response = await CompanyServer.listCompanies();
      const data = await response.json();
      
      setCompanies(data.companies);
    } catch (error) {
      console.log('FETCH ERROR: ',error)
    }
  }

  useEffect(()=>{
    listCompanies();
  },[])

  return (
    <div>
        <div className='container w-100 mt-[35px] mb-[35px] flex justify-center'>
          <h2 className='font-bold text-xl'>EMPRESAS</h2>
        </div>
        <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center pl-8 pr-8">
          {companies.map(companie => (
            <Company key={companie.id}
              name={companie.name} 
              website={companie.webSite} 
              foundation={companie.foundation}
            />
          ))}
        </div>
    </div>
  )
}

export default CompanyList