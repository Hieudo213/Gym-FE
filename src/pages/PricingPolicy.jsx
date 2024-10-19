import React from "react";
import '../styles/Services.css'

const PricingPolicy = () => {
  return 
      <div>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-image">
            <img
              src="https://cali.vn/storage/app/media/phong-tap-gym-ha-noi-thumb.jpg"
              alt="Hero Image"
            />
          </div>
        </section>
  
        {/* Pricing Section */}
        <section className="pricing">
          <div className="plans">
            <div className="plan">
              <h2>CLASSIC</h2>
              <p>15 Tháng</p>
              <p>Tổng Chi phí: 11,880,000 VNĐ</p>
              <p>Chi phí / tháng: 792,000 VNĐ</p>
              <p>Chi phí / ngày: 26,400 VNĐ</p>
              <a href="#" className="btn">
                Đăng ký ngay
              </a>
            </div>
            <div className="plan">
              <h2>PLUS</h2>
              <p>22 Tháng</p>
              <p>Tổng Chi phí: 17,930,000 VNĐ</p>
              <p>Chi phí / tháng: 815,000 VNĐ</p>
              <p>Chi phí / ngày: 27,167 VNĐ</p>
              <a href="#" className="btn">
                Đăng ký ngay
              </a>
            </div>
            <div className="plan">
              <h2>Citipassport</h2>
              <p>36 Tháng</p>
              <p>Tổng Chi phí: 29,810,000 VNĐ</p>
              <p>Chi phí / tháng: 828,056 VNĐ</p>
              <p>Chi phí / ngày: 27,602 VNĐ</p>
              <a href="#" className="btn">
                Đăng ký ngay
              </a>
            </div>
            <div className="plan">
              <h2>Royal</h2>
              <p>48 Tháng</p>
              <p>Tổng Chi phí: 39,745,000 VNĐ</p>
              <p>Chi phí / tháng: 828,021 VNĐ</p>
              <p>Chi phí / ngày: 27,601 VNĐ</p>
              <a href="#" className="btn">
                Đăng ký ngay
              </a>
            </div>
            <div className="plan">
              <h2>Signature</h2>
              <p>60 Tháng</p>
              <p>Tổng Chi phí: 156,865,000 VNĐ</p>
              <p>Chi phí / tháng: 2,614,417 VNĐ</p>
              <p>Chi phí / ngày: 87,147 VNĐ</p>
              <a href="#" className="btn">
                Đăng ký ngay
              </a>
            </div>
          </div>
        </section>
  
        {/* Comparison Table */}
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Dịch vụ</th>
                <th>Classic</th>
                <th>Plus</th>
                <th>CitiPassport</th>
                <th>Royal</th>
                <th>Signature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tập luyện tại 01 CLB đã chọn</td>
                <td className="checkmark"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Tham gia Yoga và Group X tại 01 CLB đã chọn</td>
                <td className="checkmark"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Tự do tập luyện tại tất cả CLB hệ thống</td>
                <td></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
              </tr>
              <tr>
                <td>Không giới hạn thời gian tập luyện</td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
              </tr>
              <tr className="highlight-row">
                <td>Tham gia tất cả các lớp Yoga và Group X tại tất cả các CLB</td>
                <td></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
              </tr>
              <tr>
                <td>1 buổi định hướng luyện tập riêng biệt với huấn luyện viên</td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
              </tr>
              <tr>
                <td>Dịch vụ sử dụng phòng tắm hơi và xông hơi</td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
              </tr>
              <tr>
                <td>Nước uống miễn phí</td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
              </tr>
              <tr className="highlight-row">
                <td>Dịch vụ khăn tập hạng cao cấp</td>
                <td></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
              </tr>
              <tr>
                <td>Hệ thống khóa từ thông minh tại CLB</td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
                <td className="checkmark"></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    
  
};

export default PricingPolicy;
