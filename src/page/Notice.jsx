import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import GuestOrder from '../components/GuestOrder'
import Announcement from '../components/Announcement'
import GroupOrder from '../components/GroupOrder'
import Partnership from '../components/Partnership'
import Store from '../components/Store'
import '../css/Notice.css'
import Faq from '../components/Faq';
import NoticeSearch from '../components/NoticeSearch';
import { useState } from 'react';

const Notice = () => {
  const [selectvalue, setSelectValue] = useState('1');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTap, setActiveTap] = useState('faq');

  const handleSearchChange = (term) => {
    setSearchTerm(term)
  }
  const handleChange = (value) => {
    setSelectValue(value);
  }

  const personalInfoMent = [
    {
      description:
        "개인정보 수집 이용에 대한 동의를 하셔야 단체주문이 가능합니다.",
    },
    {
      description:
        "개인정보 수집 이용에 대한 동의를 하셔야 제휴문의가 가능합니다.",
    },
  ];

  const endModalMent = [
    {title: "단체주문서가 제출되었습니다.", description: "주문취소, 교환/반품 신청은 마이페이지 주문/교환/반품/취소 내역에서 신청해주세요."},
    {title: "문의가 접수되었습니다.", description: "접수된 문의는 마이페이지 문의 내역에서 확인할 수 있습니다."}
  ]




  const randerActiveTap = () => {
    if(activeTap === 'faq') {
      return <Faq selectvalue={selectvalue} searchTerm={searchTerm}/>
    } else if(activeTap === 'guestOrder'){
      return <GuestOrder></GuestOrder>
    } else if(activeTap === 'announcement'){
      return <Announcement></Announcement>
    } else if(activeTap === 'groupOrder'){
      return <GroupOrder personalInfoMent={personalInfoMent[0].description} endModalMent={endModalMent}></GroupOrder>
    }else if(activeTap === 'partnership'){
      return <Partnership personalInfoMent={personalInfoMent[1].description} endModalMent={endModalMent}></Partnership>
    } else if (activeTap === 'store') {
      return <Store></Store>
    }
  }
  return (
    <div className='notice'>
      <Header></Header>
      <NavBar></NavBar>
      <div className="noticeWrap">
        <div className="noticeTop">
          <h2>공지사항</h2>
          <div className="noticeTap">
          <ul className="noticeList">
            <li><button className={activeTap === 'faq' ? 'active' : null} onClick={()=>setActiveTap('faq')}>FAQ</button></li>
            <li><button className={activeTap === 'guestOrder' ? 'active' : null} onClick={()=> setActiveTap('guestOrder')}>비회원 주문조회</button></li>
            <li><button className={activeTap === 'announcement' ? 'active' : null} onClick={()=> setActiveTap('announcement')}>공지사항 / 당첨자 발표</button></li>
            <li><button className={activeTap === 'groupOrder' ? 'active' : null} onClick={()=> setActiveTap('groupOrder')}>단체주문</button></li>
            <li><button className={activeTap === 'partnership' ? 'active' : null} onClick={()=> setActiveTap('partnership')}>제휴문의</button></li>
            <li><button className={activeTap === 'store' ? 'active' : null} onClick={()=>setActiveTap('store')}>매장찾기</button></li>
          </ul>
          {activeTap === 'faq' ? <NoticeSearch handleChange={handleChange} handleSearchChange={handleSearchChange}/> : null}
        </div>
        </div>
        <div className="noticeMain">
          {randerActiveTap()}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Notice;