import React from 'react'
import Buttons from './Buttons'

const Employee = ({name, lastName, age}) => {
  return (
    <div className="container mt-3 mb-3 p-2 shadow rounded-md bg-white">
        <h3 className=' text-[#B1DE97] font-bold'>{name}</h3>
        <p>Apellidos: {lastName}</p>
        <p>Edad: {age} años</p>
        <Buttons />
    </div>
  )
}

export default Employee