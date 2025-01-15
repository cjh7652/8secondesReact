import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerWrap">
        <div className="footerTopWrap">
            <ul className="footerTop1">
                <li><a href='https://www.samsungfashion.com/main.do?LANG=KO'>회사소개</a></li>
                <li><Link to="/service">이용약관</Link></li>
                <li className='footerColorPonint'>개인정보처리방침</li>
                <li>멤버십안내</li>
                <li>고객센터</li>
                <li><Link to="/notice">매장찾기</Link></li>
                <li><Link to="/notice">공지사항</Link></li>
                <li><Link to="/notice">단체주문</Link></li>
            </ul>
            <ul className="footerTop2">
                <li><Link to="/notice">제휴문의</Link></li>
                <li><a href='https://www.ssfshop.com/public/helpdesk/com/comCptalLendInfo'>입점대여프로그램</a></li>
            </ul>
        </div>
        </div>
        <div className="footerBtWrap">
            <p>삼성물산 (주) 패션부문</p>
            <ul className="footerBt2">
                <li>
                    <ul className='footerBtInfo'>
                        <li>주소 : 서울특별시 강남구 남부순환로 2806&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                        <li>대표 : 오세철 외 2명&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                        <li>사업자 등록번호 : 101-85-43600&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                        <li>통신판매업 신고번호 : 제 2015-서울강남-02894</li>
                    </ul>
                </li>
                <li>KG모빌리언스 구매안전 서비스 서비스 가입 사실 확인 고객님의 안전 거래를 위해 현금 등으로 5만원이상 결제 시 저희 쇼핑몰에서 가입한 구매안전 서비스를 이용하실 수 있습니다.</li>
                <li>대표전화 1599-0007(전국) 080-700-1472(수신자부담)</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer