import React from 'react'
import '../styles/Error403.css'
function Permission() {
  return (
    <div className="forbidden-page-container">
    <h1 className="forbidden-page-title">403</h1>
    <p className="forbidden-page-message">Bạn không có quyền để truy cập vào đường dẫn này.</p>
    <a href="/" className="forbidden-page-home-link">Quay về trang chủ</a>
  </div>
  )
}

export default Permission