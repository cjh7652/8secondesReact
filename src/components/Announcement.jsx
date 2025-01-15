import React, { useState } from 'react'
import { announcement } from '../data/NoticeData'

const Announcement = () => {
  const [isOpne, setIsOpen] = useState(null);

  const handleOnClick = (index) => {
    setIsOpen(isOpne === index ? null : index)
  }
  return (
    <div className='announcement'>
      <div className="announcementWrap">
        {announcement.map((item, idx) => (
          <div className='announcementBox' key={idx} onClick={() => handleOnClick(idx)}>
            <div className='announcementTitle'>
            <span>{item.id}.</span>
            <span>{item.title}</span>
            <span className='date' style={{color:"#535353"}}>{item.date}</span>
          </div>
          <div className={`announcementDesc ${isOpne === idx ? 'active' : ''}`}>
            <span>{item.description}</span>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Announcement