import React, { useEffect } from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { useLocation } from 'react-router-dom';
// import Icon_Logo from '../../assets/icons/Icon_Logo';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/login2';

  useEffect(() => {
    // 뷰포트 높이 설정 (모바일 주소창 대응)
    const setViewportHeight = () => {
      const homeWrap = document.getElementById('home-wrap');
      if (homeWrap) {
        homeWrap.style.height = `${window.innerHeight}px`;
      }
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);

  // 로그인 페이지인 경우 전체 화면 레이아웃
  if (isLoginPage) {
    return (
      <div id="home-wrap" className={`layout-container ${isLoginPage ? 'login-page' : ''}`}>
        <main className="layout-main">
          {children}
        </main>
      </div>
    );
  }

  // 일반 페이지 레이아웃
  return (
    <div id="home-wrap" className="layout-container">
      {/* 헤더 영역 */}
      <header className="layout-header">
        <a href="/" className="logo-link">
          {/* <Icon_Logo width={120} height={23} /> */}
        </a>
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main className="layout-main">
        {children}
      </main>

      {/* 하단 네비게이션 */}
      <NavigationBar />
    </div>
  );
};