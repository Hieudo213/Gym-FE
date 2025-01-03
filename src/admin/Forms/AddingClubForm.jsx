import { Form, Input, Select, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Option } from 'antd/es/mentions'
import React, { useState } from 'react'
import ImgCrop from 'antd-img-crop';
function AddingClubForm() {
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
        <Form
            name="register"
            className='w-full h-[450px] overflow-y-scroll'
            scrollToFirstError
        >
            <Form.Item name="title">
                <div>
                    <label className="custom-label">Tiêu đề</label>
                    <Input />
                </div>
            </Form.Item>
            <Form.Item name="address">
                <div>
                    <label className="custom-label">Địa chỉ câu lạc bộ</label>
                    <Input />
                </div>
            </Form.Item>
            <Form.Item name="phone">
                <div>
                    <label className="custom-label">Số điện thoại</label>
                    <Input />
                </div>
            </Form.Item>
            <Form.Item name="schedule">
                <div>
                    <label className="custom-label">Lịch hoạt động</label>
                    <Input />
                </div>
            </Form.Item>
            <Form.Item name="location">
                <div>
                    <label className="custom-label">Quận</label>
                    <Select
                        placeholder="Select a option and change input text above"
                        allowClear
                        defaultValue={'male'}
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </div>
            </Form.Item>
            <Form.Item name="discription">
                <div>
                    <label className="custom-label">Mô tả</label>
                    <TextArea rows={4} />
                </div>
            </Form.Item>
            <Form.Item name="image">
                <div>
                    <label className="custom-label">Chọn ảnh</label>
                    <ImgCrop rotationSlider>
                        <Upload
                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 5 && '+ Upload'}
                        </Upload>
                    </ImgCrop>
                </div>
            </Form.Item>
        </Form>
    )
}

export default AddingClubForm