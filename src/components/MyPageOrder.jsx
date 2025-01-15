import React from 'react';

const MyPageOrder = () => {
  return (
    <div classname="mypageorder">
      <div className="orderlist">
        <p>주문 내역이 없습니다.</p>
        <span>주문 내역은 1년까지만 보관됩니다.</span>
      </div>
      <div className="mypageOrderInfo">
        <span>주문 진행 단계 안내</span>
        <ul className='mypageOrderInfoList'>
          <li>
            <span>1</span>
            <p>입금 대기중</p>
            <ul className="mypageOrderInfoTxtBox">
              <li>결제수단 변경</li>
              <li>주문취소</li>
              <li>배송지 변경</li>
            </ul>
          </li>
          <li>
          <span>2</span>
            <p>결제 완료</p>
            <ul className="mypageOrderInfoTxtBox">
              <li>주문 취소</li>
              <li>배송지 변경</li>
            </ul>
          </li>
          <li>
          <span>3</span>
            <p>상품 준비중</p>
            <ul className="mypageOrderInfoTxtBox">
              <li>상품 준비 중</li>
              <li>변경 불가</li>
            </ul>
          </li>
          <li>
          <span>4</span>
            <p>배송 조회</p>
            <ul className="mypageOrderInfoTxtBox">
              <li>배송 조회</li>
            </ul>
          </li>
          <li>
          <span>5</span>
            <p>배송 완료</p>
            <ul className="mypageOrderInfoTxtBox">
              <li>교환/반품 신청(배송완료 후 7일내)</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyPageOrder;