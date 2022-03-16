import React from 'react'

const Buttons = () => {
  return (
    <div className='container flex justify-end mt-3 h-10'>
          <button className='bg-blue-500 rounded-md text-white w-15 h-8 pl-2 pr-2'>Editar</button>
          <button className='bg-red-500 rounded-md text-white w-15 h-8 ml-5 pl-2 pr-2'>Eliminar</button>
    </div>
  )
}

export default Buttons