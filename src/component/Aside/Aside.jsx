import React, { useEffect, useState } from 'react';

const Aside = ({redTime}) => {

const [time,setTime]=useState(redTime);
useEffect(()=>{
const getReadTime=localStorage.getItem("readTime")
setTime(getReadTime)
},[redTime])
    


    return (
        <>
            <div className='border-2 border-indigo-600 py-5 bg-slate-200  px-8 rounded-xl sticky top-24'>
                <h1 className='font-bold text-2xl text-center text-violet-600'>Spent time on read : {time} min</h1>
            </div> 
            <h1></h1> 
        </>
    );
};

export default Aside;