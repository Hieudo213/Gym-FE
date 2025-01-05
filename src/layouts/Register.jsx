import React from "react";
import { Link } from "react-router-dom";
import "../styles/login/style.css";
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import logo from "../assets/img/logo/favicon.png"

import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";



function Register() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="w-full h-[100vh]  reletive">
      <div className="absolute left-[1rem] top-[-2rem] z-2 w-[15rem] h-[15rem] ">
        <img src={logo} className="w-full h-full  " alt="" />
      </div>
      <div className="float-right  w-4/5 [clip-path:polygon(60%_100%,0%_0%,100%_0%,100%_100%)]  z-0  h-[100vh] bg-red-600 "></div>
      <div className=" w-2/3  bg-gray-200  rounded-[10px]   flex z-9 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ boxShadow: '1px 2px 5px black' }}>
        <div className="w-1/2    rounded-tl-lg rounded-bl-lg ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9zWkpSNAlnszt6MVHID3A2tfe91X8HPP3qA&s" className="rounded-tl-lg rounded-bl-lg w-full h-full" alt="" /> </div>
        <div className="w-1/2 h-full p-2">
          <h1 className="font-bold text-2xl  text-center mb-[2rem]">Đăng Ký</h1>
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
              <Input prefix={<FaLock />} type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="confirmpassword "
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input prefix={<FaLock />} type="password" placeholder="Confirm password" />
            </Form.Item>


            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Register
              </Button>
              or  <Link to="/login">Login now! </Link>

            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
