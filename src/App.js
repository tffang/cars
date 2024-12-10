import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import './styles/App.css'; // css文件

import Home from './pages/Home'; // 导入 Home 组件
import Login from './pages/Login'; // 导入 Login 组件
import Profile from './pages/Profile'; // 导入 Profile 组件
import Register from './pages/Register'; // 导入 Register 组件
import CarDetailPage from './pages/CarDetailPage'; // 车辆详情页的组件

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/cars/')
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => console.error('Error fetching cars:', error));
  }, []);

  return (
    <Router>
      <div>
        {/* 配置路由 */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* 默认重定向到登录页 */}
          <Route path="/Home" element={<Home />} /> {/* 主页路由 */}
          <Route path="/login" element={<Login />} /> {/* 登录页路由 */}
          <Route path="/Profile" element={<Profile />} /> {/* 个人中心路由 */}
          <Route path="/register" element={<Register />} /> {/* 注册页路由 */}
          <Route path="/car/:carId" element={<CarDetailPage />} /> {/* 车辆详情页路由 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
