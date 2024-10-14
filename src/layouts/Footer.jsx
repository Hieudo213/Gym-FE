import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom';
import Dat from "../assets/img/Footer/dat.png";
import Tanh from "../assets/img/Footer/tanh3.jpg";
import Hieu from "../assets/img/Footer/hieu3.jpg";
import Dung from "../assets/img/Footer/Congdung.png";
import Lam from "../assets/img/Footer/lam3.jpg";
function Footer() {
  return (
    <>
      <div className="footer_body">
        <div className="list">


          <div className="col-lg-4">
            <div className="text_logo">CITYGYM</div>
            <div className='item1'><i className="fa-solid fa-phone fix1"></i> <span>037 573 4367</span> </div>
            <div className='item1'> <i className="fa-solid fa-location-dot fix1"></i><span>Sân vận động Bách khoa , 94.Lê Thanh Nghị, Q.Hai Bà Trưng,Tp.Hà Nội </span></div>
            <div className='item1'>
              <span className='icon_block'>
                <i className="fa-solid fa-clock fix1 "></i>
              </span>

              <span className='text2'> <p>Thứ Hai - Thứ Sáu: 6:00 đến 23:00 </p>
                <p>Thứ Bảy - Chủ Nhật: 8:00 đến 22:00</p></span>

            </div>
          </div>

          <div className="col-lg-4">
            <div className='col-lg-6'>

              <div className='item1'>Phương thức thanh toán </div>
              <div className='item1'>Dịch Vụ</div>
              <div className='item1'>Chính sách giá</div>
              <div className='item1'>Chính sách bảo mật</div>
            </div>
            <div className='col-lg-6'>
              <div className='item1'>Tuyển dụng </div>
              <div className='item1'>Tin tức</div>
              <div className='item1'>Liên hệ </div>
              <div className='item1'>Câu lạc bộ</div>
            </div>
          </div>

          <div className="col-lg-4">
            {/* <div className="text_logo">MẠNG XÃ HỘI</div>
            <div className="group_icon">
              <i className="fa-brands fa-facebook fit2"></i>
              <i className="fa-brands fa-google fit2"></i>
              <i className="fa-brands fa-youtube fit2"></i>
            </div> */}
            <div className="text_logo">Thành viên </div>

            <div className="Designed">

              <Link to="https://www.facebook.com/profile.php?id=100082315533736" className="item_desig">

                <div className="image_item">
                  <img src={Dat} alt="" />
                </div>
              </Link>

              <Link to="https://www.facebook.com/lam.th1042" className="item_desig">

                <div className="image_item">
                  <img src={Lam} alt="" />
                </div>

              </Link>


              <Link to="https://www.facebook.com/hieudoo213" className="item_desig">

                <div className="image_item">
                  <img src={Hieu} alt="" />
                </div>

              </Link>

            </div>

            <div className="Designed">

              <Link to="https://www.facebook.com/pham.congdung.351" className="item_desig ">

                <div className="image_item">
                  <img src={Dung} alt="" />
                </div>

              </Link>
              <Link to="https://www.facebook.com/profile.php?id=100014609829736" className="item_desig">

                <div className="image_item">
                  <img src={Tanh} className='fixa' alt="" />
                </div>

              </Link>

            </div>

          </div>




        </div>
      </div >
      <div className="end_footer">
        <div className="text1">
          @ Edited by group 12
        </div>

      </div>
    </>


  )
}

export default Footer