import React, {  useState } from 'react';
import "./Home.css"
import { fakeData } from './fakeData';
import StockDetail from '../StockDetail/StockDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [data, setData]=useState(fakeData);
    const [datas, setDatas]=useState(false);
    console.log(datas)
    const handleClick=()=>{
        const x=data.sort((a,b)=>b.strike-a.strike);
        setDatas(x)
    }

    const handleClicks=()=>{
        const x=data.sort((a,b)=>b.strike-a.strike);
        setDatas(x)
    }
   
    return (
        <div className="container">
            <div className="smallContainer">
                <div id="boxContent" className="boxContent">
                OI <br/> charge %
                </div>
                <div className="boxContent2">
                    ol-lakh
                </div>
                <div className="boxContent2">
                    LTP (chg%)
                </div>
                {datas?<div className="boxContent3" id="icons" style={{cursor:"pointer"}} onClick={handleClick}>
                    <p>strike</p>  <p><FontAwesomeIcon icon={faSortDown} /></p>
                </div>:<div id="icons" className="boxContent3" style={{cursor:"pointer"}} onClick={handleClicks}>
                <p>strike</p>  <p><FontAwesomeIcon icon={faSortUp} /></p>
                </div>}
                <div className="boxContent3">
                    IV
                </div>
                <div className="boxContent2">
                LTP (chg%)
                </div>
                <div className="boxContent2">
                ol-lakh
                </div>
                <div className="boxContent">
                OI charge %
                </div>
            </div>
            {
                data.map(data=><StockDetail data={data} key={data.id} ></StockDetail>)
            }
        </div>
    );
};

export default Home;