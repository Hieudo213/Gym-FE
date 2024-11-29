import { Button } from 'antd'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaClock, FaInfo, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoInformationCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Club_Detail() {
    return (
        <>
            <div className="max-w-[1180px] mx-auto mt-[5rem] pt-3">
                <h1 className='text-2xl font-bold font-[799] my-3 uppercase'>GYMPRO HÀ NỘI</h1>
                <nav className="flex  my-2" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li>
                            <div className="flex items-center">
                                <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 ">Câu lạc bộ </a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Gympro Hà Nội</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <section className='w-full  '>
                <img src="https://citigym.com.vn/storage/uploads/atn9618-2-1905x834.jpg" className='w-full h-[75vh]' alt="" />
            </section>
            <div className="max-w-[1180px] mx-auto flex my-[5rem]">
                <div className="w-1/2 px-2">
                    <div className="w-full font-sans font-black text-6xl uppercase">GYMPRO  HÀ NỘI</div>
                    <h5 className='my-2 font-bold uppercase'> Địa chỉ </h5>
                    <p className='flex'><FaLocationDot className=' mr-2 my-1' size={14} /> <span> 119 Phổ Quang, Phường 09, Quận Phú Nhuận, Thành phố Hồ Chí Minh</span></p>
                    <h5 className='my-2 font-bold uppercase'> Thông tin </h5>
                    <p >Phòng tập GymPro Hà Nội với thiết kế lấy cảm hứng thiên nhiên, đưa cây xanh vào phòng tập cho phép hội viên thoải mái tập luyện với diện tích 4000m2. Phòng tập hiện đại mang hơi thở của thiên nhiên giúp hội viên cảm nhận năng lượng nhiệt huyết đồng thời cảm giác thư thái sau ngày dài làm việc. Ngoài ra, khi đến CLB Phổ Quang hội viên còn có cơ hội trải nghiệm hệ thống máy tập và dụng cụ hiện đại bậc nhất, nhập khẩu từ các thương hiệu nước ngoài hàng đầu cũng như chất lượng dịch vụ đẳng cấp 5 sao. </p>
                    <h5 className='my-2 font-bold uppercase'> Liên hệ </h5>
                    <p className='flex'><FaPhone className=' mr-2 my-1' size={14} /> <span className='text-red-500'> 1900 633 638</span></p>
                    <div className='w-full flex justify-between items-center mt-5'>
                        <Link to={'/lich-hoc'} className="w-2/3 h-[3rem]  flex justify-center items-center bg-red-700 cursor  mr-2 font-bold  text-white uppercase" style={{ color: 'white' }}>Xem lịch học</Link>
                        <Link to={'/chinh-sach-gia'} className="w-2/3  h-[3rem] flex justify-center items-center bg-[#333333] cursor   ml-2 font-bold  text-white uppercase" style={{ color: 'white' }}>Xem chính sách giá </Link>
                    </div>
                </div>
                <div className="w-1/2 ">
                    <img src="https://citigym.com.vn/storage/uploads/yoga-3.jpg" className='w-full h-full' alt="" />
                </div>

            </div>



        </>





    )
}

export default Club_Detail