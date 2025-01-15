import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";

const GuestOrder = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userOrderNumber, setUserOrderNumber] = useState("");

  const [messages, setMessages] = useState({
    userName : { text: "", color: "" },
    userPhone : { text: "", color: "" },
    userOrderNumber : { text: "", color: "" },
  });
  const handleMessageChange = (key, text, color) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [key]: { text, color },
    }));
  };

  const nameRule=/^[a-zA-Z가-힣]{1,20}$/;
  const phoneRule =/^(?:(010)|(01[1|6|7|8|9]))\d{3,4}(\d{4})$/;
  const orderNumberRule = /^\d+$/;

 /*  const phoneRule = /^\d{10,11}$/;
  const orderNumberRule = /^\d+$/; */

/*   const valueRule = () => {
    if (!nameRule.test(userName)) {
      return false;
    }

    if (!phoneRule.test(userPhone)) {
      return false;
    }

    if (!orderNumberRule.test(userOrderNumber)) {
      return false;
    }
    return true;
  }; */

  const handleName = (e) => {
    const newValue = e.target.value;
    setUserName(newValue);

   if(nameRule.test(newValue)) {
      handleMessageChange('userName', '', '')
    } else if(newValue==="") {
      handleMessageChange('userName', '이름을 입력해 주세요.', 'error-color')
    } else{
      handleMessageChange('userName', '이름은 숫자와 특수문자를 입력할 수 없습니다.', 'error-color')
      setUserName("");
    }
  };

  const handlePhone = (e) => {
    const newValue = e.target.value;
    setUserPhone(newValue);

    if(phoneRule.test(newValue)) {
      handleMessageChange('userPhone', '', '')
    } else if(newValue === ""){
      handleMessageChange('userPhone', '휴대폰 번호를 입력해 주세요.', 'error-color')
    } else {
      handleMessageChange('userPhone', '숫자만 입력해 주세요.', 'error-color')
      setUserPhone("");
    }
  }

  const handleOrderNumber = (e) => {
    const newValue = e.target.value;
    setUserOrderNumber(newValue);

    if(orderNumberRule.test(newValue)){
      handleMessageChange('userOrderNumber', '', '')
    }else if(newValue === ""){
      handleMessageChange('userOrderNumber', '주문번호를 입력해 주세요.', 'error-color')
    }else{
      handleMessageChange('userOrderNumber', '숫자만 입력해 주세요.', 'error-color')
      setUserOrderNumber("");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   /*  if (valueRule()) {
      const formData = {
        name: userName,
        phone: userPhone,
        orderNumber: userOrderNumber,
      };
      console.log("서버로 보낼 데이터 :", formData);
      alert("주문/배송 조회 요청이 완료되었습니다.");
    } */
   setUserName("");
   setUserPhone("");
   setUserOrderNumber("");
   
   alert("입력된 주문번호로 조회를 할 수 없습니다.")
  };

  return (
    <div className="guestOrder">
      <h2>비회원</h2>
      <form action="" className="guestFiled" onSubmit={handleSubmit}>
        <div className="guestOrderInput">
          <input
            type="text"
            placeholder="이름"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            onBlur={handleName}
            
          />
          <span style={{fontSize:"14px", marginBottom:"5px"}} className={`mes-style ${messages.userName.color}`}>{messages.userName.text}</span>
          <input
            type="text"
            placeholder="휴대폰 번호('-'없이 입력)"
            onChange={(e) => setUserPhone(e.target.value)}
            value={userPhone}
            onBlur={handlePhone}
          />
          <span style={{fontSize:"14px", marginBottom:"5px"}} className={`mes-style ${messages.userPhone.color}`}>{messages.userPhone.text}</span>
          <input
            type="text"
            placeholder="주문번호"
            onChange={(e) => setUserOrderNumber(e.target.value)}
            value={userOrderNumber}
            onBlur={handleOrderNumber}
          />
           <span style={{fontSize:"14px"}} className={`mes-style ${messages.userOrderNumber.color}`}>{messages.userOrderNumber.text}</span>
        </div>
        <div className="guestOrderBtn">
          <button type="submit">주문/배송조회</button>
        </div>
      </form>
      <div className="guestOrderInfo">
        <p>
          <IoCallOutline></IoCallOutline>
        </p>
        <p>1599-0007</p>
        <p> 평일(월~금) 09:00~18:00 (주말 및 공휴일 휴무)</p>
      </div>
    </div>
  );
};

export default GuestOrder;
