import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center p-6">
      <div className="max-w-md">
        <img
          src="https://png.pngtree.com/png-clipart/20230417/original/pngtree-gears-flat-icon-png-image_9064366.png"
          alt="Gears Icon"
          className="w-32 mx-auto mb-4"
        />
        <h1 className="text-5xl font-bold mb-6">
          Chúng Tôi Đang Hoàn Thiện Sản Phẩm
        </h1>
        <p className="text-lg mb-8">
          Hãy kiên nhẫn chờ đợi! Chúng tôi sẽ sớm trở lại với những sản phẩm
          tuyệt vời.
        </p>
        <Link
          to="/"
          className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-lg transition duration-300 hover:bg-gray-200 hover:text-blue-700"
        >
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
