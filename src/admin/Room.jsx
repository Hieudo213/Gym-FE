import { Checkbox, Form, Input, Modal, Radio, Button } from 'antd';
import React, { useState } from 'react';
import Table_list from './Model/Table_list';
import Toolbar from './Model/Toolbar';

export const Room = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = React.useState(true);
    const [open, setOpen] = React.useState(false);
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

    return (
        <>
            <Toolbar />
            <div className='w-full flex p-3'  >
                <Table_list columns={columns} dataSource={dataSource} />
            </div>
            <Modal title="them moi" open={false} >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Modal title="Cập nhật Thể loại" open={true} >
                <Form
                    layout={formLayout}
                    form={form}
                    initialValues={{
                        layout: formLayout,
                    }}
                    onValuesChange={onFormLayoutChange}
                    style={{
                        maxWidth: formLayout === 'inline' ? 'none' : 600,
                    }}
                >
                    <Form.Item label="Form Layout" name="layout">
                        <Radio.Group value={formLayout}>
                            <Radio.Button value="horizontal">Horizontal</Radio.Button>
                            <Radio.Button value="vertical">Vertical</Radio.Button>
                            <Radio.Button value="inline">Inline</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Field A">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Field B">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Modal title="Cập các môn của thể loại" open={false} >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};
export default Room;
