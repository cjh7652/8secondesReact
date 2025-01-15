import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTabContext } from "../context/TabContext";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { useLoginContext } from '../context/LoginContext.js';

const Header = () => {
  const { activeTab, setActiveTab } = useTabContext();
  const isActiveColor = { color: "#2b2b2b" };
  const { isLogin, setIsLogin } = useLoginContext();

  return (
    <div className="headerWrap">
      <div className="header">
        <ul className="logo">
          <li><h2><Link to="/">8Seconds</Link></h2></li>
        </ul>
        <ul className="uniPick">
          <li>
            <button
              onClick={() => setActiveTab("WOMEN")}
              style={activeTab === "WOMEN" ? isActiveColor : null}
            >
              WOMEN
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("MEN")}
              style={activeTab === "MEN" ? isActiveColor : null}
            >
              MEN
            </button>
          </li>
        </ul>
        <ul className="myOption">
          <li>
            {
             isLogin ? <Link to="/mypage">MY PAGE</Link> : <Link to="/login">LOGIN</Link>
            }
            </li>
            <li>
              {
                isLogin ? <Link to="/login"><button onClick={()=>setIsLogin(false)}>LOGOUT</button></Link> : <Link to="/signup">SIGNUP</Link>
              }
              </li>
          <li><FaSearch /></li>
          <li><IoBag /></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
