import { Button, Modal, Image } from "antd";
import React, { useState } from "react";
import { CiCamera } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosKey } from "react-icons/io";
import { MdOutlineWorkHistory } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { MdFileUpload } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

const My_account = () => {

    return (
        <div className="mt-[5rem] w-full pt-[1rem]">
            <div className="max-w-[1180px] mx-auto  my-[3rem]   h-[31rem] flex">
                <div className=" w-1/3 h-full  border border-gray-400 p-4  rounded-[0.5rem]">
                    <div className="row  h-[4rem] mb-1">
                        <div className=" h-full ">
                            <h2 className="font-bold  text-xl mb-1 " > <Link to="/my-account">Hiếu Pro</Link> </h2>
                            <h6 className="text-[#666666] text-sm">Hội viên</h6>
                        </div>
                    </div>
                    <hr />
                    <Link to="change-info" className="row  w-[150px] py-3  text-xs ">
                        <FaRegUser className="mr-2  " size={15} />
                        <span className="font-bold " >Chỉnh sửa thông tin</span>
                    </Link>
                    <Link to="subcription" className="row py-3 w-[150px] text-xs ">
                        <MdOutlineWorkHistory className="mr-2  " size={15} />
                        <span className="font-bold " >Lịch sử đăng ký</span>
                    </Link>
                    <Link to="change-password" className="row w-[150px] py-3 text-xs ">
                        <IoIosKey className="mr-2  " size={15} />
                        <span className="font-bold " >Thay đổi mật khẩu</span>
                    </Link>

                </div>
                <div className=" w-2/3 h-full  px-10">
                    <div className="w-full h-full border border-gray-400 p-4  rounded-[0.5rem] fix10">
                        <Outlet />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default My_account;
