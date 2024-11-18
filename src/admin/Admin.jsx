import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin'
import Menu from './Menu'
import MenuComponent from './Menu'

function Admin() {
  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden flex'>
      <div className='w-[250px] h-full p-4 border-r border-r-[#f0f0f0]'>
        <MenuComponent />
      </div>
      <div className='w-[calc(100%-250px)] h-full'>
        <div className='w-full h-[60px] bg-slate-100'>
          <HeaderAdmin />
        </div>
        <div className='w-full h-[calc(100%-60px)]   overflow-y-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Admin