
import React, { useEffect, useRef } from 'react'



import Action1 from './Model/Action1'
import Action2 from './Model/Action2'
import RevenueCard from './Model/RevenueCard'
import ChartPie from './Model/ChartPie'
import Verify from './Model/Verify'
import { Card } from 'antd'
import LeadsCard from './Model/LeadsCard'



function Home() {
  return (
    <>
      <div className="w-full p-2 flex">
        <div className="w-1/2 px-1">
          <Action1 />
        </div>
        <div className="w-1/2 px-1">
          <Action2 />
        </div>
      </div>
      <div className='row p-3 flex '>
        <ChartPie />
        <RevenueCard />
      </div>
      <div className='row p-3 flex  '>
        <Card bordered={false} className="w-1/2 p-2 border border-gray-200 rounded-[10px]">
          <h1 className='text-xl m-3'>Xác nhận gói tập</h1>
          <Verify />
        </Card>
        <LeadsCard />

      </div>
    </>

  )
}

export default Home