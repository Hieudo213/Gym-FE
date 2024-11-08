import { Table } from 'antd';
import React from 'react'

const dataSource = [
  {
    key: '1',
    id: '1',
    money: 32,
    time: '02/10/2024 12:08',
    content: "Mua gói Platinum",
    accountNumber: "01234567890",
  },
  {
    key: '2',
    id: '2',
    money: 42,
    time: '02/10/2024 12:08',
    content: "Mua gói Platinum",
    accountNumber: "01234567890",
  },
  {
    key: '3',
    id: '3',
    money: 32,
    time: '02/10/2024 12:08',
    content: "Mua gói Platinum",
    accountNumber: "01234567890",
  },
  {
    key: '4',
    id: '4',
    money: 42,
    time: '02/10/2024 12:08',
    content: "Mua gói Platinum",
    accountNumber: "01234567890",
  },
  {
    key: '5',
    id: '5',
    money: 32,
    time: '02/10/2024 12:08',
    content: "Mua gói Platinum",
    accountNumber: "01234567890",
  },
  {
    key: '6',
    id: '6',
    money: 42,
    time: '02/10/2024 12:08',
    content: "Mua gói Platinum",
    accountNumber: "01234567890",
  },
  {
    key: '7',
    id: '7',
    money: 32,
    time: '02/10/2024 12:08',
    content: "Mua gói Platinum",
    accountNumber: "01234567890",
  },
  {
    key: '8',
    id: '8',
    money: 42,
    time: '02/10/2024 12:08',
    content: "Mua gói Platinum",
    accountNumber: "01234567890",
  },
];

const columns = [
  {
    title: 'Mã Giao Dịch',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Số Tiền',
    dataIndex: 'money',
    key: 'money',
  },
  {
    title: 'Thời gian giao dịch',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Nội dung giao dịch',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: 'Số tài khoản',
    dataIndex: 'accountNumber',
    key: 'accountNumber',
  },
];

function Subcription() {
  return (
    <div>
      <h1 className="text-xl mb-2 font-bold text-[#b30c0d]">Lịch sử đăng ký</h1>
      <hr />
      <div className='mt-2 w-full h-[415px] overflow-scroll overflow-x-scroll'>
        <Table className='w-fit' dataSource={dataSource} columns={columns} pagination={false} />
      </div>
    </div>
  )
}

export default Subcription