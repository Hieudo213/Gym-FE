import { Checkbox, Form, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import Toolbar from './Model/Toolbar';
import Table_list from './Model/Table_list';
import { getAllClub } from '../services/publicApi';
import AddingClubForm from './Forms/AddingClubForm';

function ClubAdmin() {
    const [data, setData] = useState([]);
    const [addingForm, setAddingForm] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllClub();
                setData(result);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const dataSource = data?.result?.map((item) => ({
        key: item.id.toString(),
        stt: item.id,
        title: item.title,
        description: item.description,
        phone: item.phone,
        schedule: item.schedule,
        address: item.address,
    }))
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
            title: 'Tên câu lạc bộ',
            dataIndex: 'title',
            key: 'title',

            width: 300,
            render: (text) => (
                <span
                    className="hover:text-blue-500 cursor-pointer"
                >
                    {text}
                </span>
            )
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
            width: 300,
            render: (text) => (
                <div style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 3,
                    textOverflow: 'ellipsis',
                }}>
                    {text}
                </div>
            )
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
            width: 200,
        },
        {
            title: 'Lịch mở cửa',
            dataIndex: 'schedule',
            key: 'schedule',
            width: 400,

        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            width: 400,

        },
    ];

    return (
        <div className='w-full h-full overflow-y-auto'>
            <Toolbar setAddingForm={setAddingForm} />
            <div className='w-full flex p-3 overflow-scroll'  >
                <Table_list columns={columns} dataSource={dataSource} scroll={{ x: 1200 }} />
            </div>
            <Modal width={650} title="Thêm mới câu lạc bộ" open={addingForm} onOk={false} onCancel={()=>setAddingForm(false)} footer={null}>
                <AddingClubForm setAddingForm={setAddingForm}/>
            </Modal>
        </div>
    )
}

export default ClubAdmin