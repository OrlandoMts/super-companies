import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <ul className='flex flex-row bg-[#B1DE97] p-6'>
          <li className='mr-8'><Link href="/company"><a>Empresas</a></Link></li>
          <li><Link href="/employee"><a>Empleados</a></Link></li>
        </ul>
    </div>
  )
}

export default Navbar