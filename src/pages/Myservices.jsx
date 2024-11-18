import React from 'react';
import Platinum from '../assets/img/Platinum.png'
import Step from '../components/Step';
function Myservices() {
    return (
        <div className='mt-[8rem] my-[3rem] max-w-[1180px] mx-auto'>
            <div className="row relative p-5 w-full h-[10rem] flex border border-gray-200 rounded-[5px]">
                <div className="w-1/4 h-full ">
                    <img src={Platinum} className='w-auto h-full' alt="" />
                </div>
                <div className="absolute top-0 right-0 w-[20px] h-[20px] bg-black"></div>
                <div className="w-3/4 h-full ">
                    <h1 className='text-yellow-200 font-bold text-2xl '>PLATINUM | <span>MEMBER CARD</span></h1>
                    <h4>Tình trạng : <span>Đang chờ xác nhận</span></h4>
                    <div className="w-full h-auto p-4">
                        <Step />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Myservices;