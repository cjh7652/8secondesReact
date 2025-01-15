import React from "react";
import { Link } from "react-router-dom";
import { useTabContext } from "../context/TabContext";
import "./NavBar.css";

const NavBar = () => {
  const { activeTab } = useTabContext();

  return (
    <div className="NavbarWrap">
      <div className="Navbar">
        <ul className="NavbarList">
          {/* Link 컴포넌트는 상태 변경 없이 링크를 처리 */}
          <li><Link to="/outerwear">Outerwear</Link></li>
          <li>
            <Link to={activeTab === "MEN" ? "/jacket" : "/womentop"}>
              {activeTab === "MEN" ? "Jacket" : "Top"}
            </Link>
          </li>
          <li>
            <Link to={activeTab === "MEN" ? "/mentop" : "/dress"}>
              {activeTab === "MEN" ? "Top" : "Dress"}
            </Link>
          </li>
          <li><Link to="/bottoms">Bottoms</Link></li>
          <li><Link to="/shoes">Shoes</Link></li>
          <li><Link to="/underwear">Underwear</Link></li>
          <li><Link to="/accessories">Accessories</Link></li>
          <li><Link to="/bag">Bag</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
