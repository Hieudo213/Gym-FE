import React, { useEffect, useState } from 'react';
import Toolbar from './Model/Toolbar';
import Table_list from './Model/Table_list';
import { Table, Avatar, Button, Divider, List, Modal, Skeleton, Image } from 'antd'


export const Room = () => {

    return (
        <>
            <Toolbar />
            <div className='w-full flex p-3'  >
                <Table_list />
            </div>

        </>
    );
};
export default Room;
