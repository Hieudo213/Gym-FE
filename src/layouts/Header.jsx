import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { title: "CLB", path: "/clb" },
  { title: "DỊCH VỤ", path: "/dich-vu" },
  { title: "LỊCH TẬP", path: "/lich-hoc" },
  { title: "CHÍNH SÁCH GIÁ", path: "/chinh-sach-gia" },
  { title: "TIN TỨC", path: "/tin-tuc" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userName = "Nguyễn Văn A";
  const dropdownRef = useRef(null); // Ref for the dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <nav className="bg-white w-full shadow-md fixed top-0 left-0 z-50">
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

          {/* Login/Register Buttons */}
          <div className="hidden xl:flex relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 text-black py-2 px-4 font-bold hover:text-[#a50000] transition-all duration-500 rounded"
            >
              <img
                src="https://png.pngtree.com/png-clipart/20190904/original/pngtree-user-cartoon-avatar-pattern-flat-avatar-png-image_4492883.jpg"
                alt="User Icon"
                className="w-8 h-8 rounded-full"
              />
              <span>{userName}</span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-10 right-[-30px] mt-2 w-48 bg-white rounded-md shadow-lg"
              >
                <Link
                  to="/my-account"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Tài khoản của tôi
                </Link>
                <Link
                  to="/my-orders"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Gói tập
                </Link>
                <button
                  onClick={() => {
                    /* Add logout function here */
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
