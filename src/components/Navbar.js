import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          车辆租赁系统
        </Link>
        <ul className="navbar-links">
          <li><Link to="/">主页</Link></li>
          <li><Link to="/rental-stations">租车网点</Link></li>
          <li><Link to="/orders">我的订单</Link></li>
          <li><Link to="/profile">个人中心</Link></li>
          <li><Link to="/help">帮助中心</Link></li>
          {isAuthenticated ? (
            <li><button onClick={onLogout}>退出登录</button></li>
          ) : (
            <li><Link to="/login">登录/注册</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
