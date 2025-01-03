import { Table } from 'antd';
import React from 'react';

function Table_list({ dataSource, columns, scroll }) {
    return (
        <>
            <div className='mt-2 w-full'>
                <Table
                    className='h-[600px]'
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{
                        position: ['bottomRight'],
                        pageSize: 5,
                    }}
                    scroll={scroll}
                />
            </div>
        </>
    );
}

export default Table_list;
