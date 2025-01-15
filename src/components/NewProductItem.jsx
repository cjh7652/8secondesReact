import React from 'react'
import { womenNewProductItem } from '../data/womenData'
import { menNewProductItem } from '../data/menData'
import './NewProductItem.css'
import { useTabContext } from "../context/TabContext";

function NewProductItem({activeButton}) {
  const { activeTab } = useTabContext();
  
    const images = activeTab === "WOMEN" ? womenNewProductItem[activeButton]  || []  : menNewProductItem[activeButton]  || [] ;
  return (
    <div className='NewProductItem'>
        <div className="imageContainer">
            {images.map((src, idx) => (
                <img key={idx} src={src} alt="신상품"></img>
            ))}
        </div>
    </div>
  )
}

export default NewProductItem