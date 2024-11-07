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
                        <Outlet />
                    </div>
                </div>
            </div>
            <Modal
                centered
                title="Thay đổi ảnh đại diện"
                open={isOpen} onCancel={() => setIsOpen(false)}
                okText="My Custom OK"
                cancelText="My Custom Cancel"
                width={600}
                footer={
                    <div className="text-center">
                        <Button onClick={() => setIsOpen(false)} className="w-[200px] mr-2">
                            Huỷ bỏ
                        </Button>
                        <Button type="primary" danger className="w-[200px]">
                            Cập nhật
                        </Button>
                    </div>
                }>
                <div className="h-[350px] flex justify-center items-center gap-2">
                    <div className="w-[50%] flex justify-end">
                        <Image
                            className="rounded-full"
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            preview={false}

                        />
                    </div>
                    <div className="flex-col flex w-[50%] items-center">
                        <Button className="w-[150px]" type="text" icon={<MdFileUpload />}>
                            Tải hình ảnh lên
                        </Button>
                        <Button className="w-[150px]" type="text" icon={<FaRegTrashCan />}>
                            Xoá ảnh đại diện
                        </Button>
                    </div>

                </div>
            </Modal>
        </div>
    );
};

export default My_account;
