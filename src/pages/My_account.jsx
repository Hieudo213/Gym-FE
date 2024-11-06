import { Modal } from "antd";
import React, { useState } from "react";
import { CiCamera } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosKey } from "react-icons/io";
import { MdOutlineWorkHistory } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";


const My_account = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="mt-[5rem] w-full pt-[1rem]">
            <div className="w-5/6 mx-auto  my-[3rem]   h-[31rem] flex">
                <div className=" w-1/3 h-full  border border-gray-400 p-4  rounded-[0.5rem]">
                    <div className="row  h-[4rem] mb-[1rem]">
                        <div onClick={() => setIsOpen(true)} className=" aspect-square h-full relative cursor-pointer">
                            <img src="https://elearning.iigvietnam.com/images/default-avatar.jpg" className="w-full h-full rounded-[50%]" alt="" />
                            <div className="absolute bottom-0 right-0 w-[1.6rem] h-[1.6rem] bg-blue-800  rounded-[50%] border-2 border-white text-white flex justify-center items-center">
                                <CiCamera />
                            </div>
                        </div>
                        <div className=" h-full px-5 py-1">
                            <h2 className="font-bold  text-xl mb-1">Vũ Tiến Đạt</h2>
                            <h6 className="text-[#666666] text-sm">vutiendat1804hd@gmail.com</h6>
                        </div>
                    </div>

                    <Link to="change-info" className="row py-3  text-xs ">
                        <FaRegUser className="mr-2  " size={15} />
                        <span className="font-bold " >Chỉnh sửa thông tin</span>
                    </Link>
                    <Link to="subcription" className="row py-3 text-xs ">
                        <MdOutlineWorkHistory className="mr-2  " size={15} />
                        <span className="font-bold " >Lịch sử đăng ký</span>
                    </Link>
                    <Link to="change-password" className="row py-3 text-xs ">
                        <IoIosKey className="mr-2  " size={15} />
                        <span className="font-bold " >Thay đổi mật khẩu</span>
                    </Link>

                </div>
                <div className=" w-2/3 h-full  px-10">
                    <div className="w-full h-full border border-gray-400 p-4  rounded-[0.5rem] fix10">
                        <Outlet/>
                    </div>
                </div>
            </div>
            <Modal title="Basic Modal" open={isOpen} onCancel={() => setIsOpen(false)}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
};

export default My_account;
