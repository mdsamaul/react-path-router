import React from 'react';
import Spinnerimg from '/loading-loading-forever.gif';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <img src={Spinnerimg} alt="" />
        </div>
    );
};

export default Spinner;