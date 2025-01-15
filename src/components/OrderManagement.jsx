import React, { useState } from 'react';
import MyPageOrder from "../components/MyPageOrder"
import MyPageChange from "../components/MyPageChange"
import MyPageReturn from "../components/MyPageReturn"
import MyPageCancel from "../components/MyPageCancel"
const OrderManagement = () => {
  const [ activeTab, setActiveTab ] = useState("myorder");

  const randerActiveTab = () => {
    if (activeTab === "myorder") {
      return <MyPageOrder></MyPageOrder>;
    } else if (activeTab === "mychange") {
      return <MyPageChange></MyPageChange>;
    } else if (activeTab === "myreturn") {
      return <MyPageReturn></MyPageReturn>;
    } else if (activeTab === "mycancel") {
      return <MyPageCancel></MyPageCancel>;
    }
  };

  const changeMyPageOrder = () => {
    setActiveTab("myorder")
  }
  const changeMyPageChange = () => {
    setActiveTab("mychange")
  }
  const changeMyPageReturn = () => {
    setActiveTab("myreturn")
  }
  const changeMyPageCancel = () => {
    setActiveTab("mycancel")
  }


  return (
    <div classname="ordermanagement">
      <ul className="orderTab">
        <li><button className={ activeTab === "myorder" ? "active" : null} onClick={changeMyPageOrder}>주문</button></li>
        <li><button className={ activeTab === "mychange" ? "active" : null} onClick={changeMyPageChange}>교환</button></li>
        <li><button className={ activeTab === "myreturn" ? "active" : null} onClick={changeMyPageReturn}>반품</button></li>
        <li><button className={ activeTab === "mycancel" ? "active" : null} onClick={changeMyPageCancel}>취소</button></li>
      </ul>
      {randerActiveTab()}
    </div>
  );
};

export default OrderManagement;