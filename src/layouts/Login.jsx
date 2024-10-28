import React from "react";
import { Link } from "react-router-dom";
import "../styles/login/style.css"; // File chứa các quy tắc CSS tùy chỉnh
import { IoArrowBackCircleSharp } from "react-icons/io5";





function Login() {
  return (
    <main className="main-container">
      <div className="login-container">
        <section className="login-section">
          <div className="form-container">
            <div className="form-wrapper">
              <div className="form-card">
                <div className="form-card-body ">

                  <div className="form-header">

                    <div className="form-title  flex items-center  ">
                      <span className="icon  float-left  w-5 h-5 text-xl hover:text-green-500  transition duration-200 cursor-pointer" >
                        <Link to="/">
                          <IoArrowBackCircleSharp size={25} />
                        </Link>

                      </span>
                      <span className="mx-auto">  Đăng nhập</span>


                    </div>
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
                      <div className="checkbox-wrapper">
                        <input
                          className="checkbox-input"
                          type="checkbox"
                          name="remember"
                          value="true"
                          id="rememberMe"
                        />
                        <label className="checkbox-label" htmlFor="rememberMe">
                          Ghi nhớ đăng nhập
                        </label>
                      </div>
                    </div>

                    <div className="form-group">
                      <button className="submit-button" type="submit">
                        Đăng nhập
                      </button>
                    </div>

                    <div className="form-footer">
                      <p className="form-text">
                        Chưa có tài khoản?{" "}
                        <Link to="/register">Tạo tài khoản</Link>
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

export default Login;
