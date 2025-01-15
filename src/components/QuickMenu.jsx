import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './QuickMenu.css';

const QuickMenu = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className='quickmenu'>
      <ul className="quickmenuUl">
        <li className='quickmenuLogo'>
          <button className={isSubMenuOpen ? 'active' : ''} onClick={handleButtonClick}>88</button>
        </li>
        <li className='quickmenuSub'>
          <ul 
            className={isSubMenuOpen ? 'slideIn' : 'slideOut'}
            style={{ maxHeight: isSubMenuOpen ? '200px' : '0' }}
          >
            <li><Link to="/newproduct">New Product</Link></li>
            <li><Link to="/bestseller">Best Seller</Link></li>
            <li><Link to="/notice">Notice</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default QuickMenu;
