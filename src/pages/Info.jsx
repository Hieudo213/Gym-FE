import React, { useState } from 'react'
import '../styles/info/thongtin.css'


const Info = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phone: '',
    birthDate: '',
    occupation: ''
  });

  // Hàm xử lý khi người dùng nhập vào form
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Hàm xử lý khi form được submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý dữ liệu sau khi submit
    console.log('Thông tin cá nhân:', formData);
  };
  return (
    <div className="container">
      <div className="card">
        <h5 className="card-title">Thông tin cá nhân</h5>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="fullName" className="form-label">Họ tên</label>
          <input
            type="text"
            id="fullName"
            className="form-control"
            required
            value={formData.fullName}
            onChange={handleChange}
          />

          <label htmlFor="age" className="form-label">Tuổi</label>
          <input
            type="number"
            min="0"
            id="age"
            className="form-control"
            required
            value={formData.age}
            onChange={handleChange}
          />

          <label htmlFor="phone" className="form-label">Số điện thoại</label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="birthDate" className="form-label">Ngày sinh</label>
          <input
            type="date"
            id="birthDate"
            className="form-control"
            required
            value={formData.birthDate}
            onChange={handleChange}
          />

          <label htmlFor="occupation" className="form-label">Nghề nghiệp</label>
          <input
            type="text"
            id="occupation"
            className="form-control"
            required
            value={formData.occupation}
            onChange={handleChange}
          />

          <button type="submit" className="btn">Gửi thông tin</button>
        </form>
      </div>
    </div>
  )
}

export default Info