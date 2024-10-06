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

const Register = () => {
  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Tạo tài khoản</h5>
                      <p className="text-center small">Nhập thông tin cá nhân của bạn để tạo tài khoản</p>
                    </div>

                    <form className="row g-3 needs-validation" noValidate>
                      <div className="col-12">
                        <label htmlFor="yourName" className="form-label">Tên của bạn</label>
                        <input type="text" name="name" className="form-control" id="yourName" required />
                        <div className="invalid-feedback">Vui lòng nhập tên của bạn!</div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourEmail" className="form-label">Email của bạn</label>
                        <input type="email" name="email" className="form-control" id="yourEmail" required />
                        <div className="invalid-feedback">Vui lòng nhập địa chỉ Email hợp lệ!</div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">Tên người dùng</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input type="text" name="username" className="form-control" id="yourUsername" required />
                          <div className="invalid-feedback">Vui lòng chọn một tên người dùng.</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Mật khẩu</label>
                        <input type="password" name="password" className="form-control" id="yourPassword" required />
                        <div className="invalid-feedback">Vui lòng nhập mật khẩu!</div>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                          <label className="form-check-label" htmlFor="acceptTerms">
                            Tôi đồng ý với <a href="#">điều khoản và điều kiện</a>
                          </label>
                          <div className="invalid-feedback">Bạn phải đồng ý trước khi gửi.</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Tạo tài khoản</button>
                      </div>

                      <div className="col-12">
                        <p className="small mb-0">Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
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
};

export default Register;
