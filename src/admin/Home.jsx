import { Button } from 'antd'
import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { BsFilterLeft, BsFilterRight } from 'react-icons/bs'
import { CiFilter } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'
import Toolbar from './Toolbar'

function Home() {
  return (
    <>
      <Toolbar />
      <div className='p-5'>home</div>
    </>

  )
}

export default Home