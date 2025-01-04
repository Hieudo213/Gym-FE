import { Button, Input, Image as AntImage, Form } from 'antd';
import { Checkbox, Modal, TreeSelect, Empty } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Table_list from './Model/Table_list';
import Toolbar from './Model/Toolbar';
import { Link } from 'react-router-dom';
import AddingCategoryForm from './Forms/AddingCategoryForm';
import { render } from '@testing-library/react';





function Category() {
  const [imageSrc, setImageSrc] = useState("");
  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const image = "https://citigym.com.vn/storage/uploads/vietdh/pt-thuy1.jpg";

  const dataSource = [
    {
      key: '1',
      stt: 1,
      name: "Yoga",
      description: 'Mô tả đây nàyfgh fhdg hd hgf hg fgfg',
      image: image
    },
    {
      key: '2',
      stt: 2,
      name: "Gym ",
      description: 'Mô tả đây nàygh gh gh fgh fgh fgh dhgf hgf hgfhfghhgfhfgh',
      image: image
    },
    {
      key: '3',
      stt: 3,
      name: "Sport ",
      description: 'Mô tả đây này sdfs df gfdg dsfg sfg sfgdfsgf dggh  g gdf gg',
      image: image

    },
  ];
  const [checkboxMain, setCheckboxMain] = useState(false);

  const [checkedRows, setCheckedRows] = useState([]);
  //Danh sách checkboxx  checkedRows
  // console.log(checkedRows);
  // hàm kiểm tra checkbox
  const handleMainCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setCheckboxMain(isChecked);
    if (isChecked) {

      setCheckedRows(dataSource.map((row) => row.key));
    } else {

      setCheckedRows([]);
    }
  };
  // hàm kiểm tra checkbox 
  const handleRowCheckboxChange = (key) => {
    if (checkedRows.includes(key)) {
      setCheckedRows(checkedRows.filter((item) => item !== key));
    } else {
      setCheckedRows([...checkedRows, key]);
    }
  };


  const columns = [
    {
      title: (<Checkbox checked={checkboxMain} indeterminate={checkedRows.length > 0 && checkedRows.length < dataSource.length} onChange={handleMainCheckboxChange} />),
      key: 'id',
      render: (text, record) => (
        <Checkbox checked={checkedRows.includes(record.key)}
          onChange={() => handleRowCheckboxChange(record.key)} />
      ),
    },
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
    },
    {
      title: 'Tên thể loại',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <span
          onClick={() => UpdatebyId(record.key)}
          className="text-blue-500 cursor-pointer"
        >
          {text}
        </span>
      )
    },
    {
      title: 'Ảnh ',
      dataIndex: 'image',
      key: 'image',
      render: (item) => (
        <img src={item} />
      )
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },

  ];

  //Lây dữ liệu theo id 
  const [dataupdate, SetUpdate] = useState(null);
  const UpdatebyId = (id) => {

    const record = dataSource.find(item => item.key === id);

    SetUpdate(record);
    console.log(dataupdate);

    setIsOpen(true);

  }


  const [addingForm, setAddingForm] = useState(false);
  const handleOk = () => {
    setAddingForm(false);
  };
  const handleCancel = () => {
    setAddingForm(false);
    setIsOpen(false);

  }
  return (

    <>
      <Toolbar setAddingForm={setAddingForm} />
      <div className='w-full flex p-3 '  >
        <Table_list columns={columns} dataSource={dataSource} />
      </div>
      <Modal onOk={handleOk} onCancel={handleCancel} title={<div className='w-full text-black font-bold text-2xl border-b border-b-gray-300 pb-1'>Thêm mới thể loại </div>} open={addingForm} width={"50vw"}>
        <AddingCategoryForm />
      </Modal>
      <Modal onOk={handleOk} onCancel={handleCancel} title={<div className='w-full text-black font-bold text-2xl border-b border-b-gray-300 pb-1'>Cập nhật Thể loại</div>} open={isOpen} width={"50vw"}  >
        <Form layout="vertical" className="flex w-full h-full p-2">

          <div className="w-[60%] h-full p-2">
            <Form.Item
              label="Tiêu đề"
              name="Title"
            >
              <Input value={dataupdate != null ? dataupdate.name : ""} />

            </Form.Item>
            <Form.Item
              label="Mô tả"
            >
              <TextArea rows={5} value={dataupdate != null ? dataupdate.description : ""} />
            </Form.Item>
            <Link to="/">Chỉnh sửa nâng cao </Link>
          </div>


          <div className="w-[40%]   py-1 px-2">
            <Button className='mx-5 my-8' onClick={handleButtonClick} icon={<UploadOutlined />}>
              {imageSrc === "" ? `Thêm ảnh` : `Thay đổi`}

            </Button>
            <div className="w-[80%] mx-5 mt-6 aspect-square p-[5px] rounded-[10px] border border-dashed border-gray-300 flex  justify-center items-center">
              <AntImage
                className='rounded-[10px] '
                width={'100%'}
                height={'100%'}
                src={imageSrc || "error"}
                fallback={dataupdate != null ? dataupdate.image : "data:image/png;base64,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"}
              />
            </div>
            <Input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

          </div>
        </Form>
      </Modal >
      <div className='w-[70vw]'>
        <Modal title={<div className='w-full text-black font-bold text-2xl border-b border-b-gray-300 pb-1'> Cập nhật các môn của thể loại</div>} open={false} >
          <Form className='w-full' >
            <Form.Item label="Các môn hiện có">
              <TreeSelect
                treeData={[
                  {
                    title: 'Việt Nam',
                    value: 'vietnam',
                  },
                  {
                    title: 'Anh',
                    value: 'england',
                  },
                  {
                    title: 'Pháp',
                    value: 'france',
                  },
                  {
                    title: 'Mỹ',
                    value: 'usa',
                  },
                ]}
              />
            </Form.Item>
            <Empty />
          </Form>

        </Modal>
      </div>

    </>


  )
}

export default Category