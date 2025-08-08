import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home/Home';
import { Calendar } from './pages/Calendar/Calendar';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* 기본 경로를 로그인으로 리다이렉트 */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* 로그인 페이지 */}
          <Route path="/login" element={<Login />} />
          
          {/* 일정 관리 페이지 */}
          <Route path="/calendar" element={<Calendar />} />
          
          {/* 홈 페이지 */}
          <Route path="/home" element={<Home />} />
          
          {/* 404 페이지 - 존재하지 않는 경로는 로그인으로 리다이렉트 */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;