import React from 'react'
import { CiBellOn } from 'react-icons/ci'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function HeaderAdmin() {
  return (
    <div className='w-full h-full flex justify-between items-center px-3'>
      <div className="w-3/5 flex justify-between items-center p-5">
        <div className="w-full  text-blue-500 text-base ">
          <span>&lt;</span> <Link to="/admin">Trang chủ</Link>
        </div>
        <form class="flex items-center  ">

          <div class="relative w-[22rem] ">
            <input type="text" id="voice-search" class="w-full bg-gray-50 border border-black-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   py-2 px-2 " placeholder="Search " />
            <button type="submit" class="absolute inset-y-0 end-0 flex items-center pe-3 ">
              <IoSearch size={28} class="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
            </button>
          </div>

        </form>
      </div>

      <div className="group">
        <ul className='flex justify-between'>
          <li className='mx-2 relative w-full  aspect-square  rounded-[50%]  bg-gray-200   flex justify-center items-center'><CiBellOn size={20} /><div className='w-[15px] h-[15px] absolute top-[-3px] right-[-3px] bg-blue-500  rounded-[50%] flex justify-center items-center font-light text-sm '>1</div></li>
          <li className='mx-2 relative w-full  aspect-square  rounded-[50%]  bg-gray-200 '>
            <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className='w-[35px]  aspect-square rounded-[50%]' alt="" />
            <div className='w-[10px] h-[10px] absolute bottom-0 right-0 bg-green-500 border border-white  rounded-[50%] flex justify-center items-center '></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderAdmin