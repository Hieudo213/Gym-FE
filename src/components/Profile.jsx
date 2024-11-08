import React from 'react'
import { BiSolidShoppingBags } from 'react-icons/bi'
import { CiCalendarDate, CiLocationOn } from 'react-icons/ci'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineLocalPhone, MdOutlineMailOutline } from 'react-icons/md'

function Profile() {
  return (
    <>
      <div className="row h-[12rem]">
        <img src="https://elearning.iigvietnam.com/images/default-avatar.jpg" alt="" className='aspect-square h-full rounded-[50%] mx-auto' />
      </div>
      <div className="w-full text-black text-2xl text-center my-5 font-bold">
        Vũ Tiến Đạt
      </div>
      <div className="w-full mx-3">
        <div className="w-full grid grid-cols-2 gap-8">
          <div className="group flex  items-center">
            <MdOutlineMailOutline className='mr-2' />
            <div className='text-center'>vutiendat1804@gmail.com</div>
          </div>
          <div className="group flex  items-center">

            <div className='text-center'>Giới tính: <span>Nam</span></div>
          </div>

          <div className="group flex  items-center">
            <CiCalendarDate className='mr-2' />
            <div className='text-center'>07/11/2024</div>
          </div>
          <div className="group flex  items-center">

            <MdOutlineLocalPhone className='mr-2' />
            <div className=' text-center'>3905565</div>
          </div>
          <div className="group flex  items-center">
            <CiLocationOn className='mr-2' />

            <div className=' text-center'>Hà nội</div>
          </div>
          <div className="group flex  items-center">
            <BiSolidShoppingBags className='mr-2' />


            <div className=' text-center'>Sinh viên</div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile