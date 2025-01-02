import React, { useState } from "react";
import { Collapse, Button, Carousel, Form, Modal, Rate, Select, Image } from 'antd';

import "../styles/PricingPolicy.css";
import logo from "../assets/img/logo/favicon.png"

import { FaCrown, FaFire, FaStar } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import gold1 from "../assets/cart/Member Card - Gold/1.png"
import gold2 from "../assets/cart/Member Card - Gold/2.png"

import platium1 from "../assets/cart/Member Card - Platinum/1.png"
import platium2 from "../assets/cart/Member Card - Platinum/2.png"

import selver1 from "../assets/cart/Member Card - Silver/1.png"
import selver2 from "../assets/cart/Member Card - Silver/2.png"



const listservices = [
  {
    id: 1,
    icon: <FaCrown color='white' />,

    title: "PLatium",
    price: "300.000.000",
    time: "Year",
    image1: platium1,
    image2: platium2,
    detail: [
      "Tập luyện toàn thời gian",
      "Có hiệu lực tại tất cả cơ sở Club GymPro trên toàn quốc ",
      "Rủ bạn đi theo có hiệu lực 4-5 tháng (1 người / 1 lượt)",
      "Phù hợp với người có lịch trình bận rộn"],

  },
  {
    id: 2,
    icon: < IoDiamond color='yellow' />,

    title: "GOLD",
    price: "10.000.000",
    time: "Year",
    image1: gold1,
    image2: gold2,

    detail: [
      "Tập luyện cố định thời gian ",
      "Có hiệu lực tại tất cả cơ sở Club GymPro trên toàn quốc",
      "Phù hợp với nhiều người"]
  }
  ,
  {
    id: 3,
    icon: <FaStar color='#d7c7a2' />,

    title: "SELVER",
    price: "3.000.000",
    time: "Year",
    image1: selver1,
    image2: selver2,

    detail: [
      "Tập luyện cố định thời gian",
      "Có hiệu lực tại tất cả cơ sở Club GymPro trên toàn quốc",
      "Phù hợp với nhiều người"]
  }

]
const { Panel } = Collapse;
const PricingPolicy = () => {
  const [form] = Form.useForm();
  const [inputValue, setInputValue] = useState('');


  const handleConfirm = () => {
    console.log('Input Value:', inputValue);

  };
  const [isopenqr, setIsOpenqr] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [Serviceid, setServiceid] = useState(null);
  console.log(Serviceid);
  const object = (index) => {
    const service = listservices.find((item) => item.id === index);
    setServiceid(service);


    setIsOpen(true)

  };


  return (
    <>
      <div className="m-0 mt-[5rem]  w-full h-[73vh] bg-white relative ">
        <div className="absolute right-[1rem] top-[-2rem] w-[15rem] h-[15rem] ">
          <img src={logo} className="w-full h-full  " alt="" />
        </div>
        <div class="absolute transitiont  left-0 bottom-0 border-none h-[55vh] w-[90vw] bg-red-600  pt-[10vh] [clip-path:polygon(0%_100%,0%_0%,80%_0%,100%_100%)] ">
          <h1 className="text-[3rem] text-white font-black mx-[10vw] ">GYM <span className="text-black mx-[-10px]">PRO</span></h1>
          <h1 className="  text-[6rem] text-white font-black mx-[15vw] text-shadow-md">PRICE LIST</h1>
        </div>
      </div>
      <div className="w-full  h-[20vh] bg-black  flex justify-between items-center text-[1rem] p-7 text-white font-black  mb-2 ">
        <div className="h-full aspect-[1/1] bg-white flex justify-center items-center rounded-[50%] text-red-600">
          <FaFire size={40} />
        </div>
        <div className=" mx-5">
          PERSONAL TRAINER COST
        </div>
        <div className=" mx-5 border border-l-white px-[5rem] py-2">500.000 VND</div>
        <div className=" mx-5">SESSION</div>
        <div className="h-full  aspect-[1/1] bg-white flex justify-center items-center rounded-[50%] text-red-600">
          <FaStar size={40} />
        </div>
      </div>
      <div className=" max-w-[1180px] mx-auto p-5 ">
        {listservices.map((item, index) => (
          <div onClick={() => object(item.id)} key={index} className="w-full p-4 border border-gray-300 rounded-[10px] flex shadow-custom my-5 bg-gray-50 cursor-pointer">
            <div className="w-1/3 ] ">
              <img src={item.image1} className="w-full h-[12rem] rounded-[10px] mb-2" alt="" />
              <img src={item.image2} className="w-full h-[12rem] rounded-[10px]" alt="" />
            </div>
            <div className="w-2/3   p-5  ">
              <h1 className="font-black text-[1.5rem] flex my-5">
                <div className="w-[2.5rem] h-[2.5rem] rounded-[50%] border border-gray-300 flex justify-center items-center bg-[#CCCCCC] mx-2">
                  {item.icon}
                </div>
                <span>{item.title}</span>
                <div className="w-[5px] h-[1.5rem] mt-2 mx-2 border-[3px] border-black "></div>
                <span className="mx-9">{item.price} VNĐ </span>
                <div className="w-[5px] h-[1.5rem] mt-2 mx-2 border-[3px] border-black"></div>
                <span >{item.time}</span>
              </h1>
              <hr />
              <div className="w-full p-3">
                <ul className="list-disc list-inside">
                  {item.detail.map((i, vt) => (
                    <li key={vt} className="my-2">{i} </li>
                  ))}


                </ul>
              </div>
            </div>
          </div>
        ))}



      </div>
      <Modal
        centered
        title={<h1 className="text-2xl">Đăng ký gói tập</h1>}
        open={isOpen} onCancel={() => setIsOpen(false)}
        okText="My Custom OK"
        cancelText="My Custom Cancel"
        width={700}
        footer={
          <div className="text-end">
            <Button onClick={() => setIsOpen(false)} className="w-[200px] mr-2">
              Hủy bỏ
            </Button>
            <Button onClick={() => { setIsOpenqr(true); setIsOpen(false); }} type="primary" className="w-[200px]">
              Quét mã QR để thanh toán
            </Button>
          </div>
        }>
        <hr />
        {Serviceid ? (
          <>
            <div className="row flex mt-3">
              <div className="w-1/3">
                <h1 className="text-xl font-bold">{Serviceid.title}</h1>
                <h1 className="text-[17px]">{Serviceid.price} vnđ</h1>
                <h1 className="text-[17px]">Thời hạn: 1 năm</h1>
              </div>
              <div className="w-2/3">
                <ul className="list-disc list-inside">
                  {Serviceid.detail.map((i, vt) => (
                    <li key={vt} className="my-2 text-sm">{i} </li>
                  ))}
                </ul>
              </div>
            </div>
            <Form.Item label="Chi nhánh gần nhất" style={{ width: '80%', margin: "10px  auto" }}>
              <Select>
                <Select.Option >demodemo</Select.Option>
              </Select>
            </Form.Item>
            <Carousel arrows className="w-[70%] border m-auto border-gray-300 rounded-[10px] p-1" >
              <div >
                <img src={Serviceid.image1} className="  rounded-[10px]" alt="" />
              </div>
              <div >
                <img src={Serviceid.image2} className="  rounded-[10px]" alt="" />
              </div>
            </Carousel>
          </>
        ) : (
          <p>Không có thông tin dịch vụ.</p>
        )}

      </Modal>


      <Modal
        centered
        title={<h1 className="text-2xl">QR code</h1>}
        open={isopenqr} onCancel={() => setIsOpenqr(false)}
        footer={null}
        width={500}
      >
        <hr />
        <img
          className="w-full"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"

        />
        <p className="text-blue-600 flex">  Vui lòng quét mã QR để thanh toán  gói đăng ký của bạn, quá trình nãy sẽ mất một khoảng thời gian để admin xác thực</p>

      </Modal>

    </>

  );
};


export default PricingPolicy;
