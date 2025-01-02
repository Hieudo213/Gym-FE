import React, { useEffect, useState } from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getClubByID } from '../services/publicApi';

function Club_Detail() {
    const [data, setData] = useState({});
    const navigate = useNavigate()
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getClubByID(id);
                setData(result);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="max-w-[1180px] mx-auto mt-[5rem] pt-3">
                <h1 className='text-2xl font-bold font-[799] my-3 uppercase'>{data?.result?.title}</h1>
                <nav className="flex  my-2" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li>
                            <div className="flex items-center">
                                <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 " onClick={()=>navigate("/clb")}>Câu lạc bộ </a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{data?.result?.title}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <section className='w-full  '>
                <img src="https://citigym.com.vn/storage/uploads/atn9618-2-1905x834.jpg" className='w-full h-[75vh]' alt="" />
            </section>
            <div className="max-w-[1180px] min-h-[560px] max-h-[560px] mx-auto flex my-[5rem]">
                <div className="w-1/2 px-2">
                    <div className="w-full font-sans font-black text-6xl uppercase">{data?.result?.title}</div>
                    <h5 className='my-2 font-bold uppercase'> Địa chỉ </h5>
                    <p className='flex'><FaLocationDot className=' mr-2 my-1' size={14} /> <span> {data?.result?.address}</span></p>
                    <h5 className='my-2 font-bold uppercase'> Thông tin </h5>
                    <p className='h-[171px]'>
                        {data?.result?.description}
                    </p>
                    <h5 className='my-2 font-bold uppercase'> Liên hệ </h5>
                    <p className='flex'><FaPhone className=' mr-2 my-1' size={14} /> <span className='text-red-500'> {data?.result?.phone}</span></p>
                    <div className='w-full flex justify-between items-center mt-5'>
                        <Link to={'/lich-hoc'} className="w-2/3 h-[3rem]  flex justify-center items-center bg-red-700 cursor  mr-2 font-bold text-white uppercase" style={{ color: 'white' }}>Xem lịch học</Link>
                        <Link to={'/chinh-sach-gia'} className="w-2/3  h-[3rem] flex justify-center items-center bg-[#333333] cursor ml-2 font-bold  text-white uppercase" style={{ color: 'white' }}>Xem chính sách giá </Link>
                    </div>
                </div>
                <div className="w-1/2 min-h-[544px] max-h-[544px] overflow-hidden">
                    <img src={`http://localhost:8080/api/v1/images/${data?.result?.thumbnail.id}`} className='w-full h-[400px]' alt="" />
                </div>

            </div>
        </>
    )
}

export default Club_Detail
