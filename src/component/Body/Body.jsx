import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';


const Body = ({ handleAddToBookMark, redTime }) => {
    const [titles,setTitles] = useState ([])
    const [count, setCount] = useState(0)
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('../../../public/feckData.json')
            .then(res => res.json())
            .then(data => setDatas((data)))
    }, [])
const handleAddtoTitle= (bookmark)=>{
    
    setTitles ([...titles,bookmark]);
    setCount(count + 1) ;
}

    return (
        <div className='flex-none md:flex justify-around m-10'>
            <div>
                {
                    datas.map(data => <Main data={data} key={data.id} handleAddToBookMark={handleAddToBookMark} handleAddtoTitle={handleAddtoTitle}></Main>)
                }
            </div>
            <div>
                <Aside redTime={redTime} bookmark={titles} count={count}></Aside>
            </div>
        </div>
    );
};

export default Body;