import React, { Fragment } from 'react'
import { Menu } from 'antd';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { IoMdHome } from 'react-icons/io';
import { CgGym } from 'react-icons/cg';
import { FaRegCommentDots, FaUsers } from 'react-icons/fa6';
import { IoNotificationsSharp } from 'react-icons/io5';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { CiCreditCard2 } from 'react-icons/ci';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { PiUsersFourBold } from 'react-icons/pi';

import { Link } from 'react-router-dom';
const items = [
  {
    key: '1',
    label: <Link to="/admin" className='flex alignItems-center' >
      <span>Home</span>
    </Link>
    ,
    icon: <IoMdHome />
  },
  {
    type: 'divider',
  },
  {
    key: 'function',
    label: 'Chức năng',
    type: 'group',
    children: [
      {
        key: 'room',
        label: 'Quản lý phòng tập',

        children: [
          {
            key: '2',
            label: (
              <Link to="room" className='flex alignItems-center' >
                <span>Phòng tập</span>
              </Link>
            ),
            icon: <GiWeightLiftingUp />
          },
          {
            key: '3',
            label: 'Trang thiết bị',
            icon: <CgGym />
          },
          {
            key: '4',
            label: 'Nhân viên',
            icon: <FaUsers />
          },
          {
            key: '5',
            label: 'Phản hồi của hội viên',
            icon: <IoNotificationsSharp />
          },
        ],
      },
      {
        key: 'member',
        label: 'Quản lý hội viên',

        children: [
          {
            key: '6',
            label: 'Hội viên',
            icon: <PiUsersFourBold />
          },
          {
            key: '7',
            label: 'Lịch sử giao dịch',
            icon: <FaMoneyCheckAlt />
          },
          {
            key: '8',
            label: 'Phản hồi',
            icon: <FaRegCommentDots />
          }
        ],
      },
      {
        key: 'packages',
        label: 'Quản lý gói tập',

        children: [
          {
            key: '9',
            label: 'Các gói tập',
            icon: <CiCreditCard2 />
          },
        ],
      },
    ],
  },

];

function MenuComponent() {

  return (
    <div className='w-full h-full '>
      <div className='w-full'>
        <h1 className="text-xl mb-2 font-bold ">
          Hệ Thống
        </h1>
      </div>
      <div className='w-full'>
        <Menu

          style={{
            width: '100%',
            border: 'none'
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </div>
    </div>
  )
}

export default MenuComponent