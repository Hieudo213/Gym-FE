import { Checkbox } from 'antd';
import React, { useState } from 'react'
import Table_list from './Model/Table_list';
import Toolbar from './Model/Toolbar';

function RespondFromMember() {
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
  const [checkboxMain, setCheckboxMain] = useState(false);
  const [checkedRows, setCheckedRows] = useState([]);
  console.log(checkedRows);

  const handleMainCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setCheckboxMain(isChecked);
    if (isChecked) {

      setCheckedRows(dataSource.map((row) => row.key));
    } else {

      setCheckedRows([]);
    }
  };

  const handleRowCheckboxChange = (key) => {
    if (checkedRows.includes(key)) {
      setCheckedRows(checkedRows.filter((item) => item !== key));
    } else {
      setCheckedRows([...checkedRows, key]);
    }
  };
  const columns = [
    {
      title: (<Checkbox checked={checkboxMain} indeterminate={checkedRows.length > 0 && checkedRows.length < dataSource.length} onChange={handleMainCheckboxChange} />),
      key: 'id',
      render: (text, record) => (
        <Checkbox checked={checkedRows.includes(record.key)}
          onChange={() => handleRowCheckboxChange(record.key)} />
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

  return (
    <div>
      <Toolbar />
      <div className='w-full flex p-3'  >
        <Table_list columns={columns} dataSource={dataSource} />
      </div>
    </div>
  )
}

export default RespondFromMember