import { Alert, Button, Form, Input, Select, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import TextArea from 'antd/es/input/TextArea';
import { Option } from 'antd/es/mentions';
import React, { useEffect, useState } from 'react';
import { createClub } from '../../services/privateApi';
const locationEnum = [
    { id: 1, name: "Ba Đình", value: 'BA_DINH' },
    { id: 2, name: "Hoàn Kiếm", value: 'HOAN_KIEM' },
    { id: 3, name: "Đống Đa", value: 'DONG_DA' },
    { id: 4, name: "Hai Bà Trưng", value: 'HAI_BA_TRUNG' },
    { id: 5, name: "Thanh Xuân", value: 'THANH_XUAN' },
    { id: 6, name: "Cầu Giấy", value: 'CAU_GIAY' },
    { id: 7, name: "Hoàng Mai", value: 'HOANG_MAI' },
    { id: 8, name: "Long Biên", value: 'LONG_BIEN' },
    { id: 9, name: "Nam Từ Liêm", value: 'NAM_TU_LIEM' },
    { id: 10, name: "Bắc Từ Liêm", value: 'BAC_TU_LIEM' },
    { id: 11, name: "Tây Hồ", value: 'TAY_HO', },
    { id: 12, name: "Hà Đông", value: 'HA_DONG' }
];
function AddingClubForm({ setAddingForm }) {
    const [fileList, setFileList] = useState([]);
    const [notify, setNotify] = useState({
        message: "",
        type: ""
    })
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        phone: "",
        location: "",
        schedule: "",
        address: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

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

    const handleSubmit = async () => {
        if (fileList.length !== 1) {
            setNotify({
                message: "Vui lòng chọn một bức ảnh",
                type: "error"
            })
            return;
        }

        const file = fileList[0].originFileObj;
        try {
            const response = await createClub(file, formData);
            if (response) {
                setNotify({
                    message: "Bạn đã thêm thành công",
                    type: "success"
                })
                setInterval(() => {
                    window.location.reload();
                }, 3000)
            }
        } catch (error) {
            console.error("Error creating club:", error);
        }
    };

    return (
        <>
            {notify.message && notify.type && (
                <Alert message={notify.message} type={notify.type} showIcon />
            )}
            <Form
                name="register"
                className='w-full h-[450px] overflow-y-scroll'
                scrollToFirstError
            >
                <Form.Item name="title">
                    <div>
                        <label className="custom-label">Tiêu đề</label>
                        <Input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange} />
                    </div>
                </Form.Item>
                <Form.Item name="address">
                    <div>
                        <label className="custom-label">Địa chỉ câu lạc bộ</label>
                        <Input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange} />
                    </div>
                </Form.Item>
                <Form.Item name="phone">
                    <div>
                        <label className="custom-label">Số điện thoại</label>
                        <Input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange} />
                    </div>
                </Form.Item>
                <Form.Item name="schedule">
                    <div>
                        <label className="custom-label">Lịch hoạt động</label>
                        <Input
                            type="text"
                            name="schedule"
                            value={formData.schedule}
                            onChange={handleChange} />
                    </div>
                </Form.Item>
                <Form.Item name="location">
                    <div>
                        <label className="custom-label">Quận</label>
                        <Select
                            placeholder="Hãy chọn Quận"
                            onChange={(value) => setFormData({
                                ...formData,
                                location: value
                            })}
                            allowClear
                        >
                            {locationEnum.map((item, index) => (
                                <Option key={index} value={item.value}>{item.name}</Option>
                            ))}

                        </Select>
                    </div>
                </Form.Item>
                <Form.Item name="discription">
                    <div>
                        <label className="custom-label">Mô tả</label>
                        <TextArea rows={4}
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange} />
                    </div>
                </Form.Item>
                <Form.Item name="image">
                    <div>
                        <label className="custom-label">Chọn ảnh</label>
                        <ImgCrop rotationSlider>
                            <Upload
                                action="http://localhost:8080/api/v1/images/create"
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
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "16px", gap: "5px" }}>
                <Button onClick={() => setAddingForm(false)}>Huỷ</Button>
                <Button type='primary' onClick={handleSubmit}>Thêm mới</Button>
            </div>
        </>
    )
}

export default AddingClubForm