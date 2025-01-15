import React from 'react';

const MyPageLevel = () => {
  return (
    <div className='mypageInfo'>
    <ul className="mypageInfolist">
      <li>
        <div  className="calculationPeriod">
          <p>산정 기간</p>
          <span className='mypageSpan'>2023.12.21</span>
          <span className='mypageSpan'>~2024.12.20</span>
        </div>
      </li>
      <li>
        <div className="apply">
          <p>등급적용일</p>
          <span className='mypageSpan'>2024.01.01</span>
        </div>
        </li>
      <li>
      <div className="amount">
          <p>구매금액</p>
          <span className='mypageSpan'>0 원</span>
        </div>
      </li>
      <li>
      <div className="mypageIconBox" style={{justifyContent:"center"}}>
      <img src={process.env.PUBLIC_URL + "/image/mypageicon2.png"} alt="" />
        </div>
      </li>
    </ul>
  </div>
  );
};

export default MyPageLevel;