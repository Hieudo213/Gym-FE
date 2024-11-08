import React, { useState } from 'react'
import { BiSolidShoppingBags } from 'react-icons/bi'
import { CiCalendarDate, CiLocationOn } from 'react-icons/ci'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdFileUpload, MdOutlineLocalPhone, MdOutlineMailOutline } from 'react-icons/md'
import { CiCamera } from "react-icons/ci";
import { Button, Modal, Image } from 'antd'
import { FaRegTrashCan } from 'react-icons/fa6'

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" row h-[12rem]">
        <div onClick={() => setIsOpen(true)} className="relative w-[12rem] m-auto cursor-pointer group">
          <img src="https://elearning.iigvietnam.com/images/default-avatar.jpg" alt="" className='aspect-square h-full rounded-[50%] group-hover:opacity-50 mx-auto' />
          <div className="absolute bottom-3 right-3 w-[2rem] h-[2rem] bg-blue-800  rounded-[50%] border-2 border-white text-white flex justify-center items-center">
            <CiCamera />
          </div>
        </div>

      </div>
      <div className="w-full text-black text-2xl text-center my-5 font-bold">
        Vũ Tiến Đạt
      </div>
      <div className="w-full mx-3">
        <div className="w-full grid grid-cols-2 gap-8">
          <div className="group flex  items-center pl-[2.25rem]">
            <MdOutlineMailOutline className='mr-2' />
            <div className='text-center'>vutiendat1804@gmail.com</div>
          </div>
          <div className="group flex  items-center pl-[2.25rem]">

            <div className='text-center'>Giới tính: <span>Nam</span></div>
          </div>

          <div className="group flex  items-center pl-[2.25rem]">
            <CiCalendarDate className='mr-2' />
            <div className='text-center'>07/11/2024</div>
          </div>
          <div className="group flex  items-center pl-[2.25rem]">

            <MdOutlineLocalPhone className='mr-2' />
            <div className=' text-center'>3905565</div>
          </div>
          <div className="group flex  items-center pl-[2.25rem]">
            <CiLocationOn className='mr-2' />

            <div className=' text-center'>Hà nội</div>
          </div>
          <div className="group flex  items-center pl-[2.25rem]">
            <BiSolidShoppingBags className='mr-2' />


            <div className=' text-center'>Sinh viên</div>
          </div>
        </div>
      </div>

      <Modal
        centered
        title="Thay đổi ảnh đại diện"
        open={isOpen} onCancel={() => setIsOpen(false)}
        okText="My Custom OK"
        cancelText="My Custom Cancel"
        width={600}
        footer={
          <div className="text-center">
            <Button onClick={() => setIsOpen(false)} className="w-[200px] mr-2">
              Huỷ bỏ
            </Button>
            <Button type="primary" danger className="w-[200px]">
              Cập nhật
            </Button>
          </div>
        }>
        <div className="h-[350px] flex justify-center items-center gap-2">
          <div className="w-[50%] flex justify-end">
            <Image
              className="rounded-full"
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              preview={false}

            />
          </div>
          <div className="flex-col flex w-[50%] items-center">
            <Button className="w-[150px]" type="text" icon={<MdFileUpload />}>
              Tải hình ảnh lên
            </Button>
            <Button className="w-[150px]" type="text" icon={<FaRegTrashCan />}>
              Xoá ảnh đại diện
            </Button>
          </div>

        </div>
      </Modal>
    </>
  )
}

export default Profile