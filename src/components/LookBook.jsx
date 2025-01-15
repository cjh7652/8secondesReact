import React, {useState} from 'react'
import './LookBook.css'
import { lookbookImg } from '../data/Data'

const LookBook = () => {
    const [activeTap, setActiveTap] = useState("Winter")
  return (
    <div className='lookBook'>
        <div className="lookBookContainer">
            <div className="lookBookMainImg">
                <img src={lookbookImg[activeTap][0]} alt="winter" />
            </div>
            <div className="lookBookSubImg">
                <img src={lookbookImg[activeTap][1]} alt="winter" />
                <img src={lookbookImg[activeTap][2]} alt="winter" />
            </div>
            <div className="lookBookTabAndImg">
                <div className="lookBookTxt">
                    <h2>Look Book</h2>
                    <div className="lookBookBtnBox">
                        <button onClick={()=>setActiveTap("Winter")} className={activeTap === "Winter" ? "active" : null}>Winter</button>
                        <button onClick={()=> setActiveTap("Fall")} className={activeTap === "Fall" ? "active" : null}>Fall</button>
                    </div>
                    <p>2024 Eight Seconds Collection</p>
                </div>
                <div className="lookbookLastImg">
                    <img src={lookbookImg[activeTap][3]} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LookBook