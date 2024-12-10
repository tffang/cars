import React, { useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '张三',
    email: 'zhangsan@example.com',
    phone: '123-456-7890',
    address: '北京市朝阳区',
  });
  const [password, setPassword] = useState('');

  // 修改用户信息
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // 在这里可以发送请求保存用户信息
    console.log('保存用户信息', userInfo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="profile-container">
      <h2 className="section-title">个人信息</h2>

      <div className="user-info">
        <div className="info-item">
          <label>姓名:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              className="input-field"
            />
          ) : (
            <span className="info-text">{userInfo.name}</span>
          )}
        </div>

        <div className="info-item">
          <label>邮箱:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              className="input-field"
            />
          ) : (
            <span className="info-text">{userInfo.email}</span>
          )}
        </div>

        <div className="info-item">
          <label>电话:</label>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              className="input-field"
            />
          ) : (
            <span className="info-text">{userInfo.phone}</span>
          )}
        </div>

        <div className="info-item">
          <label>地址:</label>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              className="input-field"
            />
          ) : (
            <span className="info-text">{userInfo.address}</span>
          )}
        </div>

        <div className="action-buttons">
          {isEditing ? (
            <button onClick={handleSave} className="save-btn">保存</button>
          ) : (
            <button onClick={handleEdit} className="edit-btn">修改信息</button>
          )}
        </div>
      </div>

      <div className="password-section">
        <h3 className="section-title">修改密码</h3>
        <input
          type="password"
          placeholder="输入新密码"
          value={password}
          onChange={handlePasswordChange}
          className="input-field"
        />
        <button className="save-btn">保存密码</button>
      </div>

      <div className="order-section">
        <h3 className="section-title">我的订单</h3>
        <div className="order-list">
          {/* 模拟的订单列表，实际可以通过请求从后台获取 */}
          <div className="order-item">
            <p>订单号: 12345</p>
            <p>租车地点: 北京市</p>
            <p>租车日期: 2024-12-10</p>
            <button className="view-order-btn">查看订单</button>
          </div>
          <div className="order-item">
            <p>订单号: 12346</p>
            <p>租车地点: 上海市</p>
            <p>租车日期: 2024-12-15</p>
            <button className="view-order-btn">查看订单</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
