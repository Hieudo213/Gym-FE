import React from 'react'

function EditProfile() {
    return (
        <form action="">
            <h1 className="text-xl mb-2 font-bold text-[#b30c0d]">Thông tin cá nhân</h1>
            <hr />
            <div className="grid gap-6 mb-6 md:grid-cols-2 mt-5">
                <div>
                    <label for="first_name" className="block  text-sm font-medium text-gray-900 ">Họ và Tên</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " defaultValue="Vũ Tiến Đạt" />
                </div>

                <div>
                    <label for="last_name" className="block  text-sm font-medium text-gray-900 ">Ngày sinh</label>
                    <input type="date" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>

                <div>
                    <label for="company" className="block  text-sm font-medium text-gray-900 ">Email</label>
                    <input type="email" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " defaultValue="vutiendat1804hd@gmail.com" />
                </div>

                <div>
                    <label for="countries" className="block text-sm font-medium text-gray-900 ">Giới tính</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">

                        <option>Khác</option>
                        <option>Nam</option>
                        <option>Nữ</option>

                    </select>
                </div>
                <div>
                    <label for="website" className="block text-sm font-medium text-gray-900 ">Số điện thoại</label>
                    <input type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue="32094722" />
                </div>
                <div>
                    <label for="visitors" className="block  text-sm font-medium text-gray-900 ">Nghề nghiệp</label>
                    <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Khác" />
                </div>
            </div>
            <div className="mb-6">
                <label for="email" className="block  text-sm font-medium text-gray-900 dark:text-white">Địa chỉ</label>
                <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Hà Nội" />
            </div>

            <button type="submit" className="text-white w-full h-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm">Cập nhật</button>
        </form>
    )
}

export default EditProfile