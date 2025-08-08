import React from 'react';
import { Button } from '../Button/Button';
import './LoginButton.css';

/**
 * 로그인 버튼 컴포넌트의 Props 인터페이스
 */
interface LoginButtonProps {
  /** 버튼 클릭 시 실행될 함수 */
  onClick?: () => void;
  /** 버튼 비활성화 여부 */
  disabled?: boolean;
  /** 버튼에 표시될 텍스트 (기본값: '로그인') */
  children?: React.ReactNode;
}

/**
 * 로그인 전용 버튼 컴포넌트
 * 
 * 기본 Button 컴포넌트를 확장하여 로그인 페이지에 특화된 스타일을 적용합니다.
 * 연한 노란색 배경과 호버 효과를 포함합니다.
 * 
 * @param props - LoginButtonProps 객체
 * @param props.onClick - 버튼 클릭 시 실행될 함수 (선택사항)
 * @param props.disabled - 버튼 비활성화 여부 (기본값: false)
 * @param props.children - 버튼에 표시될 텍스트 (기본값: '로그인')
 * 
 * @example
 * ```tsx
 * <LoginButton onClick={handleLogin}>
 *   로그인하기
 * </LoginButton>
 * ```
 * 
 * @example
 * ```tsx
 * <LoginButton disabled={isLoading}>
 *   로그인 중...
 * </LoginButton>
 * ```
 */
export const LoginButton: React.FC<LoginButtonProps> = ({
  onClick,
  disabled = false,
  children = '로그인'
}) => {
  return (
    <Button
      className="login-button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}; 