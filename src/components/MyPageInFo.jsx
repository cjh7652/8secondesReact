import React from 'react';

const MyPageInFo = ({setIsClickLevel}) => {
  return (
    <div className='mypageInfo'>
      <ul className="mypageInfolist">
        <li>
          <div onClick={()=>setIsClickLevel(false)} className="level">
            <img src={process.env.PUBLIC_URL + "/image/mypageicon.png"} alt="" />
            <span className='mypageSpan'>Welcome 등급</span>
          </div>
        </li>
        <li>
          <div className="coupon">
            <p>쿠폰</p>
            <span className='mypageSpan'>0 장</span>
          </div>
          </li>
        <li>
        <div className="point">
            <p>멤버십 포인트</p>
            <span className='mypageSpan'>0 P</span>
          </div>
        </li>
        <li>
        <div className="coin">
            <p>퍼플 코인</p>
            <span className='mypageSpan'>0 C</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MyPageInFo;