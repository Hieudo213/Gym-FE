import React from "react";
import { Link } from "react-router-dom";
import "../styles/login/style.css";
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import logo from "../assets/img/logo/favicon.png"

import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";

function Login() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="w-full h-[100vh]  reletive">
      <div className="absolute right-[1rem] top-[-2rem] w-[15rem] h-[15rem] ">
        <img src={logo} className="w-full h-full  " alt="" />
      </div>
      <div className="  w-4/5 [clip-path:polygon(0%_100%,0%_0%,60%_0%,100%_100%)]  h-[100vh] bg-red-600 "></div>
      <div className=" reletive w-1/3 p-3  bg-white  rounded-[10px]   z-9 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ boxShadow: '1px 5px 10px black' }}>
        <Link to="/">
          <div className="absolute text-lg top-2 left-6 rounded-[50%] w-[2.2rem] h-[2.2rem]  border border-gray-200 flex justify-center items-center " style={{ boxShadow: '1px 2px 3px while' }}>
            <BsArrowLeft />
          </div>
        </Link>
        <h1 className="font-bold text-2xl  text-center mb-[2rem]">Đăng nhập</h1>
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          style={{
            maxWidth: 360,
            margin: 'auto'
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<MdEmail />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input prefix={<FaLock />} type="password" placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Lưu thông tin của tôi</Checkbox>
              </Form.Item>
              <a href="">Quên mật khẩu ?</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            Về trang <Link to="/register"> Đăng ký ngay !</Link>
          </Form.Item>
        </Form>

      </div>
    </div>
  );
}

export default Login;
