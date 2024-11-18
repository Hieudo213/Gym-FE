import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
import { FaRegUser, FaUsers } from 'react-icons/fa'
const formatter = (value) => <CountUp end={value} separator="," />;
const Action1 = () => (
    <Row gutter={16}>
        <Col span={12}>
            <Card bordered={false}>
                <Statistic title="Thành viên" valueStyle={{
                    color: 'blue',
                }} prefix={<FaRegUser color='blue' size={22} />} value={112893} formatter={formatter} />
            </Card>
        </Col>
        <Col span={12}>
            <Card bordered={false}>
                <Statistic title="Hội viên" valueStyle={{
                    color: 'black',
                }} prefix={<FaUsers color='black' size={22} />} value={112893} precision={2} formatter={formatter} />
            </Card>
        </Col>
    </Row>
);
export default Action1;