import React from "react";
import { CiCamera } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";


const My_account = () => {
    return (
        <div className="mt-[5rem] w-full pt-[1rem]">
            <div className="w-5/6 mx-auto  my-[3rem]   h-[31rem] flex">
                <div className=" w-1/3 h-full  border border-gray-400 p-4  rounded-[0.5rem]">
                    <div className="row  h-[4rem] mb-[1rem]">
                        <div className=" aspect-square h-full relative">
                            <img src="https://elearning.iigvietnam.com/images/default-avatar.jpg" className="w-full h-full rounded-[50%]" alt="" />
                            <div className="absolute bottom-0 right-0 w-[1.6rem] h-[1.6rem] bg-blue-800  rounded-[50%] border-2 border-white text-white flex flex justify-center items-center">
                                <CiCamera />
                            </div>
                        </div>
                        <div className=" h-full px-5 py-1">
                            <h2 className="font-bold  text-xl mb-1">Vũ Tiến Đạt</h2>
                            <h6 className="text-[#666666] text-sm">vutiendat1804hd@gmail.com</h6>
                        </div>
                    </div>

                    <div className="row py-3  text-xs ">
                        <FaRegUser className="mr-2  " size={15} />
                        <span className="font-bold " >Thông tin cá nhân</span>
                    </div>
                    <div className="row py-3 text-xs ">

                        <MdOutlineWorkHistory className="mr-2  " size={15} />
                        <span className="font-bold " >Lịch sử mua hàng</span>
                    </div>

                </div>
                <div className=" w-2/3 h-full  px-10">
                    <form action="" method="post" className="w-full h-full border border-gray-400 p-4  rounded-[0.5rem] fix10">
                        <h1 className="text-xl mb-2 font-bold text-blue-500">Thông tin cá nhân</h1>
                        <hr />






                        <div class="grid gap-6 mb-6 md:grid-cols-2 mt-5">
                            <div>
                                <label for="first_name" class="block  text-sm font-medium text-gray-900 dark:text-white">Họ và Tên</label>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Vũ Tiến Đạt" />
                            </div>
                            <div>
                                <label for="last_name" class="block  text-sm font-medium text-gray-900 dark:text-white">Ngày sinh</label>
                                <input type="date" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label for="company" class="block  text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="vutiendat1804hd@gmail.com" />
                            </div>
                            <div>
                                <label for="countries" class="block text-sm font-medium text-gray-900 dark:text-white">Giới tính</label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                    <option>Khác</option>
                                    <option>Nam</option>
                                    <option>Nữ</option>

                                </select>
                            </div>
                            <div>
                                <label for="website" class="block text-sm font-medium text-gray-900 dark:text-white">Số điện thoại</label>
                                <input type="text" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="32094722" />
                            </div>
                            <div>
                                <label for="visitors" class="block  text-sm font-medium text-gray-900 dark:text-white">Nghề nghiệp</label>
                                <input type="text" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Khác" />
                            </div>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block  text-sm font-medium text-gray-900 dark:text-white">Địa chỉ</label>
                            <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hà Nội" />
                        </div>

                        <button type="submit" class="text-white w-full h-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm">Cập nhật</button>



                    </form>
                </div>
            </div>
        </div>
    );
};

export default My_account;
