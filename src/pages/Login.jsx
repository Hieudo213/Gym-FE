import React from 'react';
import '../css/vendor/bootstrap/css/bootstrap.min.css';
import '../css/vendor/bootstrap-icons/bootstrap-icons.css';
import '../css/vendor/boxicons/css/boxicons.min.css';
import '../css/vendor/quill/quill.snow.css';
import '../css/vendor/quill/quill.bubble.css';
import '../css/vendor/remixicon/remixicon.css';
import '../css/vendor/simple-datatables/style.css';
import '../css/style.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                {/* <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="logo d-flex align-items-center w-auto">
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">NiceAdmin</span>
                  </a>
                </div> */}

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Đăng nhập tài khoản của bạn</h5>
                      <p className="text-center small">Nhập tên người dùng & mật khẩu để đăng nhập</p>
                    </div>

                    <form className="row g-3 needs-validation" noValidate>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">Tên người dùng</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input type="text" name="username" className="form-control" id="yourUsername" required />
                          <div className="invalid-feedback">Vui lòng nhập tên người dùng của bạn.</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Mật khẩu</label>
                        <input type="password" name="password" className="form-control" id="yourPassword" required />
                        <div className="invalid-feedback">Vui lòng nhập mật khẩu của bạn!</div>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                          <label className="form-check-label" htmlFor="rememberMe">Ghi nhớ đăng nhập</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Đăng nhập</button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Chưa có tài khoản? <Link to="/register">Tạo tài khoản</Link>
                        </p>
                      </div>
                    </form>

                  </div>
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
