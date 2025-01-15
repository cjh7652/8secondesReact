import React from 'react';

const EndModal = ({handleModalClose, endModalMent}) => {
  return (
    <div className='endModalContainer'>
       <div className="endModal">
            <h3>{endModalMent.title}</h3>
            <p>{endModalMent.description}</p>
            <button onClick={handleModalClose}>확인</button>
          </div>
    </div>
  );
};

export default EndModal;