import React, { useState } from 'react';
import ProductText from './ProductText';
import ProductBtn from './ProductBtn';
import BestsellerItem from './BestsellerItem';
import { FaPlus } from "react-icons/fa6";
import './Bestseller.css'

const Bestseller = ({ productTxt, buttonList}) => {
  const [activeButton, setActiveButton] = useState('clothes');

  const handleButtonClick = (btnName) => {
    setActiveButton(btnName);
  };

  return (
    <div className='bestseller'>
    <div className="bestsellerWrap">
      <ProductText
        title={productTxt[1].title}
        description={productTxt[1].description}/>
        
      <ProductBtn
        buttonList={buttonList}
        activeButton={activeButton}
        onButtonClick={handleButtonClick}/>

      <FaPlus className='icon'></FaPlus>
    </div>
    <BestsellerItem activeButton={activeButton}></BestsellerItem>
    </div>
  );
};

export default Bestseller;
