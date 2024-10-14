import React from "react";
import '../styles/Services.css'
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <>
      <div className="image_full">
        <div className="content">
          DỊCH VỤ
        </div>
        <div className="title-bg">
          FIND A CLASS
        </div>
        <img src="https://citigym.com.vn/storage/uploads/vietdh/dichvu-dt.jpg" alt="Description" />
      </div>
      <div className="section-title">
        <div className="title">CÁC DỊCH VỤ CỦA CHÚNG TÔI </div>
        <p >Chương trình  luyện tập yoga, gym, group X được thiết kế khoa học và phù hợp từ chuyên gia sẽ giúp bạn đạt được mục tiêu sức khỏe và hình thể.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="culunm">
            <Link to="https://www.facebook.com/profile.php?id=100082315533736">
              <div className="object">
                <img src="https://citigym.com.vn/storage/uploads/bums-and-tums.jpg" alt="" />
              </div>
            </Link>

          </div>
          <div className="culunm">
            <div className="object">
              <img src="https://citigym.com.vn/storage/uploads/thumbnail-1-5.jpg" alt="" />
            </div>
          </div>
          <div className="culunm">
            <div className="object">
              <img src="https://citigym.com.vn/storage/uploads/untitled-8-3.jpg" alt="" />
            </div>
          </div>

        </div>
      </div>
    </>

  )
};

export default Services;
