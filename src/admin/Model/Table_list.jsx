import { Table, Avatar, Button, Divider, List, Modal, Skeleton, Image, Drawer } from 'antd'
import React, { useState } from 'react';

import Form_room from './Form_room'


function Table_list() { // Destructure props
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const showLoading = () => {
        setOpen(true);
        setLoading(true);

        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setLoading(false);
        }, 200);
    };
    const dataSource = [
        {
            key: '1',
            money: 32,
            time: '02/10/2024 12:08',
            content: "Mua gói Platinum",
            accountNumber: "01234567890",
        },
        {
            key: '2',
            money: 90,
            time: '02/10/2024 12:08',
            content: "Mua gói Platinum1",
            accountNumber: "01234567890",
        },
        {
            key: '3',
            money: 190,
            time: '02/10/2024 12:08',

            content: " Mua gói Platinum2",
            accountNumber: "01234567890",
        },
    ];

    const columns = [
        {
            title: '',
            key: 'id',
            render: () => (
                <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
            ),
        },
        {
            title: 'Tên Phòng',
            dataIndex: 'money',
            key: 'money',
        },
        {
            title: 'Thể loại',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Nội dung giao dịch',
            dataIndex: 'content',
            key: 'content',
            render: (text) => (
                <span
                    onClick={() => setIsOpen(true)}
                    className="text-blue-500 cursor-pointer"
                // Set modal to open on click
                >
                    {text}
                </span>
            ),
        },
        {
            title: 'Số tài khoản',
            dataIndex: 'accountNumber',
            key: 'accountNumber',
        },
    ];

    return (

        <>
            <div className='mt-2 w-full h-[70vh] overflow-scroll overflow-x-scroll'>
                <Table className='w-full' dataSource={dataSource} columns={columns} pagination={false} />
            </div>
            <Modal
                centered
                title="Thông tin gói tập"
                open={isOpen} onCancel={() => setIsOpen(false)}
                okText="My Custom OK"
                cancelText="My Custom Cancel"
                width={600}
                footer={
                    <div className="text-center">
                        <Button onClick={() => setIsOpen(false)} className="w-[200px] mr-2">
                            Hủy bỏ
                        </Button>
                        <Button onClick={showLoading} type="primary" danger className="w-[200px]">
                            Thay đổi
                        </Button>
                    </div>
                }>
                <div className="h-[350px] flex justify-center items-center gap-2">
                    <div className="w-[50%] flex justify-end">
                        <Image.PreviewGroup
                        >
                            <Image
                                width={200}
                                src="https://phanmemtinhluong.com/wp-content/uploads/2021/06/image-15-1024x879.png"
                            />
                        </Image.PreviewGroup>
                    </div>
                    <div className="flex-col flex w-[50%] p-3">
                        <div className='m-1'>Tài khoản : <span>Đạt nghiêm túc</span> </div>
                        <div className='m-1'>Loại hình : <span>Gym</span> </div>
                        <div className='m-1'>Gói : <span>Gold</span> </div>
                        <div className='m-1'>Thành tiền : <span>12.000.000 vnđ</span> </div>
                    </div>

                </div>
            </Modal>
            <Drawer
                width="50vw"
                closable
                destroyOnClose
                title={<p>Sửa phòng tập</p>}
                placement="right"
                open={open}
                loading={loading}
                onClose={() => setOpen(false)}
            >

                <Form_room />

            </Drawer>
        </>
    );
}

export default Table_list;
