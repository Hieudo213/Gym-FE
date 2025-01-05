import React from 'react'
import { Button, DatePicker, Form, Input, InputNumber, Select, Space, Tooltip, Typography } from 'antd';
const { Option } = Select;
const onFinish = (values) => {
    console.log('Received values of form: ', values);
};
function EditProfile() {
    return (
        <>
            <h1 className="text-xl mb-2 font-bold text-[#b30c0d]">Thông tin cá nhân</h1>
            <hr className='mb-5' />
            <Form
                name="complex-form"
                onFinish={onFinish}

                style={{
                    maxWidth: '100%',
                }}
            >
                <Form.Item >
                    <Input placeholder='Usename' />
                </Form.Item>
                <Form.Item

                    style={{
                        marginBottom: 0,
                    }}
                >
                    <Form.Item
                        name="firstname"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{
                            display: 'inline-block',
                            width: 'calc(50% - 8px)',
                        }}
                    >
                        <Input placeholder="Họ " />
                    </Form.Item>
                    <Form.Item
                        name="lastname"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{
                            display: 'inline-block',
                            width: 'calc(50% - 8px)',
                            margin: '0 8px',
                        }}
                    >
                        <Input placeholder="Tên" />
                    </Form.Item>
                </Form.Item>
                <Form.Item

                    style={{
                        marginBottom: 0,
                    }}
                >
                    <Form.Item
                        name="birthday"

                        style={{
                            display: 'inline-block',
                            width: 'calc(50% - 8px)',
                        }}
                    >
                        <DatePicker placeholder='Ngày sinh' />
                    </Form.Item>
                    <Form.Item
                        name="age"

                        style={{
                            display: 'inline-block',
                            width: 'calc(50% - 8px)',
                            margin: '0 8px',
                        }}
                    >
                        <InputNumber placeholder='Tuổi' />
                    </Form.Item>
                </Form.Item>
                <Form.Item >
                    <Input placeholder='Số điện thoại' />
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Lưu thông tin
                    </Button>
                </Form.Item>
            </Form>
        </>


    )
}

export default EditProfile