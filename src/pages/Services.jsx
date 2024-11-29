import React from "react";
import CardComponent from "../components/CardComponent";
import CategoryCard from "../components/CategoryCard";
import "../styles/Services.css";
import { FaClock } from "react-icons/fa6";

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

const listgym = [
    {
        id: 1,
        title: "Kickfit",
        image: 'https://citigym.com.vn/storage/uploads/vietdh/kickfit.jpg',
        category: 'Personal Trainer',
    },
    {
        id: 2,
        title: "Fitness PT",
        image: 'https://citigym.com.vn/storage/uploads/thumbnail-2-3.jpg',
        category: 'Personal Trainer',
    },
    {
        id: 3,
        title: "BodyPump",
        image: 'https://citigym.com.vn/storage/uploads/vietdh/bodypump.JPG',
        category: 'Group X',
    },
    {
        id: 4,
        title: "Body Combat",
        image: 'https://citigym.com.vn/storage/uploads/body-combat.jpg',
        category: 'Group X',
    },
    {
        id: 5,
        title: "Body Balance",
        image: 'https://citigym.com.vn/storage/uploads/body-balance.jpg',
        category: 'Group X',
    },
    {
        id: 6,
        title: "RPM",
        image: 'https://citigym.com.vn/storage/uploads/vietdh/dichvu-mb.jpg',
        category: 'Group X',
    },
]

const Services = () => {
    return (
        <>
            <div className="w-full h-[calc(100vh-4.5rem)] relative mt-[72px] ">
                <div className="absolute left-[6rem] bottom-[8rem] text-white text-[3rem] text-6xl ">DỊCH VỤ</div>
                <div className="title-bg">FIND A CLASS</div>
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
                <div className=" w-[1140px] h-[1169px] grid grid-cols-3 gap-[30px] ">
                    {listgym.map((item, index) => (
                        <CardComponent key={index} url={item.image}>
                            <div className=" inset-0 border border-gray bg-white rounded p-5 fix7">
                                <div className="text-blue-800 font-bold text-sm my-2 mx-0 uppercase">
                                    {item.category}
                                </div>
                                <div className="text-red-700 font-bold text-xl my-2 mx-0 uppercase hover:text-[#720000]">
                                    {item.title}
                                </div>
                                <div className="my-2 mx-0">
                                    <FaClock className="float-left mt-[4px]" />

                                    <span className="my-0  mx-2">60 Phút</span>
                                </div>
                                <p>
                                    KickFit là môn thể thao kết hợp đặc biệt giữa đấm bốc truyền*
                                    thống với trường phái Muay Thai ...
                                </p>
                            </div>
                        </CardComponent>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
