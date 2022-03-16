import React from 'react'
import Buttons from './Buttons'

const Company = ({name, website, foundation}) => {
  return (
    <div className="container mt-3 mb-3 p-2 shadow rounded-md bg-white">
        <h3 className=' text-[#B1DE97] font-bold'>{name}</h3>
        <p>Sitio web: {website}</p>
        <p>Año de fundación: {foundation}</p>
        <Buttons />
    </div>
  )
}

export default Company