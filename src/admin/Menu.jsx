import React, {Fragment} from 'react'
import {Menu} from 'antd';
import {icon} from '@fortawesome/fontawesome-svg-core';
import {IoMdHome} from 'react-icons/io';
import {CgGym} from 'react-icons/cg';
import {FaRegCommentDots, FaUsers} from 'react-icons/fa6';
import {IoNotificationsSharp} from 'react-icons/io5';
import {GiWeightLiftingUp} from 'react-icons/gi';
import {CiCreditCard2} from 'react-icons/ci';
import {FaMoneyCheckAlt} from 'react-icons/fa';
import {PiUsersFourBold} from 'react-icons/pi';
import {useNavigate} from 'react-router-dom';
import {MdOutlineSportsGymnastics} from 'react-icons/md';
import {BiSolidCategoryAlt} from 'react-icons/bi';


function MenuComponent() {
    const navigate = useNavigate();
    const items = [
        {
            key: 'home',
            label: 'Home',
            icon: <IoMdHome/>,
            onClick: () => {
                navigate('/admin')
            }
        },
        {
            type: 'divider',
        },
        {
            key: 'function',
            label: 'Chức năng',
            type: 'group',
            children: [
                {
                    key: 'room',
                    label: 'Quản lý phòng tập',
                    children: [
                        {
                            key: '2',
                            label: 'Phòng tập',
                            icon: <GiWeightLiftingUp/>,
                            onClick: () => {
                                navigate('/admin/room')
                            }
                        },
                        {
                            key: '3',
                            label: 'Trang thiết bị',
                            icon: <CgGym/>,
                            onClick: () => {
                                navigate('/admin/equipment')
                            }
                        },
                        {
                            key: '4',
                            label: 'Nhân viên',
                            icon: <FaUsers/>,
                            onClick: () => {
                                navigate('/admin/employee')
                            }
                        },
                        {
                            key: '5',
                            label: 'Phản hồi của hội viên',
                            icon: <IoNotificationsSharp/>,
                            onClick: () => {
                                navigate('/admin/respond/member')
                            }
                        },
                        {
                            key: '6',
                            label: 'Thể loại',
                            icon: <BiSolidCategoryAlt/>,
                            onClick: () => {
                                navigate('/admin/category')
                            }
                        },
                        {
                            key: '7',
                            label: 'Môn học',
                            icon: <MdOutlineSportsGymnastics/>,
                            onClick: () => {
                                navigate('/admin/gym')
                            }
                        },
                    ],
                },
                {
                    key: 'member',
                    label: 'Quản lý hội viên',

                    children: [
                        {
                            key: '8',
                            label: 'Hội viên',
                            icon: <PiUsersFourBold/>,
                            onClick: () => {
                                navigate('/admin/member')
                            }
                        },
                        {
                            key: '9',
                            label: 'Lịch sử giao dịch',
                            icon: <FaMoneyCheckAlt/>,
                            onClick: () => {
                                navigate('/admin/transaction')
                            }
                        },
                        {
                            key: '10',
                            label: 'Phản hồi',
                            icon: <FaRegCommentDots/>,
                            onClick: () => {
                                navigate('/admin/response/all')
                            }
                        }
                    ],
                },
                {
                    key: 'packages',
                    label: 'Quản lý gói tập',

                    children: [
                        {
                            key: '11',
                            label: 'Các gói tập',
                            icon: <CiCreditCard2/>,
                            onClick: () => {
                                navigate('/admin/packages')
                            }
                        },
                    ],
                },
            ],
        },

    ];
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <div className='w-full h-full '>
            <div className='w-full'>
                <h1 className="text-xl mb-2 font-bold ">
                    Hệ Thống
                </h1>
            </div>
            <div className='w-full'>
                <Menu

                    style={{
                        width: '100%',
                        border: 'none'
                    }}
                    defaultSelectedKeys={['home']}
                    defaultOpenKeys={[
                        'room',
                        'member',
                        'packages']}
                    mode="inline"
                    items={items}
                />
            </div>
        </div>
    )
}

export default MenuComponent