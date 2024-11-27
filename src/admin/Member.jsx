import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import Cart_user from '../components/Cart_user';
function Member() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo');
        setUsers(response.data.results);



      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return (<Flex align="center" gap="middle">

    <Spin className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 48,
          }}
          spin
        />
      }
    />
  </Flex>);
  if (error) return <p className='mx-5 text-red-500'>Error: {error} .Please check again!!!</p>;

  return (
    <>Member</>
  )
}

export default Member