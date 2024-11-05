import React from 'react'
import '../styles/detail/chitiet.css'
import { FaMap, FaPhone } from 'react-icons/fa';

function ClubDetail() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <p className="b">Câu lạc bộ &gt; CITIGYM Thành Thái</p>
      </div>

      {/* Banner Section */}
      <section className="banner">
        <img
          src="https://cali.vn/storage/app/media/phong-tap-gym-ha-noi-thumb.jpg"
          alt="CITIGYM Thành Thái"
          className="banner-img"
        />
        <div className="banner-text"></div>
      </section>

      {/* Location and Info Section */}
      <section className="location-info">
        <div className="location-text">
          <h1 className="slogon c">CITIGYM THÀNH THÁI</h1>
          <p className="e">Phòng gym quận 10 tại CLB Thành Thái - Khu vườn fitness trong thành phố</p>
          
          <h2 className="b c">Địa điểm</h2>
          <p className="e">
            <FaMap size={30} color="green" /> 52 Thành Thái, Phường 12, Quận 10, Thành phố Hồ Chí Minh
          </p>
          
          <p className="b c">
            Giờ hoạt động: <br />
            Thứ 2 đến Thứ 6: 6:00 - 23:00 <br /> Thứ 7, CN: 6:00 - 22:00
          </p>
          
          <p className="b c">
            <FaPhone size={24} color="green" /> Liên hệ: <a href="tel:1900633638">1900633638</a>
          </p>
          
          <div className="button-1">
            <button className="btn-schedule">Xem lịch học</button>
            <button className="btn-pricing">Xem chính sách giá</button>
          </div>
        </div>
        
        <div className="location-img">
          <img
            className="image-1"
            src="https://cali.vn/storage/app/media/phong-tap-gym-ha-noi-thumb.jpg"
            alt="Gym Location"
          />
        </div>
      </section>

      {/* Amenities Section */}
      <section className="amenities">
        <h2>Những tiện ích hàng đầu</h2>
        <p className="text-fot">
          Phòng tập gym quận 10 Citigym Thành Thái có đầy đủ những tiện ích, máy móc hiện đại tiêu chuẩn 5 sao để tạo điều kiện cho hội viên đạt được hiệu quả tập luyện tốt nhất. CLB Thành Thái được ví như khu vườn yoga xanh hiếm có giữa lòng thành phố nhộn nhịp, tại đây ngoài các lớp tập nhóm trong nhà, học viên còn có cơ hội tham gia những buổi tập yoga hòa mình với thiên nhiên.
        </p>
        
        <div className="amenities-grid">
          <div className="amenity-item">
            <img
              className="img2"
              src="https://cali.vn/storage/app/media/phong-tap-gym-ha-noi-thumb.jpg"
              alt="Hệ thống tủ và khóa"
            />
            <h3>Hệ thống tủ và khóa</h3>
            <p>Hệ thống khóa từ thông minh bảo mật tối đa...</p>
          </div>
          
          <div className="amenity-item">
            <img
              className="img2"
              src="https://cali.vn/storage/app/media/phong-tap-gym-ha-noi-thumb.jpg"
              alt="Phòng tập đa năng"
            />
            <h3>Phòng tập đa năng</h3>
            <p>Khu vực Functional đa dạng các loại máy tập...</p>
          </div>
          
          <div className="amenity-item">
            <img
              className="img2"
              src="https://cali.vn/storage/app/media/phong-tap-gym-ha-noi-thumb.jpg"
              alt="Tiện nghi phòng tập"
            />
            <h3>Tiện nghi phòng tập</h3>
            <p>Trang bị đầy đủ thiết bị và công nghệ sao...</p>
          </div>
          
          <div className="amenity-item">
            <img
              className="img2"
              src="https://cali.vn/storage/app/media/phong-tap-gym-ha-noi-thumb.jpg"
              alt="Vườn yoga thư thái"
            />
            <h3>Vườn yoga thư thái</h3>
            <p>Khu vực yoga ngoài trời không gian thư giãn...</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClubDetail