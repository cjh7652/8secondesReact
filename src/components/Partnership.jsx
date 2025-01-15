import React, { useState } from "react";
import EndModal from "./EndModal";
import PersonalInfo from "./PersonalInfo";

const Partnership = ({personalInfoMent, endModalMent}) => {
  const groupOrderList = [
    "문의자명",
    "연락처",
    "이메일",
  ];

  const initialFormData = {
    문의자명: "",
    연락처: "",
    이메일: "",
    문의내용: "",
    개인정보동의: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (e, type) => {
    if (type === "number") {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: false }); // 입력 시 에러 해제
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    groupOrderList.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = true;
      }
    });

    if (!formData.문의내용) {
      newErrors.문의내용 = true;
    }

    if (!formData.개인정보동의) {
      newErrors.개인정보동의 = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsModalVisible(true);
    document.body.style.overflow = "hidden"; // 스크롤 막기
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setFormData(initialFormData); // 폼 초기화
    document.body.style.overflow = ""; // 스크롤 복원
  };

  return (
    <div className="partnership">
       <h2>제휴문의</h2>
      <form className="partnerFiled" onSubmit={handleSubmit}>
        <div className="partnerContainer">
          <ul className="partnerInput">
            {groupOrderList.map((list, idx) => (
              <li key={idx} className="partnerInputli">
                <span>{list}</span>
                <input
                  type={list === "이메일" ? "email" : "text"}
                  name={list}
                  value={formData[list]} // value 속성 추가
                  onChange={(e) =>
                    handleChange(
                      e,
                      list === "연락처" ||
                        list === "상품번호" ||
                        list === "구매희망수량" ||
                        list === "필요일자"
                        ? "number"
                        : "text"
                    )
                  }
                  style={{ borderColor: errors[list] ? "#F62F2F" : "" }}
                />
              </li>
            ))}
            <li className="partnerInputTxtarea">
              <span>문의내용</span>
              <textarea
                name="문의내용"
                value={formData.문의내용} // value 속성 추가
                onChange={(e) => handleChange(e, "text")}
                style={{ borderColor: errors.문의내용 ? "red" : "" }}
              ></textarea>
            </li>
          </ul>
        </div>
        <PersonalInfo handleChange={handleChange} formData={formData} errors={errors} personalInfoMent={personalInfoMent}></PersonalInfo>
      </form>

      {isModalVisible && (
        <EndModal handleModalClose={handleModalClose} endModalMent={endModalMent[1]}></EndModal>
      )}
    </div>
  )
}

export default Partnership