import React, { useEffect, useState } from 'react';

const Aside = ({ redTime,bookmark,count}) => {
    const [time, setTime] = useState(redTime);
    
    useEffect(() => {
        const getReadTime = localStorage.getItem("readTime")
        setTime(getReadTime);
    }, [redTime])



    return (
        <div>
            <div className='border-2 border-indigo-600 py-5 bg-slate-200  px-8 rounded-xl'>
                <h1 className='font-bold text-2xl text-center text-violet-600'>Spent time on read : {time} min</h1>
            </div>



            <div className='mt-6 border-2  py-5 bg-slate-200  px-8 rounded-xl'>
            <h1 className='font-bold text-2xl  '>Bookmarked Blogs: {count}</h1>
                {
                    bookmark.map((singleBookmark,index)=><h3 className='text-xl font-bold bg-white p-5 my-4 mx-7 rounded-xl' key={index}>{singleBookmark}</h3>)
                }
            </div>
        </div>


    );
};

export default Aside;