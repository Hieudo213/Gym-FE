import { Alert, Button, Checkbox, Form, Modal, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import Toolbar from './Model/Toolbar';
import Table_list from './Model/Table_list';
import { getAllClub } from '../services/publicApi';
import AddingClubForm from './Forms/AddingClubForm';
import { deleteClubById } from '../services/privateApi';
import UpdateClubForm from './Forms/UpdateClubForm';

function ClubAdmin() {
    const [data, setData] = useState([]);
    const [addingForm, setAddingForm] = useState(false);
    const [updateForm, setUpdateForm] = useState(false);
    const [id, setId] = useState();
    const [warningModal, setWarningModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [checkboxMain, setCheckboxMain] = useState(false);
    const [checkedRows, setCheckedRows] = useState([]);
    const [notify, setNotify] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllClub();
                setData(result);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const dataSource = data?.result?.map((item) => ({
        key: item.id.toString(),
        stt: item.id,
        title: item.title,
        description: item.description,
        phone: item.phone,
        schedule: item.schedule,
        address: item.address,
    }))

    const handleMainCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        setCheckboxMain(isChecked);
        if (isChecked) {
            setCheckedRows(dataSource.map((row) => row.key));
        } else {
            setCheckedRows([]);
        }
    };

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
            title: 'Tên câu lạc bộ',
            dataIndex: 'title',
            key: 'title',
            width: 300,
            render: (text, record) => (
                <span
                    className="hover:text-blue-500 cursor-pointer"
                    onClick={()=>{
                        setId(record.stt)
                        setUpdateForm(true)
                    }}
                >
                    {text}
                </span>
            )
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
            width: 300,
            render: (text) => (
                <div style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 3,
                    textOverflow: 'ellipsis',
                }}>
                    {text}
                </div>
            )
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
            width: 200,
        },
        {
            title: 'Lịch mở cửa',
            dataIndex: 'schedule',
            key: 'schedule',
            width: 400,

        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            width: 400,

        },
    ];

    const handleDelete = async () => {
        let id = checkedRows[0]
        await deleteClubById(id);
        setNotify("Xoá thành công.")
        setInterval(() => {
            window.location.reload();
        }, 3000)

    }

    return (
        <div className='w-full h-full overflow-y-auto'>
            <Toolbar setAddingForm={setAddingForm} setConfirmModal={setConfirmModal} setWarningModal={setWarningModal} rows={checkedRows} />
            <div className='w-full flex p-3 overflow-scroll'  >
                <Table_list columns={columns} dataSource={dataSource} scroll={{ x: 1200 }} />
            </div>
            <Modal width={650} title="Thêm mới câu lạc bộ" open={addingForm} onOk={false} onCancel={() => setAddingForm(false)} footer={null}>
                <AddingClubForm setAddingForm={setAddingForm} />
            </Modal>
            <Modal width={650} title="Cảnh báo" open={warningModal} onOk={false} onCancel={() => setWarningModal(false)} footer={null}>
                <Alert
                    message="Xoá không thành công"
                    description="Vui lòng chọn duy nhất một item để xoá."
                    type="error"
                    showIcon
                />
            </Modal>
            <Modal width={650} title="Xác nhận" open={confirmModal} onOk={false} onCancel={() => setConfirmModal(false)} footer={null}>
                {notify && <Alert message={notify} type="success" showIcon />}
                <Alert
                    showIcon
                    description="Bạn có chắc chắn xoá item này không ?"
                    type="info"
                    action={
                        <Space direction="vertical">
                            <Button onClick={handleDelete} size="medium" type="primary">
                                Xác nhận
                            </Button>
                        </Space>
                    }
                />
            </Modal>
            <Modal width={650} title="Cập nhật câu lạc bộ" open={updateForm} onOk={false} onCancel={() => setAddingForm(false)} footer={null}>
                <UpdateClubForm id={id}/>
            </Modal>
        </div>
    )
}

export default ClubAdmin