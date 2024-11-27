import React, { useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoBriefcase, IoFemaleOutline } from 'react-icons/io5';
import { Button, Image, Modal, Rate } from 'antd';

const Cart_user = (data) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div onClick={() => setIsOpen(true)} className='w-full relative cursor-pointer border border-gray-100 rounded-[5px] p-5 shadow-custom'>


                <div className='w-1/3 mx-auto rounded-[50%] border-2 border-gray-500 p-[2px]'>
                    <img src={data.image} className='w-full mx-auto rounded-[50%]' />
                </div>

                <div className='m-2'>
                    <p className='text-center text-lg'>{data.name} </p>

                    <p className='my-1 text-gray-600'><MdOutlineMail className='float-left mx-2 mt-[5px] ' size={16} /> <span className='text-sm'>{data.email}</span> </p>
                    <p className='my-1 text-gray-600'> <IoBriefcase className='float-left mx-2 mt-[5px]' size={16} /><span className='text-sm'>Hướng dẫn viên Yoga</span> </p>
                    <p className='my-1 text-gray-600 px-2  py-1'> <Rate disabled allowHalf defaultValue={3.5} size={15} /></p>
                </div>
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
                        <Button className="w-[200px] mr-2">
                            Hủy bỏ
                        </Button>
                        <Button type="primary" danger className="w-[200px]">
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
        </>

    )
}

export default Cart_user