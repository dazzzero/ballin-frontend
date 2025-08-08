import React from 'react';
import './Button.css';

/**
 * 기본 버튼 컴포넌트의 Props 인터페이스
 */
interface ButtonProps {
  /** 버튼 내부에 표시될 내용 */
  children: React.ReactNode;
  /** 버튼 클릭 시 실행될 함수 */
  onClick?: () => void;
  /** 버튼 비활성화 여부 */
  disabled?: boolean;
  /** 추가 CSS 클래스명 */
  className?: string;
  /** 버튼 타입 */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * 재사용 가능한 기본 버튼 컴포넌트
 * 
 * @param props - ButtonProps 객체
 * @param props.children - 버튼 내부에 표시될 내용
 * @param props.onClick - 버튼 클릭 시 실행될 함수 (선택사항)
 * @param props.disabled - 버튼 비활성화 여부 (기본값: false)
 * @param props.className - 추가 CSS 클래스명 (선택사항)
 * @param props.type - 버튼 타입 (기본값: 'button')
 * 
 * @example
 * ```tsx
 * <Button onClick={() => console.log('clicked')}>
 *   클릭하세요
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button'
}) => {
  return (
    <button
      type={type}
      className={`common-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}; 