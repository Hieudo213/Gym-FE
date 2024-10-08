import React from 'react';
import { tw } from 'typewind';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <main className={tw.min_h_screen.d_flex.flex_col.justify_center.align_items_center.py_4}>
      <div className={tw.container}>
        <section className={tw.section.d_flex.flex_col.justify_center.align_items_center.min_h_screen}>
          <div className={tw.container}>
            <div className={tw.row.justify_center}>
              <div className={tw.col_md_6.col_lg_4.d_flex.flex_col.align_items_center.justify_center}>
                <div className={tw.card.mb_3}>
                  <div className={tw.card_body}>
                    <div className={tw.pt_4.pb_2}>
                      <h5 className={tw.card_title.text_center.pb_0.fs_4}>Đăng nhập tài khoản của bạn</h5>
                      <p className={tw.text_center.text_sm}>Nhập tên người dùng & mật khẩu để đăng nhập</p>
                    </div>
                    <form className={tw.row.g_3.needs_validation} noValidate>
                      <div className={tw.col_12}>
                        <label htmlFor="yourUsername" className={tw.form_label}>Tên người dùng</label>
                        <div className={tw.input_group.has_validation}>
                          <span className={tw.input_group_text} id="inputGroupPrepend">@</span>
                          <input type="text" name="username" className={tw.form_control} id="yourUsername" required />
                          <div className={tw.invalid_feedback}>Vui lòng nhập tên người dùng của bạn.</div>
                        </div>
                      </div>

                      <div className={tw.col_12}>
                        <label htmlFor="yourPassword" className={tw.form_label}>Mật khẩu</label>
                        <input type="password" name="password" className={tw.form_control} id="yourPassword" required />
                        <div className={tw.invalid_feedback}>Vui lòng nhập mật khẩu của bạn!</div>
                      </div>

                      <div className={tw.col_12}>
                        <div className={tw.form_check}>
                          <input className={tw.form_check_input} type="checkbox" name="remember" value="true" id="rememberMe" />
                          <label className={tw.form_check_label} htmlFor="rememberMe">Ghi nhớ đăng nhập</label>
                        </div>
                      </div>

                      <div className={tw.col_12}>
                        <button className={tw.btn.btn_primary.w_full} type="submit">Đăng nhập</button>
                      </div>

                      <div className={tw.col_12}>
                        <p className={tw.text_sm.mb_0}>
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
