import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {

    const { id, name, email } = user;
    return (
        <div className='border w-full h-32 border-t-slate-500 rounded-md py-5 my-3 relative'>
            <h1>name : {name}</h1>
            <h3>Email ; {email}</h3>
            <div className='absolute bottom-0 left-0 w-full right-0 bg-slate-300 cursor-pointer rounded-b-lg py-2 hover:bg-slate-100 transition-all'>
                <Link to={`/user/${id}`}><button>Show Details</button></Link>
            </div>
        </div>
    );
};

export default User;