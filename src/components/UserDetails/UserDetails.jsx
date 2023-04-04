import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {

    const userDataDetails = useLoaderData();
    const { name, email, company, phone } = userDataDetails;

    const navigate = useNavigate()
    const handlerBack = () => {
        navigate(-1);
    }

    return (
        <div className='flex items-center w-full h-screen'>
            <div className='flex justify-center items-center mx-auto text-center w-[60%] h-[60%] border border-red-500'>
                <div >
                    <h2>name: {name}</h2>
                    <h4>Email : {email}</h4>
                    <p>Phone: {phone}</p>
                    <h5>Company Name : {company.name}</h5>
                    <h5>Company CatchPhrase : {company.catchPhrase}</h5>
                    <div className='py-5'>
                        <button onClick={handlerBack}>Back</button>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default UserDetails;