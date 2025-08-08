import React from 'react';
import { Button } from '../Button/Button';
import './KakaoLoginButton.css';

/**
 * 카카오 로그인 버튼 컴포넌트의 Props 인터페이스
 */
interface KakaoLoginButtonProps {
  /** 버튼 클릭 시 실행될 함수 */
  onClick?: () => void;
  /** 버튼 비활성화 여부 */
  disabled?: boolean;
  /** 버튼에 표시될 텍스트 (기본값: '카카오 로그인') */
  children?: React.ReactNode;
}

/**
 * 카카오 로그인 전용 버튼 컴포넌트
 * 
 * 기본 Button 컴포넌트를 확장하여 카카오 로그인에 특화된 스타일을 적용합니다.
 * 카카오 브랜드 색상(노란색)과 카카오 아이콘을 포함합니다.
 * 
 * @param props - KakaoLoginButtonProps 객체
 * @param props.onClick - 버튼 클릭 시 실행될 함수 (선택사항)
 * @param props.disabled - 버튼 비활성화 여부 (기본값: false)
 * @param props.children - 버튼에 표시될 텍스트 (기본값: '카카오 로그인')
 * 
 * @example
 * ```tsx
 * <KakaoLoginButton onClick={handleKakaoLogin}>
 *   카카오로 시작하기
 * </KakaoLoginButton>
 * ```
 * 
 * @example
 * ```tsx
 * <KakaoLoginButton disabled={isLoading}>
 *   로그인 중...
 * </KakaoLoginButton>
 * ```
 * 
 * @remarks
 * 카카오 로그인 API 연동 시 onClick 핸들러에서 카카오 SDK를 호출해야 합니다.
 */
export const KakaoLoginButton: React.FC<KakaoLoginButtonProps> = ({
  onClick,
  disabled = false,
  children = '카카오 로그인'
}) => {
  return (
    <Button
      className="kakao-login-button"
      onClick={onClick}
      disabled={disabled}
    >
      <div className="kakao-icon">
        <div className="kakao-icon-inner"></div>
      </div>
      <span>{children}</span>
    </Button>
  );
}; 