import { Form, Input, Select, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Option } from 'antd/es/mentions'

import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react'

const AddingRoomForm = () => {
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
                        <Input placeholder="Tên phòng" />
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
                        <Input placeholder="Số lượng người" />
                    </Form.Item>
                </Form.Item>

                <Form.Item name="location">
                    <div>
                        <label className="custom-label">Loại phòng</label>
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                            defaultValue={'Vip'}
                        >
                            <Option value="1">Vip</Option>
                            <Option value="0">Thường</Option>

                        </Select>
                    </div>
                </Form.Item>


            </Form >
        </>

    )
}

export default AddingRoomForm