import React, { useState } from "react";
import axios from "axios";  // axios import
import Header from "../components/Header.jsx";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { useLoginContext } from '../context/LoginContext.js';
import {useNavigate} from 'react-router-dom';
import "../css/Login.css";
import { API_URL } from '../config/constants.js'

const Login = () => {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const { setIsLogin } = useLoginContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    // 서버로 로그인 정보 전송
    axios.post(`${API_URL}/users/login` , {
        username: username,  // 사용자 입력된 id
        password: password,  // 사용자 입력된 pw
      })
      .then((result) => {
        console.log(result);
        // 로그인 성공 시 로직 (예: 홈 화면으로 리다이렉트)
        history("/", { replace: true });
        setIsLogin(true)
      })
      .catch((error) => {
        console.error(error);
        setLoginError("아이디 또는 비밀번호가 잘못되었습니다.");
        // 로그인 실패 처리 로직
      });
  };

  return (
    <div>
      <Header />
      <NavBar />
      <div className="login">
        <div className="loginContainer">
          <form className="loginInputBox" onSubmit={handleSubmit}>
            <h2>로그인</h2>
            <input
              type="text"
              name="id"
              placeholder="아이디를 입력해 주세요."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="pw"
              placeholder="비밀번호를 입력해 주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {loginError && <div className="error" style={{color:"red"}}>{loginError}</div>}
            <div className="loginCheckBox">
              <input type="checkbox" checked />
              <label htmlFor="">로그인 저장</label>
            </div>
            <button type="submit">로그인하기</button>
            <div className="IntegratedLoginBox">
              <button className="kakao">카카오 로그인</button>
              <button className="naver">네이버 로그인</button>
            </div>
          </form>
          <div className="loginSignUpBtn" style={{backgroundImage: `url(/assets/bg.jpg)`}}>
            <div className="loginSignUpTxtBox">
              <span>8 Seconds</span>
              <span>8 세컨즈</span>
              <span>8 秒</span>
            </div>
            <div className="loginSignupLink">
              <Link to="/signup">아직 회원이 아니시라면 클릭하세요!</Link> <br />
              <Link to="/signup">클릭 시 회원가입 페이지로 이동합니다.</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
