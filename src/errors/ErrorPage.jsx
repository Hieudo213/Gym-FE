import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error404.css";
function ErrorPage() {
  return (
    <div className="error-page-container">
      <h1 className="error-page-title">404</h1>
      <p className="error-page-message">Ôi! Đường dẫn của bạn không hợp lệ</p>
      <Link to="/" className="error-page-home-link">
        Quay về Trang chủ
      </Link>
    </div>
  );
}

export default ErrorPage;
