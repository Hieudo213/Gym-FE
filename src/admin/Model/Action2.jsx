import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
const formatter = (value) => <CountUp end={value} separator="," />;
const Action2 = () => (
    <Row gutter={16}>
        <Col span={12}>
            <Card bordered={false}>
                <Statistic
                    title="Thành viên mới"
                    value={81128}
                    formatter={formatter}
                    precision={2}
                    valueStyle={{
                        color: '#3f8600',
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
        <Col span={12}>
            <Card bordered={false}>
                <Statistic
                    title="Doanh số"
                    value={93050}
                    formatter={formatter}
                    precision={2}
                    valueStyle={{
                        color: '#cf1322',
                    }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
    </Row>
);
export default Action2;