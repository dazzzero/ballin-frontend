import React from 'react';
import { useLocation } from 'react-router-dom';
import './NavigationBar.css';

// 네비게이션 아이템 타입
interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export const NavigationBar: React.FC = () => {
  const location = useLocation();

  // 네비게이션 아이템들
  const navItems: NavItem[] = [
    {
      href: '/home',
      label: '홈',
      icon: <div className="nav-icon">🏠</div>,
    },
    {
      href: '/calendar',
      label: '일정',
      icon: <div className="nav-icon">📅</div>,
    },
    {
      href: '/page2',
      label: '설정',
      icon: <div className="nav-icon">⚙️</div>,
    },
  ];

  return (
    <nav className="navigation-bar">
      {navItems.map(item => {
        const isActive = location.pathname === item.href;

        return (
          <a key={item.href} href={item.href} className="nav-link">
            <div className={isActive ? 'nav-icon active' : 'nav-icon'}>
              {item.icon}
            </div>
            <span className={isActive ? 'nav-label active' : 'nav-label'}>
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
};