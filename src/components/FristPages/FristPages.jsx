import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const FristPages = () => {
    const users = useLoaderData()

    return (
        <div className='text-center my-5'>
            <h1 className='text-5xl font-bold'>Total User : {users.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mx-3 md:mx-10'>
                {
                    users.map(user => <User
                        key={user.id}
                        user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default FristPages;