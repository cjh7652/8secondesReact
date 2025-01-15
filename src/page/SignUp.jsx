import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header.jsx";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import { terms } from "../data/NoticeData.js";
import { useLoginContext } from '../context/LoginContext.js'
import axios from "axios";
import "../css/Signup.css";
import {useNavigate} from 'react-router-dom';
import { API_URL } from '../config/constants.js'


const SignUp = () => {
  const { setIsLogin } = useLoginContext();
  const history = useNavigate();
  const idInputRef = useRef(null);
  const pwInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const [id, setId] = useState(""); // 아이디
  const [pw, setPw] = useState(""); //비밀번호
  const [pw2, setPw2] = useState(""); //비밀번호 확인
  const [name, setName] = useState(""); //이름
  const [phone, setPhone] = useState(""); //휴대폰
  const [email, setEmail] = useState(""); //이메일

  //  const [termsChecked, setTermsChecked] = useState(false);
  //   const [privacyChecked, setPrivacyChecked] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false); //회원가입 제출 여부
  const [isRegistered, setIsRegistered] = useState(false); //회원가입완료

  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const idRule = /^[a-z0-9]{4,16}$/;
  const pwRule =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/;
  const nameRule = /^[a-zA-Z가-힣]{1,20}$/;
  const phoneRule = /^(?:(010)|(01[1|6|7|8|9]))\d{3,4}(\d{4})$/;
  const emailRule =
    /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;

  const [messages, setMessages] = useState({
    id: { text: "", color: "" },
    pw: { text: "", color: "" },
    pw2: { text: "", color: "" },
    name: { text: "", color: "" },
    phone: { text: "", color: "" },
    email: { text: "", color: "" },
    birth: { text: "", color: "" },
  });

  useEffect(() => {
    if (isSubmitted) {
      if (isRegistered) {
        alert("회원가입이 완료되었습니다.");
      } else {
        alert("회원가입이 실패했습니다.");
      }
    }
  }, [isSubmitted, isRegistered]);

  // useEffect(()=>{
  //   if(termsChecked&&privacyChecked){
  //     setTermsChecked(true)
  //     setPrivacyChecked(true)
  //   }else{
  //     setTermsChecked(false)
  //     setPrivacyChecked(true)
  //   }

  // }, [termsChecked, privacyChecked])

  const handleTermsChecked = (event) => {
    setTermsChecked(event.target.checked);
  };

  const handlePrivacyChecked = (event) => {
    setPrivacyChecked(event.target.checked);
  };

  const handleMessageChange = (key, text, color) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [key]: { text, color },
    }));
  };

  const handleId = (event) => {
    const newValue = event.target.value;
    setId(newValue);
    if (idRule.test(newValue)) {
      handleMessageChange("id", "사용 가능한 아이디 입니다", "success-color");
    } else if (newValue === "") {
      handleMessageChange("id", "아이디를 입력해 주세요", "error-color");
    } else {
      handleMessageChange(
        "id",
        "아이디는 영문소문자/숫자 4글자 이상 16글자 미만으로 사용 가능합니다",
        "error-color"
      );
      setId("");
    }
  };

  const handlePw = (event) => {
    const newPwValue = event.target.value;
    setPw(newPwValue);
    if (pwRule.test(newPwValue)) {
      handleMessageChange("pw", "사용 가능한 비밀번호 입니다", "success-color");
    } else if (newPwValue === "") {
      handleMessageChange("pw", "비밀번호를 입력해 주세요", "error-color");
    } else {
      handleMessageChange(
        "pw",
        "비밀번호는 영문대소문자/숫자/특수문자 조합, 8글자 이상 16글자 미만으로 사용 가능합니다",
        "error-color"
      );
      setPw("");
    }
  };

  const handlePw2 = (event) => {
    const newPw2Value = event.target.value;
    setPw2(newPw2Value);
    if (pw === "") {
      handleMessageChange("pw", "비밀번호를 입력해주세요", "error-color");
    } else if (newPw2Value === pw) {
      handleMessageChange("pw2", "비밀번호가 일치합니다.", "success-color");
    } else if (newPw2Value === "") {
      handleMessageChange("pw2", "비밀번호를 입력해주세요", "error-color");
    } else {
      handleMessageChange(
        "pw2",
        "비밀번호가 일치하지 않습니다.",
        "error-color"
      );
      setPw("");
    }
  };

  const handleName = (event) => {
    const newNameValue = event.target.value;
    setName(newNameValue);
    if (nameRule.test(newNameValue)) {
      handleMessageChange("name", "사용가능한 이름입니다", "success-color");
    } else if (newNameValue === "") {
      handleMessageChange("name", "이름을 입력해주세요", "error-color");
    } else {
      handleMessageChange("name", "올바른 이름이 아닙니다", "error-color");
      setName("");
    }
  };

  const handlePhone = (event) => {
    const newPhoneValue = event.target.value;
    setPhone(newPhoneValue);
    if (phoneRule.test(newPhoneValue)) {
      handleMessageChange(
        "phone",
        "사용가능한 전화번호입니다",
        "success-color"
      );
    } else if (newPhoneValue === "") {
      handleMessageChange("phone", "전화번호 입력해주세요", "error-color");
    } else {
      handleMessageChange(
        "phone",
        "전화번호를 다시 확인해주세요",
        "error-color"
      );
      setPhone("");
    }
  };

  const handleEmail = (event) => {
    const newEmailValue = event.target.value;
    setEmail(newEmailValue);
    if (emailRule.test(newEmailValue)) {
      handleMessageChange(
        "email",
        "사용 가능한 이메일입니다.",
        "success-color"
      );
    } else if (newEmailValue === "") {
      handleMessageChange("email", "이메일을 입력해주세요", "error-color");
    } else {
      handleMessageChange(
        "email",
        "이메일을 다시 한번 확인해주세요",
        "error-color"
      );
      setEmail("");
    }
  };

  //http://localhost:8080/SignUp

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      idRule.test(id) &&
      pwRule.test(pw) &&
      pw2 === pw &&
      nameRule.test(name) &&
      phoneRule.test(phone) &&
      emailRule.test(email)
    ) {
      try {
        axios
          .post( `${API_URL}/users`,
            {
              username: id, // id -> username으로 수정
              password: pw, // pw -> password로 수정
              email: email,
            } )
          .then((result) => {
            console.log(result);
            setIsLogin(true);
            history("/", { replace: true });
          })
          .catch((error) => {
            if (error.response) {
              console.error("서버 오류:", error.response.data); // 서버에서 반환한 오류 메시지
            } else {
              console.error("네트워크 오류:", error.message); // 네트워크 문제
            }
          });
  
        setIsSubmitted(true);
        setIsRegistered(true);
      } catch (error) {
        console.log(error);
        setIsRegistered(false);
        setIsSubmitted(true);
      }
    } else {
      console.error("입력 값 오류");
      setIsRegistered(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      <Header />
      <NavBar />
      <div className="signup">
        <h2>회원가입</h2>
        <hr />
        <form action="#" method="post" name="SignUp" onSubmit={handleSubmit}>
          <div className="idBox">
            <span>아이디</span>
            <input
              ref={idInputRef}
              type="text"
              id="idArea"
              required
              size={20}
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
              onBlur={handleId}
            />
          </div>
          <div className="msgBox">
          <p className={`mes-style ${messages.id.color}`}>{messages.id.text}</p>
          </div>
          <div className="pwBox">
            <span>비밀번호</span>
            <input
              ref={pwInputRef}
              type="password"
              id="pwArea"
              required
              size={20}
              value={pw}
              onChange={(event) => {
                setPw(event.target.value);
              }}
              onBlur={handlePw}
            />
          </div>
          <div className="msgBox">
          <p className={`mes-style ${messages.pw.color}`}>{messages.pw.text}</p>
          </div>
          <div className="pw2Box">
            <span>비밀번호 확인</span>
            <input
              type="password"
              id="pw2Area"
              required
              size={20}
              value={pw2}
              onChange={(event) => {
                setPw2(event.target.value);
              }}
              onBlur={handlePw2}
            />
          </div>
          <div className="msgBox">
          <p className={`mes-style ${messages.pw2.color}`}>{messages.pw2.text}</p>
          </div>
          <div className="nameBox">
            <span>이름</span>
            <input
              ref={nameInputRef}
              type="text"
              id="nameArea"
              required
              size={20}
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              onBlur={handleName}
            />
          </div>
          <div className="msgBox">
          <p className={`mes-style ${messages.name.color}`}>{messages.name.text}</p>
          </div>
          <div className="email">
            <span>이메일</span>
            <input
              ref={emailInputRef}
              type="text"
              id="emailArea"
              required
              size={20}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              onBlur={handleEmail}
            />
          </div>
          <div className="msgBox">
          <p className={`mes-style ${messages.email.color}`}>{messages.email.text}</p>
          </div>
          <div className="phone">
            <span>휴대폰</span>
            <input
              ref={phoneInputRef}
              type="text"
              id="phoneArea"
              required
              size={20}
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              onBlur={handlePhone}
            />
          </div>
          <div className="msgBox">
          <p className={`mes-style ${messages.phone.color}`}>{messages.phone.text}</p>
          </div>
          <div className="termsOfUse">
            <div className="terms">
              <div className="termsCheck">
                <p>{terms[0].title}</p>
                <div className="checkInputBox">
                  <input
                    type="checkbox"
                    checked={termsChecked} // 상태로 체크 상태를 관리
                    onChange={handleTermsChecked}
                  />
                  <label htmlFor="">이용약관에 동의합니다.</label>
                </div>
              </div>
              <div className="termsDesc">
                <p>{terms[0].description}</p>
              </div>
            </div>
            <div className="terms">
              <div className="termsCheck">
                <p>{terms[1].title}</p>
                <div className="checkInputBox">
                  <input
                    type="checkbox"
                    checked={privacyChecked} // 상태로 체크 상태를 관리
                    onChange={handlePrivacyChecked}
                  />
                  <label htmlFor="">개인정보처리방침에 동의합니다.</label>
                </div>
              </div>
              <div className="termsDesc">
                <p>{terms[1].description}</p>
              </div>
            </div>
          </div>
          <div className="SignupSubmitBtnBox">
          <button>취소</button>
          <button type="submit">회원가입</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
