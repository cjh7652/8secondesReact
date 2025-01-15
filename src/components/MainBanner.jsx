import React, {useState, useEffect} from 'react'
import './MainBanner.css'
import { Link } from "react-router-dom";
import { womenMainBanner, womenMinBanner, } from '../data/womenData.js'; 
import {  menMainBanner, menMinBanner } from '../data/menData.js'; 
import { useTabContext } from "../context/TabContext";

const MainBanner = () => {
    const { activeTab } = useTabContext();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mencurrentSlide, setMencurrentSlide] = useState(0);

    useEffect(()=>{
        const interval = setInterval (()=>{
            setCurrentSlide((prev) => (prev+1) % womenMainBanner.length)
        },5000);

        return () => clearInterval(interval);
    },[])

    useEffect(()=>{
        const interval = setInterval(()=>{
            setMencurrentSlide((prev) => (prev+1) % menMainBanner.length)
        },5000);

        return () => clearInterval(interval);
    },[])
  return (
    <div className='mainBanner'>
        <div className="mainBannercontainer">
        <div className="mainBannerSlide">
            <Link to="/outerwear">
            <img src={activeTab === "WOMEN" ? womenMainBanner[currentSlide].src : menMainBanner[mencurrentSlide].src} alt="" />
            </Link>
        </div>
        <div className="mainMinBanner">
            <div className="mainMinBannerText">
                <h2>{activeTab === "WOMEN" ? "겨울을 맞이하기 전," : "새하얀 겨울에,"}</h2>
                <h2>{activeTab === "WOMEN" ? "아우터 채비하기" : "포근한 니트와"}</h2>
                <p><Link to="/outerwear">◂ {activeTab === "WOMEN" ? "#코트부터 다운점퍼까지" : "#니트부터 가디건 총집합"}</Link></p>
            </div>
            <div className="mainMinBullet">
                <ul className='mainMinBulletList'>
                    {womenMainBanner.map((item, idx)=>(
                        <li key={item.id} style={{backgroundColor: idx === currentSlide ? "#2b2b2b" : "#e6e6e6"}}></li>
                    ))}
                </ul>
            </div>
            <div className="mainMinBannerImg">
                {activeTab === "WOMEN" ? womenMinBanner.map(item =>(
               <Link to="/outerwear"><img key={item.id} src={item.src} alt={item.alt}></img></Link>
             )) : menMinBanner.map((item)=>(
                <Link to='/outerwear'><img key={item.id} src={item.src} alt={item.alt}></img></Link>
             ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default MainBanner