import { Avatar, Badge, Button } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'
import { CiBellOn, CiUser } from 'react-icons/ci'
import { Link } from 'react-router-dom'

function HeaderAdmin() {
  return (
    <div className='w-full h-full flex justify-between items-center px-3'>
      <div className="w-3/5 flex justify-between items-center p-5">
        <div className="w-full  text-blue-500 text-base ">
          <span>&lt;</span> <Link className='hover:text-[#3c82f6] hover:underline text-[15px]' to="/">Trang chủ</Link>
        </div>
        <form class="flex items-center  ">
          <div class="relative w-[22rem] ">
            <Search placeholder="Tìm kiếm thông tin" allowClear style={{ width: 450 }} />
          </div>
        </form>
      </div>

      <div className="group">
        <ul className='flex justify-between'>
          <li className='mx-2 relative w-full h-full'>
            <Badge size='small' count={5}>
              <Avatar icon={<CiBellOn />} shape="circle" size="midium" />
            </Badge>
          </li>
          <li className='mx-2 relative w-full h-full  rounded-[50%]  bg-gray-200 '>
            <Badge dot color="green" offset={[-5, 30]}>
              <Avatar icon={<CiUser />}></Avatar>
            </Badge>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderAdmin