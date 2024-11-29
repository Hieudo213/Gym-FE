import { Checkbox } from 'antd';
import React, { useState } from 'react';
import Table_list from './Model/Table_list';
import Toolbar from './Model/Toolbar';

export const Room = () => {
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

    return (
        <>
            <Toolbar />
            <div className='w-full flex p-3'  >
                <Table_list columns={columns} dataSource={dataSource} />
            </div>
        </>
    );
};
export default Room;
