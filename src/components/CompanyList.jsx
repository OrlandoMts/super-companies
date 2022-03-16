import React, {useState, useEffect} from 'react'
import * as CompanyServer from '../utils/CompanyServer'

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
    listCompanies()
  },[])

  return (
    <div>
        <h2>Company list</h2>
        {companies.map(companie => (
          <p key={companie.id}>{companie.name}</p>
        ))}
    </div>
  )
}

export default CompanyList