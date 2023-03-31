import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Main = ({ data,handleAddToBookMark }) => {
    const { name, title, img, authorImg, date, readTime } = data
    return (
        <div className='rounded-lg border mb-28 p-7 '>
            <img className='w-full rounded-lg h-96' src={img} alt="programming img" />
            <div className='flex justify-between mt-8 items-center'>
                <div className='flex gap-5'>
                    <img className='w-10 h-10 rounded-full' src={authorImg} alt="programming img" />


                    {/* responsive-solve-kora-lage-soto-divice-er-jonno */}
                    <div>
                        <p className='text-lg font-bold'>{name}</p>
                        <p className='text-lg'>{date}</p>
                    </div>
                </div>
                <p className='text-lg'>{readTime} min read <FontAwesomeIcon className='cursor-pointer' icon={faBookmark} /></p>
            </div>
            <h1 className='text-4xl mr-10 font-bold mt-4'>{title}</h1>
            <h1 className=' underline decoration-2 text-xl mr-10 font-bold hover:divide-violet-700 text-purple-600 mt-5 cursor-pointer' onClick={()=>handleAddToBookMark(readTime)}>Mark as read</h1>
            
        </div>
    );
};

export default Main;