import React from 'react'
import { useRouteError } from "react-router-dom";
import "../styles/Error404.css"
function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="error-page-container">
      <h1 className="error-page-title">404</h1>
      <p className="error-page-message">Ôi! Đường dẫn của bạn không hợp lệ</p>
      <a href="/" className="error-page-home-link">Quay về Trang chủ</a>
    </div>
  )
}

export default ErrorPage