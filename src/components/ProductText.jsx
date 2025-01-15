import React from 'react'
import { FaPlus } from "react-icons/fa6";
import './ProductText.css'
export const ProductText = ({title, description}) => {
  return (
    <div className='productText'>
        <h3>{title}</h3>
        <p>{description}</p>
        <FaPlus className='icon'></FaPlus>
    </div>
  )
}

export default ProductText
