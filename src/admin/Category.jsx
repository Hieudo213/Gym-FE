import { Checkbox, Form, Modal, Button, TreeSelect, Empty, Image as AntImage } from 'antd';

import React, { useState } from 'react';
import Table_list from './Model/Table_list';
import Toolbar from './Model/Toolbar';
import FormCategory from './Model/FormCategory';





function Category() {
  const [isOpen, setIsOpen] = useState(false);

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
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

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (

    <>
      <Toolbar />
      <div className='w-full flex p-3 '  >
        <Table_list columns={columns} dataSource={dataSource} />
      </div>
      <Modal title={<div className='w-full text-black font-bold text-2xl border-b border-b-gray-300 pb-1'>Thêm mới thể loại </div>} open={false} width={"50vw"}>
        <FormCategory />
      </Modal>
      <Modal title={<div className='w-full text-black font-bold text-2xl border-b border-b-gray-300 pb-1'>Cập nhật Thể loại</div>} open={true} width={"50vw"} >
        <FormCategory />
      </Modal >
      <Modal title={<div className='w-full text-black font-bold text-2xl border-b border-b-gray-300 pb-1'> Cập nhật các môn của thể loại</div>} open={false} >
        <Form className='w-full' >
          <Form.Item label="Các môn hiện có">
            <TreeSelect
              treeData={[
                {
                  title: 'Việt Nam',
                  value: 'vietnam',
                },
                {
                  title: 'Anh',
                  value: 'england',
                },
                {
                  title: 'Pháp',
                  value: 'france',
                },
                {
                  title: 'Mỹ',
                  value: 'usa',
                },
              ]}
            />
          </Form.Item>
          <Empty />
        </Form>

      </Modal>
    </>


  )
}

export default Category