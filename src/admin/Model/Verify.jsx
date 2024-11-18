import { Avatar, Button, Divider, Image, List, Modal, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
const Verify = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body.results]);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };
    useEffect(() => {
        loadMoreData();
    }, []);
    return (

        <>
            <div
                id="scrollableDiv" className='w-full'
                style={{

                    height: 400,
                    overflow: 'auto',
                    padding: '0 16px',

                }}
            >
                <InfiniteScroll
                    dataLength={data.length}
                    next={loadMoreData}
                    hasMore={data.length < 50}
                    loader={
                        <Skeleton
                            avatar
                            paragraph={{
                                rows: 1,
                            }}
                            active
                        />
                    }
                    endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                    scrollableTarget="scrollableDiv"
                >
                    <List
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item key={item.email}>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.picture.large} />}
                                    title={<a href="https://ant.design">{item.name.last}</a>}
                                    description={item.email}
                                />

                                <Button type="primary" onClick={() => setIsOpen(true)}>Xác minh</Button>
                            </List.Item>
                        )}
                    />
                </InfiniteScroll>
            </div>
            <Modal
                centered
                title="Xác nhận thông tin gói tập"
                open={isOpen} onCancel={() => setIsOpen(false)}
                okText="My Custom OK"
                cancelText="My Custom Cancel"
                width={600}
                footer={
                    <div className="text-center">
                        <Button onClick={() => setIsOpen(false)} className="w-[200px] mr-2">
                            Không hợp lệ
                        </Button>
                        <Button type="primary" danger className="w-[200px]">
                            Xác nhận
                        </Button>
                    </div>
                }>
                <div className="h-[350px] flex justify-center items-center gap-2">
                    <div className="w-[50%] flex justify-end">
                        <Image.PreviewGroup
                        >
                            <Image
                                width={200}
                                src="https://phanmemtinhluong.com/wp-content/uploads/2021/06/image-15-1024x879.png"
                            />
                        </Image.PreviewGroup>
                    </div>
                    <div className="flex-col flex w-[50%] p-3">
                        <div className='m-1'>Tài khoản : <span>Đạt nghiêm túc</span> </div>
                        <div className='m-1'>Loại hình : <span>Gym</span> </div>
                        <div className='m-1'>Gói : <span>Gold</span> </div>
                        <div className='m-1'>Thành tiền : <span>12.000.000 vnđ</span> </div>
                    </div>

                </div>
            </Modal>
        </>



    );
};
export default Verify;