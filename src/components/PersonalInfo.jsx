import React from 'react';
import { personalInfo } from "../data/NoticeData";

const PersonalInfo = ({handleChange, formData, errors, personalInfoMent}) => {
  return (
    <div className='personalContainer'>
       <div className="personalTxtBox">
            <span>개인정보 수집 이용에 대한 동의</span>
            <label className="personalTxtCheck">
              {personalInfoMent}
              <input
                type="checkbox"
                name="개인정보동의"
                checked={formData.개인정보동의} // checked 속성 추가
                onChange={(e) => handleChange(e, 'checkbox')}
              />
            </label>
          </div>
          {errors.개인정보동의 && <p className="errorP" style={{ color: 'red'}}>개인정보 동의는 필수입니다.</p>}
          <div className="personalInfomation">
            <ul className="personalInfoTxt">
              {personalInfo.map((txt, idx) => (
                <li key={idx}>
                  <span>{txt.id}.</span>
                  <span style={{ marginLeft: "5px" }}>{txt.title}</span>
                  <p>{txt.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="personalSubmitBtn">
            <button type="button" className="psPrevBtn">취소</button>
            <button type="submit" className="psNextBtn">동의</button>
          </div>
        </div>
  );
};

export default PersonalInfo;