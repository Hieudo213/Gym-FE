
import React from "react";
import { Link } from "react-router-dom"; // Chỉ cần import Link
import logo from "../assets/img/logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { title: "CLB", path: "/clb" },
  { title: "DỊCH VỤ", path: "/dich-vu" },
  { title: "LỊCH HỌC", path: "/lich-hoc" },
  { title: "CHÍNH SÁCH GIÁ", path: "/chinh-sach-gia" },
  { title: "TIN TỨC", path: "/tin-tuc" },
  { title: "KHUYẾN MÃI", path: "/khuyen-mai" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Quản lý trạng thái của menu

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

          {/* Hamburger menu icon */}
          <div className="xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>

          {/* Menu Items */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } xl:flex flex-col xl:flex-row gap-8 absolute xl:static left-0 top-16 bg-white xl:bg-transparent w-full xl:w-auto px-6 xl:px-0 py-4 xl:py-0 shadow-md xl:shadow-none`}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-black font-bold hover:text-[#a50000] transition-all duration-500 block py-2"
                  onClick={() => setIsOpen(false)} // Đóng menu sau khi nhấp vào link
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login/Register Buttons */}
          <div className="hidden xl:flex">
            <Link
              to="/login"
              className="bg-red-600 text-white py-2 px-4 font-bold hover:bg-red-700 transition-all duration-500 mr-2"
            >
              Đăng Nhập
            </Link>
            <Link
              to="/logout"
              className="text-black font-bold py-2 px-6 hover:bg-[#f3f4f5] transition-all duration-500"
            >
              Đăng Ký
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
