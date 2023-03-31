import React from 'react';

const Main = ({data}) => {
    console.log(data)
    const {name, title,img,authorImg,date,readTime}=data
    return (
        <div>
           <img className='w-96 rounded-s' src={img} alt="no imgge show" />
           <div>
            
           </div>
           <h1></h1>
           <p></p>
        </div>
    );
};

export default Main;