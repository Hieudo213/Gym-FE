import React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { FaWpforms } from 'react-icons/fa6';
import { MdPayment } from 'react-icons/md';
const Step = () => (
    <Steps
        items={[
            {
                title: 'Đăng ký',
                status: 'finish',
                icon: <FaWpforms />,
            },
            {
                title: 'Trả phí',
                status: 'finish',
                icon: <MdPayment />,
            },
            {
                title: 'Xác minh',
                status: 'process',
                icon: <LoadingOutlined />,
            },
            {
                title: 'Thành công',
                status: 'wait',
                icon: <SmileOutlined />,
            },
        ]}
    />
);
export default Step;