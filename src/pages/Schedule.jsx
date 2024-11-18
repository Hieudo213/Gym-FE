import React from "react";


import CalendarComponent from "../components/calendar";
import { Table } from "antd";

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
const Schedule = () => {
  return (

    <div className="max-w-[1180px] my-[20vh]  mx-auto h-[25rem]    flex p-2">
      <div className=" w-1/3 max-w-[40%]   border border-gray-400 p-4  rounded-[0.5rem]">
        <CalendarComponent />
      </div>
      <div className=" w-2/3   px-1 border border-gray-400 py-4  rounded-[0.5rem] fix10 ml-4">
        <div className='w-full h-full overflow-scroll overflow-x-scroll'>
          <Table className='w-fit' dataSource={dataSource} columns={columns} pagination={false} />
        </div>
      </div>
    </div>
  )
};

export default Schedule;
