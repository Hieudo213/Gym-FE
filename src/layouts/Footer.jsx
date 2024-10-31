import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import Dat from "../assets/img/Footer/dat.png";
import Tanh from "../assets/img/Footer/tanh3.jpg";
import Hieu from "../assets/img/Footer/hieu3.jpg";
import Dung from "../assets/img/Footer/Congdung.png";
import Lam from "../assets/img/Footer/lam3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { FaClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <div className="footer_body">
        <div className="w-[85%] mx-auto flex">
          <div className="w-[30%]   h-full">
            <div className="text_logo font-bold text-base">GYMPRO</div>
            <div className="row mt-5">
              <FaPhone />
              <span className="text-base ml-3">1900 633 638</span>
            </div>
            <div className="row mt-5">
              <FaLocationDot className=" mt-3 text-xl" />
              <span className="text-base ml-3">
                92,Lê Thanh Nghị , Hai bà Trưng , Hà Nội (Sân vân động Bách
                Khoa)
              </span>
            </div>
            <div className="row mt-5 flex">
              <div className="w-[5%] flex items-center justify-center mr-2">
                <FaClock />
              </div>
              <div className="w-[90%]">
                <p>Thứ Hai - Thứ Sáu: 6:00 đến 23:00 </p>
                <p>Thứ Bảy - Chủ nhật: 8:00 đến 22:00 </p>
              </div>
            </div>
          </div>
          <div className="w-[20%]  mt-5 p-3 mx-auto pt-2 h-full">
            <div className="row  mt-5 justify-center">
              Phương thức thanh toán
            </div>
            <div className="row  mt-5 justify-center">Dịch vụ</div>
            <div className="row  mt-5 justify-center">Chính sách giá </div>
            <div className="row  mt-5 justify-center">Chính sách bảo mật</div>
          </div>
          <div class="w-[20%]  mt-5 mx-auto pt-2  h-full">
            <div className="row  mt-5 justify-center"> Tuyển dụng </div>
            <div className="row  mt-5 justify-center">Tin tức </div>
            <div className="row  mt-5 justify-center">Liên hệ</div>
            <div className="row  mt-5 justify-center">Câu lạc bộ</div>
          </div>
          <div class="w-[30%]   h-full">
            <div className="text_logo fix6">Thành viên </div>
            <div className="Designed">
              <Link
                to="https://www.facebook.com/profile.php?id=100082315533736"
                className="item_desig"
              >
                <div className="image_item">
                  <img src={Dat} alt="" />
                </div>
              </Link>

              <Link
                to="https://www.facebook.com/lam.th1042"
                className="item_desig"
              >
                <div className="image_item">
                  <img src={Lam} alt="" />
                </div>
              </Link>

              <Link
                to="https://www.facebook.com/hieudoo213"
                className="item_desig"
              >
                <div className="image_item">
                  <img src={Hieu} alt="" />
                </div>
              </Link>
            </div>

            <div className="Designed">
              <Link
                to="https://www.facebook.com/pham.congdung.351"
                className="item_desig "
              >
                <div className="image_item">
                  <img src={Dung} alt="" />
                </div>
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=100014609829736"
                className="item_desig"
              >
                <div className="image_item">
                  <img src={Tanh} className="fixa" alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="end_footer">
        <div className="text1">@ Edited by group 12</div>
      </div>
    </>
  );
}

export default Footer;
