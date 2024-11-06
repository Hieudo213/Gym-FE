import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin'
import Menu from './Menu'

function Admin() {
  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden flex'>
      <div className='w-[250px] h-full bg-blue-500'>
        <Menu />
      </div>
      <div className='w-[calc(100%-250px)] h-full'>
        <div className='w-full h-[60px] bg-slate-100'>
          <HeaderAdmin />
        </div>
        <div className='w-full h-[calc(100%-60px)] p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Admin