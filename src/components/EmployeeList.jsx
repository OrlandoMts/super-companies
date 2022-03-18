import React, {useState, useEffect} from 'react'
import * as EmployeeServer from '../utils/EmployeeServer'
import Employee from './Employee'
import AddEmployee from './forms/AddEmployee'

const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);
  const [visible, setVisible] = useState(false);

  const listEmployees = async () => {
    try {
      const response = await EmployeeServer.listEmployees()
      const data = await response.json()

      setEmployees(data.employees);
    } catch (error) {
      console.log('FETCH ERROR: ', error)
    }
  }

  useEffect(()=>{
    listEmployees();
  }, [])

  const handleVisible = () => {
    setVisible(true)
  }

  return (
    <div className='relative'>
        <div className='container w-100 mt-[35px] mb-[35px] flex flex-col items-center'>
          <h2 className='font-bold text-xl'>EMPLEADOS</h2>
          <button onClick={handleVisible} className="cursor-pointer bg-green-500 rounded-md text-white w-15 h-8 mt-3 pl-2 pr-2">+</button>
          {visible && <AddEmployee setVisible={setVisible} />}
        </div>
        <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center pl-8 pr-8">
          {employees.map(employee => (
            <Employee key={employee.id}
              name={employee.name} 
              lastName={employee.lastName} 
              age={employee.age}
            />
          ))}
        </div>
    </div>
  )
}

export default EmployeeList