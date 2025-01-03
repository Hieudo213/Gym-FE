import { Form, Input, Select, Switch } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Option } from 'antd/es/mentions'

import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react'

const AddingGymForm = () => {
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
                        <Input placeholder="Tên môn học" />
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
                                defaultValue={'0'}
                            >
                                <Option value="0">Thuộc phòng</Option>
                                <Option value="1">101</Option>
                                <Option value="2">102</Option>
                                <Option value="3">103</Option>
                                <Option value="4">104</Option>
                            </Select>
                        </div>
                    </Form.Item>
                </Form.Item>

                <Form.Item name="discription">
                    <div>
                        <label className="custom-label">Mô tả</label>
                        <TextArea rows={4} />
                    </div>
                </Form.Item>

            </Form>
        </>

    )
}

export default AddingGymForm