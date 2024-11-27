import { Button, Drawer } from 'antd'
import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { BsFilterLeft, BsFilterRight } from 'react-icons/bs'
import { CiFilter } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'
import Form_room from './Form_room'

function Toolbar() {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const showLoading = () => {
        setOpen(true);
        setLoading(true);

        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setLoading(false);
        }, 200);
    };
    return (
        <>

            <div className="w-full h-[3rem] px-2 flex justify-between items-center bg-gray-30 border-b border-gray-100" >
                <div className='flex justify-center items-center'>
                    <Button onClick={showLoading} icon={<BiPlus size={20} />} type="primary">
                        Thêm mới
                    </Button>
                    <Button style={{ marginLeft: '10px' }} icon={<MdDeleteOutline size={20} />}></Button>
                </div>
                <div className='flex justify-center items-center'>
                    <Button type='text' icon={<CiFilter size={18} />}></Button>
                    <Button type='text' icon={<BsFilterLeft size={18} />}></Button>
                    <Button type='text' icon={<BsFilterRight size={18} />}></Button>

                </div>
            </div>
            <Drawer
                width="50vw"
                closable
                destroyOnClose
                title={<p>Thêm phòng tập</p>}
                placement="right"
                open={open}
                loading={loading}
                onClose={() => setOpen(false)}
            >

                <Form_room />

            </Drawer>
        </>


    )
}

export default Toolbar