import React, { useState } from 'react';
import { FaSadTear } from "react-icons/fa";
import { FaqList } from '../data/NoticeData';

const Faq = ({ selectvalue, searchTerm }) => {
  const filteredFaq = FaqList.find(faq => faq.id === selectvalue);
  const [isOpen, setIsOpen] = useState(null);

  const handleOnClick = (index) => {
    setIsOpen(isOpen === index ? null : index)
  }
  if(!filteredFaq) {
    return <div> 선택된 카테고리에 대한 데이터를 찾을 수 없습니다. </div>
  }

  const renderFaqs = (faqCategory) => {
    if (!faqCategory || !Array.isArray(faqCategory)) return null;

    const filterCategory = faqCategory.filter((item) =>
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if(filterCategory.length === 0){
      document.querySelector('.faq').style.border = "none";
      return (
      <p className='nodataTxt'>해당하는 FAQ가 없습니다.<FaSadTear className='nodataIcon'></FaSadTear></p>
    )
    }

    return filterCategory.map((item,idx) => (
      <div key={idx} className='faqWrap' onClick={() => handleOnClick(idx)}>
        <div className="faqQ">
        <span>{item.id}.</span>
        <span>{item.q}</span>
        <span>{item.title}</span>
        </div>
        <div className={`faqA ${isOpen === idx ? 'active' : ''}`}>
          <span>{item.a}</span>
          <p>{item.description}</p>
        </div>
      </div>
    ))
  }

  const faqCategories = ['product', 'order', 'change', 'delivery'];
  return (
    <div className="faqContainer">
     <div className="faq">
      {faqCategories.map((category) => 
       renderFaqs(filteredFaq[category])
      )}
   </div>
   <div className="noticeTxt">
    <img src={process.env.PUBLIC_URL + '/image/noticeText.png'} alt={"고객상담"} />
   </div>
  </div>
  );
};

export default Faq;
