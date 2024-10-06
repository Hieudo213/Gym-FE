import React from "react";
import { Link } from "react-router-dom"; // Chỉ cần import Link
import logo from "../assets/img/logo.png";

const navItems = [
  { title: "CLB", path: "/clb" },
  { title: "DỊCH VỤ", path: "/dich-vu" },
  { title: "LỊCH HỌC", path: "/lich-hoc" },
  { title: "CHÍNH SÁCH GIÁ", path: "/chinh-sach-gia" },
  { title: "TIN TỨC", path: "/tin-tuc" },
  { title: "KHUYẾN MÃI", path: "/khuyen-mai" },
];

const Header = () => {
  return (
    <header>
      <nav className="bg-white flex py-6 justify-between items-center px-48 shadow-md">
        <Link to="/">
          <img src={logo} alt="logo-img" className="max-w-[140px]" />
        </Link>

        <ul className="flex gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="text-black font-bold hover:text-[#a50000]"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <Link
            to="/Login"
            className="bg-red text-white bg-red-600 py-2 px-4 font-bold hover:bg-red-700 mr-2"
          >
            Đăng Nhập
          </Link>
          <Link
            to="/register"
            className="text-black font-bold py-2 px-6 hover:bg-[#f3f4f5]"
          >
            Đăng Ký
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
