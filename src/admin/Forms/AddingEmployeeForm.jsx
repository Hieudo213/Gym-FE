import { Form, Input, Select, Switch } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Option } from 'antd/es/mentions'

import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react'

const AddingEmployeeForm = () => {
    const [fileList, setFileList] = useState([]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    return (
        <>
            <hr className='my-3' />
            <Form
                name="register"

                scrollToFirstError
            >
                <Form.Item

                    style={{
                        marginBottom: 0,
                    }}
                >
                    <Form.Item

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
                        <Input placeholder="Họ và tên" />
                    </Form.Item>
                    <Form.Item

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
                        <div>

                            <Select
                                placeholder="Select a option and change input text above"
                                allowClear
                                defaultValue={'male'}
                            >

                                <Option value="male">Quản lý</Option>
                                <Option value="female">Lễ tân</Option>
                                <Option value="0">Nhân viên</Option>
                                <Option value="other">Khác</Option>
                            </Select>
                        </div>
                    </Form.Item>
                </Form.Item>

                <Form.Item

                    style={{
                        marginBottom: 0,
                    }}
                >
                    <Form.Item

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
                        <Input placeholder="Số điện thoại " />
                    </Form.Item>
                    <Form.Item

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
                        <Input placeholder="Email " />
                    </Form.Item>
                </Form.Item>

                <Form.Item

                    style={{
                        marginBottom: 0,
                    }}
                >
                    <Form.Item

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
                        <div>

                            <Select
                                placeholder="Select a option and change input text above"
                                allowClear
                                defaultValue={'6'}
                            >

                                <Option value="1">Cardio</Option>
                                <Option value="2">Strength Training</Option>
                                <Option value="3">Bodybuilding</Option>
                                <Option value="4">CrossFit</Option>
                                <Option value="5">Functional Training</Option>
                                <Option value="6">Yoga</Option>
                                <Option value="7">Pilates</Option>
                                <Option value="8">HIIT</Option>
                                <Option value="9">Spinning</Option>
                                <Option value="10">Zumba</Option>
                                <Option value="11">Boxing</Option>

                            </Select>
                        </div>
                    </Form.Item>
                    <Form.Item

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
                        <label htmlFor="" className='mr-3'>Trạng thái</label>

                        <Switch defaultChecked={true} />
                    </Form.Item>
                </Form.Item>
            </Form >
        </>

    )
}

export default AddingEmployeeForm