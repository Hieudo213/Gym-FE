import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { Avatar, Popconfirm, Popover } from "antd";
import { CiUser } from "react-icons/ci";

const navItems = [
  { title: "CLB", path: "/clb" },
  { title: "DỊCH VỤ", path: "/dich-vu" },
  { title: "LỊCH TẬP", path: "/lich-hoc" },
  { title: "CHÍNH SÁCH GIÁ", path: "/chinh-sach-gia" },
  { title: "TIN TỨC", path: "/tin-tuc" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const userName = "Nguyễn Văn A";
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    if (isDropdown) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDropdown]);

  return (
    <header>
      <nav className="bg-white w-full shadow-md fixed top-0 left-0 z-50" >
        <div className="flex justify-between items-center max-w-[1170px] m-auto py-4">
          <Link to="/">
            <img src={logo} alt="logo-img" className="max-w-[140px]" />
          </Link>

          {/* Hamburger menu icon */}
          <div className="xl:hidden">
            {/* click thay đổi cái gì  */}
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
              {/* Thay đổi icon X -> /// */}
            </button>
          </div>

          {/* Menu Items */}
          <ul
            className={`${isOpen ? "block" : "hidden"
              } xl:flex flex-col xl:flex-row gap-8 absolute xl:static left-0 top-16 bg-white xl:bg-transparent w-full xl:w-auto px-6 xl:px-0 py-4 xl:py-0 shadow-md xl:shadow-none`}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-black font-bold hover:text-[#a50000] transition-all duration-500 block py-2"
                  onClick={() => setIsOpen(false)} // Close menu after clicking link
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden xl:flex relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdown(!isDropdown)}
              className="flex items-center space-x-2 text-black py-2 px-4 font-bold hover:text-[#a50000] transition-all duration-500 rounded"
            >
              <Avatar icon={<CiUser />}></Avatar>
              <span>{userName}</span>
            </button>
            {isDropdown && (
              <div className="w-[180px] absolute top-[63px] left-3 z-10 bg-white divide-y divide-gray-100 shadow">
                <div class="px-4 py-3 text-sm ">
                  <div className="font-medium ">Nguyễn Văn A</div>
                  <div className="truncate">A@flowbite.com</div>
                </div>
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownAvatarButton">
                  <li>
                    <Link onClick={() => setIsDropdown(false)} to='/admin' href="#" className="block px-4 py-2 hover:bg-gray-100">Quản lý hệ thống</Link>
                  </li>
                  <li>
                    <Link onClick={() => setIsDropdown(false)} to="/my-account" href="#" className="block px-4 py-2 hover:bg-gray-100">Thông tin cá nhân</Link>
                  </li>
                  <li>
                    <Link onClick={() => setIsDropdown(false)} to="/chung-toi-dang-hoan-thien" href="#" className="block px-4 py-2 hover:bg-gray-100">Gói Tập</Link>
                  </li>
                </ul>
                <div class="py-2">
                  <Link onClick={() => setIsDropdown(false)} to="/chung-toi-dang-hoan-thien" href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Đăng xuất</Link>
                </div>
              </div>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
