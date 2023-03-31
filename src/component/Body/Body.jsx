import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';


const Body = ({handleAddToBookMark,redTime}) => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('../../../public/feckData/feckData.json')
            .then(res => res.json())
            .then(data => setDatas((data)))
    }, [])

    return (
        <div className='flex-none md:flex justify-around m-10'>
            <div>
                {
                    datas.map(data => <Main data={data} key={data.id} handleAddToBookMark={handleAddToBookMark} ></Main>)
                }
            </div>
            <div>
                <Aside redTime={redTime}></Aside>
            </div>
        </div>
    );
};

export default Body;