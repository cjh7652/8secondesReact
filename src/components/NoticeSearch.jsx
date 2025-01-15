import React from 'react';

const NoticeSearch = ({handleChange, handleSearchChange}) => {
  const handleSelectChange = (e) => {
    const value = e.target.value;
    handleChange(value)
  }

  const handleInputChange =(e) => {
    const value = e.target.value;
    handleSearchChange(value);
  }
  return (
    <div className="noticeSearch">
            <select name="notice" id="noticeSelect" onChange={handleSelectChange}>
              <option value="1">상품</option>
              <option value="2">주문</option>
              <option value="3">교환</option>
              <option value="4">배송</option>
            </select>
            <form id="search-form">
              <input type="text" id="search-input" placeholder="검색어 입력" onChange={handleInputChange}/>
              <button type="submit">검색</button>
             </form>
          </div>
  );
};

export default NoticeSearch;