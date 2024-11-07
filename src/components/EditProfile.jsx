import React from 'react'

function EditProfile() {
    return (
        <form action="">
            <h1 className="text-xl mb-2 font-bold text-[#b30c0d]">Thông tin cá nhân</h1>
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
    )
}

export default EditProfile