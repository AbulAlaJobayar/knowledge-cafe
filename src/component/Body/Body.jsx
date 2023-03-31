import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';


const Body = () => {
    const[datas,setDatas]=useState([]);
    useEffect(()=>{
        fetch('../../../public/feckData/feckData.json')
        .then(res=>res.json())
        .then(data=>setDatas((data)))
    },[])

    return (
        <div>
            {
                datas.map(data=><Main data={data} key={data.id}></Main>)
            }
            
           <Aside></Aside>
        </div>
    );
};

export default Body;