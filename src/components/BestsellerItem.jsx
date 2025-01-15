import React, { useRef, useState } from 'react';
import { womenBestSeller } from '../data/womenData';
import { menBestSeller } from '../data/menData';
import './BestsellerItem.css';
import { useTabContext } from "../context/TabContext";

const BestsellerItem = ({ activeButton }) => {
  const { activeTab } = useTabContext();
  const images =
  activeTab === 'WOMEN' ? womenBestSeller[activeButton] || [] : menBestSeller[activeButton] || [];
  const slideRef = useRef(null);
  const [mouseStartX, setMouseStartX] = useState(0); // 마우스 시작 위치
  const [scrollStartX, setScrollStartX] = useState(0); // 스크롤 시작 위치

  const handleMouseEnter = (e) => {
    const slider = slideRef.current;
    setMouseStartX(e.pageX); 
    setScrollStartX(slider.scrollLeft); 
  };

  const handleMouseMove = (e) => {
    if (mouseStartX === 0) return; 

    const slider = slideRef.current;
    const deltaX = e.pageX - mouseStartX; 
    slider.scrollLeft = scrollStartX - deltaX; 
  };

  const handleMouseLeave = () => {
    setMouseStartX(0);
  };

  return (
    <div className="bestsellerItemWrap">
      <div
        className="bestsellerItem"
        ref={slideRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          cursor: 'grab',
          overflowX: 'hidden', // 스크롤바 숨김
          display: 'flex',
        }}
      >
        {images.map((item, idx) => (
          <div key={idx} className="bestsellerSlide">
            <div className="bestsellerImgWrap">
              <img src={item.src} alt={item.alt} />
              <div className="ranking">{idx + 1}</div>
            </div>
            <p className="itemName">{item.name}</p>
            <p className="itemPrice">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestsellerItem;
