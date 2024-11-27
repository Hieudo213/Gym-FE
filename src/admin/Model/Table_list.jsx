import { Button, Image, Modal, Table } from 'antd';
import React from 'react';



function Table_list({ dataSource, columns }) { // Destructure props
 
    const [loading, setLoading] = React.useState(true);
    

    return (

        <>
            <div className='mt-2 w-full h-[70vh] overflow-scroll overflow-x-scroll'>
                <Table className='w-full' dataSource={dataSource} columns={columns} pagination={false} />
            </div>
        </>
    );
}

export default Table_list;
