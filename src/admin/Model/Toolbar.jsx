import { Button } from 'antd'
import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { BsFilterLeft, BsFilterRight } from 'react-icons/bs'
import { CiFilter } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'

function Toolbar({ setAddingForm, setWarningModal, setConfirmModal, rows }) {

    const handleDelete = () => {
        if (rows?.length !== 1) {
            setWarningModal(true)
            return;
        }
        setConfirmModal(true)
    }

    return (
        <div className="w-full h-[3rem] px-2 flex justify-between items-center bg-gray-30 border-b border-gray-100" >
            <div className='flex justify-center items-center'>
                <Button onClick={() => setAddingForm(true)} icon={<BiPlus size={20} />} type="primary">
                    Thêm mới
                </Button>
                <Button onClick={handleDelete} disabled={!rows?.length > 0} style={{ marginLeft: '10px' }} icon={<MdDeleteOutline size={20} />}></Button>
            </div>
            <div className='flex justify-center items-center'>
                <Button type='text' icon={<CiFilter size={18} />}></Button>
                <Button type='text' icon={<BsFilterLeft size={18} />}></Button>
                <Button type='text' icon={<BsFilterRight size={18} />}></Button>
            </div>
        </div>
    )
}

export default Toolbar