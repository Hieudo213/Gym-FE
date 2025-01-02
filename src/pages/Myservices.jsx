import React, { useState } from "react";
import Platinum from '../assets/img/Platinum.png'
import Step from '../components/Step';
import { FaCrown, FaFire, FaStar } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import gold1 from "../assets/cart/Member Card - Gold/1.png"
import gold2 from "../assets/cart/Member Card - Gold/2.png"

import platium1 from "../assets/cart/Member Card - Platinum/1.png"
import platium2 from "../assets/cart/Member Card - Platinum/2.png"

import selver1 from "../assets/cart/Member Card - Silver/1.png"
import selver2 from "../assets/cart/Member Card - Silver/2.png"
import { Button, Modal, Rate } from 'antd';

const listservices = [
    {
        id: 1,
        icon: <FaCrown color='white' />,

        title: "PLatium",
        price: "300.000.000",
        time: "Year",
        image1: platium1,
        image2: platium2,
        detail: [
            "Tập luyện toàn thời gian",
            "Có hiệu lực tại tất cả cơ sở Club GymPro trên toàn quốc ",
            "Rủ bạn đi theo có hiệu lực 4-5 tháng (1 người / 1 lượt)",
            "Phù hợp với người có lịch trình bận rộn"],

    },
    {
        id: 2,
        icon: < IoDiamond color='yellow' />,

        title: "GOLD",
        price: "10.000.000",
        time: "Year",
        image1: gold1,
        image2: gold2,

        detail: [
            "Tập luyện cố định thời gian ",
            "Có hiệu lực tại tất cả cơ sở Club GymPro trên toàn quốc",
            "Phù hợp với nhiều người"]
    }
    ,
    {
        id: 3,
        icon: <FaStar color='#d7c7a2' />,

        title: "SELVER",
        price: "3.000.000",
        time: "Year",
        image1: selver1,
        image2: selver2,

        detail: [
            "Tập luyện cố định thời gian",
            "Có hiệu lực tại tất cả cơ sở Club GymPro trên toàn quốc",
            "Phù hợp với nhiều người"]
    }

]

function Myservices() {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState(null);
    const [choole, setChoole] = useState(1);
    const option = (e) => {
        setIsOpen(true);
        const filteredData = listservices.filter(service => service.id !== e);
        setData(filteredData);
    };
    const [objectid, setObjectid] = useState(listservices.find(item => item.id === choole));

    const Update = (e) => {
        setIsOpen(false);
        const itemWithId = listservices.find(item => item.id === e);
        setChoole(e);
        setObjectid(itemWithId);
    }


    return (
        <>
            <div className="w-[95vw] mx-auto ">
                <div className=' my-[3rem]  mt-[8rem]  p-3   max-w-[1180px] mx-auto'>
                    <div className="row mb-2 relative p-5 w-full  flex border border-gray-200 rounded-[5px]">
                        <div className="w-1/3 h-full ">
                            <img src={objectid.image1} className='w-auto h-full rounded-[10px]' alt="" />
                        </div>
                        <div className="absolute top-2 right-9 w-[60px] h-[20px] text-red-500">
                            <Button type="primary" onClick={() => option(choole)}>
                                Cập nhật
                            </Button>
                        </div>

                        <div className="w-2/3 h-full px-8">
                            <h1 className=' font-bold text-2xl '>{objectid.title} | <span>MEMBER CARD</span></h1>
                            <h4 className="my-2">Tên đăng ký : Vũ Văn A</h4>
                            <h4 className="my-2">Ngày đăng ký : <span>  01/01/2026</span></h4>
                            <h4 className="my-2">Câu lạc bộ: <span>Hai Bà Trưng</span></h4>
                            <h4 className="my-1">Tình trạng : <span>Đang chờ xác nhận</span></h4>
                            <div className="w-full h-auto p-4">
                                <Step />
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <Modal
                centered
                title={<h1 className="text-2xl">Thay đổi gói tập</h1>}
                open={isOpen} onCancel={() => setIsOpen(false)}
                width={600}
                footer={
                    null
                }>
                <hr />
                {data ? (
                    data.map((item, index) => (
                        <div
                            key={index} onClick={() => { Update(item.id) }}
                            className="my-3 row h-[8rem] border border-gray-300 w-full rounded-[10px] flex p-3 cursor-pointer"
                        >
                            <div className="w-1/3">
                                <img
                                    src={item.image1}
                                    className="w-full rounded-[5px] mb-2"
                                    alt=""
                                />
                            </div>
                            <div className="w-2/3 px-8">
                                <h1 className="font-bold">
                                    {item.title} | <span>MEMBER CARD</span>
                                </h1>
                                <h4 className="my-1">Giá : {item.price} VNĐ</h4>
                                <h4 className="my-1">Thời hạn : 1 năm</h4>
                                <p className='my-1 text-gray-600 px-2  py-1'> <Rate disabled allowHalf defaultValue={5} size={13} /> <span>1.5tr người đăng ký</span></p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Không có thông tin dịch vụ.</p>
                )}


            </Modal>
        </>

    )
}
export default Myservices;