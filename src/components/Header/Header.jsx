import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import NavItems from '../NavItems/NavItems';

const Header = () => {
    const headerNabar = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "About",
            path: "/about"
        },
        {
            id: 3,
            name: "Products",
            path: "/products"
        },
        {
            id: 4,
            name: "Services",
            path: "/services"
        },
        {
            id: 5,
            name: "Contact",
            path: "/contact"
        }
    ];



    const [open, setOpen] = useState(false);

    return (
        <div className='md:flex justify-between items-center h-20 bg-slate-200 px-10'>
            <div className='flex justify-between items-center h-20 w-full'>
                <div>
                    <h1 className='py-8 px-10 cursor-pointer font-bold text-xl hover:text-blue-800 transition-all capitalize'>samaul</h1>
                </div>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                        {
                            open == true ? <XMarkIcon className='h-6 w-6 cursor-pointer text-black-500'></XMarkIcon> : <Bars3Icon className='h-6 w-6 cursor-pointer text-black-500'></Bars3Icon>
                        }
                    </span>

                </div>
            </div>
            <div className={`absolute md:static duration-700 w-full md:flex md:justify-end left-0  ${open ? 'top-20' : '-top-72'}`}>
                {
                    headerNabar.map(item => <NavItems key={item.id} item={item}></NavItems>)

                }

            </div>

        </div>
    );
};

export default Header;