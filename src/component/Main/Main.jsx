import React from 'react';

const Main = ({data}) => {
    console.log(data)
    const {name, title,img,authorImg,date,readTime}=data
    return (
        <div className='container pl-10'>
           <img className='w-96 rounded-s' src={img} alt="programming img" />
           <div>
           <img className='w-10 h-10 rounded-full' src={authorImg} alt="programming img" />
           </div>
           <h1></h1>
           <p></p>
        </div>
    );
};

export default Main;