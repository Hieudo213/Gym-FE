import React from "react";
import { Link } from "react-router-dom";
import "../styles/login/style.css"; // File chứa các quy tắc CSS tùy chỉnh cho trang đăng ký
import { IoArrowBackCircleSharp } from "react-icons/io5";
function Register() {
  return (
    <main className="main-container">
      <div className="login-container">
        <section className="register-section">
          <div className="form-container">
            <div className="form-wrapper">
              <div className="form-card">
                <div className="form-card-body">
                  <div className="form-header my-3 ">
                    <span className="icon float-left mt-1  w-5 h-5 text-xl hover:text-green-300  transition duration-200 cursor-pointer">
                      <Link to="/">
                        <IoArrowBackCircleSharp size={25} />
                      </Link>
                    </span>
                    <span className="form-title">Đăng ký</span>
                  </div>
                  <form className="login-form" noValidate>
                    <div className="form-group">
                      <label htmlFor="yourUsername" className="form-label">
                        Tên người dùng
                      </label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="username"
                          className="form-input"
                          id="yourUsername"
                          required
                        />
                        <div className="error-message">
                          Vui lòng nhập tên người dùng của bạn.
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="yourEmail" className="form-label">
                        Email
                      </label>
                      <div className="input-wrapper">
                        <input
                          type="email"
                          name="email"
                          className="form-input"
                          id="yourEmail"
                          required
                        />
                        <div className="error-message">
                          Vui lòng nhập email hợp lệ.
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="yourPassword" className="form-label">
                        Mật khẩu
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-input"
                        id="yourPassword"
                        required
                      />
                      <div className="error-message">
                        Vui lòng nhập mật khẩu của bạn!
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="confirmPassword" className="form-label">
                        Xác nhận mật khẩu
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="form-input"
                        id="confirmPassword"
                        required
                      />
                      <div className="error-message">Mật khẩu không khớp!</div>
                    </div>

                    <div className="form-group">
                      <button className="submit-button" type="submit">
                        Đăng ký
                      </button>
                    </div>

                    <div className="form-footer">
                      <p className="form-text">
                        Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Register;
