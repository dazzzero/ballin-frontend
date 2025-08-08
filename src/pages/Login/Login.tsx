import React from 'react';
import { LoginButton } from '../../components/common/LoginButton/LoginButton';
import { KakaoLoginButton } from '../../components/common/KakaoLoginButton/KakaoLoginButton';
import './Login.css';

export const Login: React.FC = () => {
  return (
    <div className="login-container">
      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo-character">
          <img 
            src="/img/logo_character.png" 
            alt="Ballin Character Logo" 
            className="logo-character-img"
          />
        </div>
        <div className="logo-text">
          <img 
            src="/img/logo_eng.png" 
            alt="Ballin" 
            className="logo-text-img"
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="buttons-section">
        <LoginButton />
        <KakaoLoginButton />
      </div>

      {/* Sign Up Link */}
      <div className="signup-section">
        <a href="#" className="signup-link">
          회원가입
        </a>
      </div>
    </div>
  );
};