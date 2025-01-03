import { Checkbox, Modal } from 'antd';
import React, { useState } from 'react';
import Table_list from './Model/Table_list';
import Toolbar from './Model/Toolbar';
import AddingGymForm from './Forms/AddingGymForm';

function Gym() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const dataSource = [
    {
      key: '1',
      stt: 1,
      name: "Phong 1",
      description: 'Mô tả đây này',
      type: "Phòng VIP",
      capacity: 1,
    },
    {
      key: '2',
      stt: 2,
      name: "Phong 2",
      description: 'Mô tả đây này',
      type: "Phòng VIP",
      capacity: 1,
    },
    {
      key: '3',
      stt: 3,
      name: "Phong 3",
      description: 'Mô tả đây này',
      type: "Phòng VIP",
      capacity: 1,
    },
  ];

  const columns = [
    {
      title: (<Checkbox />),
      key: 'id',
      render: () => (
        <Checkbox />
      ),
    },
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
    },
    {
      title: 'Tên Phòng',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <span
          onClick={() => setIsOpen(true)}
          className="text-blue-500 cursor-pointer"
        // Set modal to open on click
        >
          {text}
        </span>
      )
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Loại Phòng',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Số Lượng Người',
      dataIndex: 'capacity',
      key: 'capacity',
    },
  ];

  const [addingForm, setAddingForm] = useState(false);
  const handleOk = () => {
    setAddingForm(false);
  };
  const handleCancel = () => {
    setAddingForm(false);
  }
  return (
    <div>
      <Toolbar setAddingForm={setAddingForm} />
      <div className='w-full flex p-3'  >
        <Table_list columns={columns} dataSource={dataSource} />
      </div>
      <Modal width={650} title="Thêm mới môn học" open={addingForm} onOk={handleOk} onCancel={handleCancel}>
        <AddingGymForm />
      </Modal>
    </div>
  )
}

export default Gym