import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const NavItems = ({ item }) => {

    const { name, path } = item;
    return (
        <div className='text-center w-full md:w-auto bg-slate-500 md:bg-slate-200 md:py-5 px-5'>
            <li className="py-3 px-10 list-none hover:text-white cursor-pointer md:hover:text-blue-500 font-semibold transition-all md:m-0 md:p-0"> <ActiveLink to={path}>{name}</ActiveLink></li>

        </div>
    );
};

export default NavItems;