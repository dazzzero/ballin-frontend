import React from 'react';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">홈 페이지</h1>
      <p className="home-description">
        Ballin 앱에 오신 것을 환영합니다!
      </p>
    </div>
  );
}; 