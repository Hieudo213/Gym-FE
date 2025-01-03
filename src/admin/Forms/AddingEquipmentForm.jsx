import { Form, Input, Select, Switch } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Option } from 'antd/es/mentions'

import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react'

const AddingEquipmentForm = () => {
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
                        <Input placeholder="Tên Thiết bị" />
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
                        <Input placeholder="Mã siri  " />
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
                        <Input placeholder="Ngày mua" />
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
                        <Input placeholder="ngày bảo hành" />
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
                        <Input placeholder="Số lượng " />
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

export default AddingEquipmentForm