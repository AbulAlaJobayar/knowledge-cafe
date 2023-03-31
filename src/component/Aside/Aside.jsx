import React from 'react';

const Aside = () => {
    return (
        <>
            <div className='border-2 border-indigo-600 py-5 bg-slate-200  px-8 rounded-xl sticky top-24'>
                <h1 className='font-bold text-2xl text-center text-violet-600'>Spent time on read:{}min</h1>
            </div>  
        </>
    );
};

export default Aside;