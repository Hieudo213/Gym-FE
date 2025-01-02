import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import CategoryCard from "../components/CategoryCard";
import "../styles/Services.css";
import { FaClock } from "react-icons/fa6";
import { getAllGym } from "../services/publicApi";
import { Link } from "react-router-dom";

const categoryItem = [
    {
        id: 1,
        title: "Bums and Tums",
        image: 'https://citigym.com.vn/storage/uploads/bums-and-tums.jpg'
    },
    {
        id: 2,
        title: "Cycling",
        image: 'https://citigym.com.vn/storage/uploads/thumbnail-1-5.jpg'
    },
    {
        id: 3,
        title: "Dance",
        image: 'https://citigym.com.vn/storage/uploads/untitled-8-3.jpg'
    },
    {
        id: 4,
        title: "Group X",
        image: 'https://citigym.com.vn/storage/uploads/rin-1822.jpg'
    },
    {
        id: 5,
        title: "Yoga",
        image: 'https://citigym.com.vn/storage/uploads/thumbnail-3-2.jpg'
    },
    {
        id: 6,
        title: "Personal trainer",
        image: 'https://citigym.com.vn/storage/uploads/vietdh/pt-thuy1.jpg'
    },
];

const Services = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllGym();
                setData(result);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <div className="w-full h-[calc(100vh-4.5rem)] relative mt-[72px]">
                <div className="absolute left-[6rem] bottom-[8rem] text-white text-[3rem] text-6xl font-[600]">DỊCH VỤ</div>
                <img
                    src="https://citigym.com.vn/storage/uploads/vietdh/dichvu-dt.jpg"
                    alt="Description"
                    className="w-full h-full object-cover"
                />
            </div>
            <section className=" pt-16 ">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="font-bold uppercase text-[28px] text-[#454545] mb-4">
                        Các dịch vụ của chúng tôi
                    </h2>
                    <p className="max-w-[420px] mb-12 text-center text-base text-[212529]">
                        Chương trình luyện tập yoga, gym, group X được thiết kế khoa học và
                        phù hợp từ chuyên gia sẽ giúp bạn đạt được mục tiêu sức khỏe và hình
                        thể.
                    </p>
                </div>
            </section>

            <div className="w-full flex justify-center items-center">
                <div className="px-[15px] w-[1140px] h-[760px] grid grid-cols-3 gap-[30px]">
                    {categoryItem.map((item, index) => (
                        <CategoryCard title={item.title} image={item.image} categoryItem={categoryItem} />
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-center items-center mt-[110px]">
                <div className=" w-[1140px] grid grid-cols-3 gap-[30px] mb-8">
                    {data?.result?.map((item, index) => (
                        <Link key={index} to={`/dich-vu/${item.id}`}>
                            <CardComponent key={index} url={`http://localhost:8080/api/v1/images/${item.thumbnail.id}`}>
                                <div className=" inset-0 border border-gray bg-white rounded p-5 fix7">
                                    <div className="text-blue-800 font-bold text-sm my-2 mx-0 uppercase">
                                        {item.category}
                                    </div>
                                    <div className="text-red-700 font-bold text-xl my-2 mx-0 uppercase hover:text-[#720000]">
                                        {item.name}
                                    </div>
                                    <div className="my-2 mx-0">
                                        <FaClock className="float-left mt-[4px]" />

                                        <span className="my-0  mx-2">60 Phút</span>
                                    </div>
                                    <div style={{
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        WebkitLineClamp: 4, // Giới hạn số dòng (thay đổi thành 2 nếu cần)
                                        textOverflow: 'ellipsis',
                                    }}>
                                        Phòng tập GymMaster Hoàn Kiếm với thiết kế sang trọng kết hợp ánh sáng tự nhiên, mang lại không gian tập luyện tràn đầy cảm hứng với diện tích 3500m2.
                                        Hội viên sẽ được trải nghiệm
                                    </div>
                                </div>
                            </CardComponent>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
