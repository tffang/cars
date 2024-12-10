import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [location, setLocation] = useState('杭州');
  const [servicePoint, setServicePoint] = useState('');
  const [date, setDate] = useState('');
  
  // 模拟的车辆数据
  const vehicles = [
    { name: "丰田 Camry", image: "car1.jpg", price: "¥150/天" },
    { name: "宝马 3系", image: "car2.jpg", price: "¥200/天" },
    { name: "特斯拉 Model 3", image: "car3.jpg", price: "¥350/天" },
    { name: "奥迪 A4", image: "car4.jpg", price: "¥250/天" },
    { name: "奔驰 E级", image: "car5.jpg", price: "¥300/天" },
    { name: "宝马 X5", image: "car6.jpg", price: "¥400/天" },
    { name: "沃尔沃 XC90", image: "car7.jpg", price: "¥500/天" },
    { name: "雷克萨斯 RX", image: "car8.jpg", price: "¥450/天" }
  ];

  const handleSearch = () => {
    console.log(`Searching for cars at ${location}, service point: ${servicePoint}, on ${date}`);
  };

  return (
    <div className="home">
      {/* 顶部导航栏 */}
      <nav className="navbar">
        <div className="logo">
          <a href="/" className="logo-link">HZNU租车</a>
        </div>
        <div className="navbar-buttons">
          <a href="/" className="navbar-button">首页</a>
          <a href="/rental" className="navbar-button">租车</a>
          <a href="/stations" className="navbar-button">网点查询</a>
          <a href="/profile" className="navbar-button">个人中心</a>
        </div>
      </nav>

      {/* 搜索框 */}
      <div className="search">
        <h1>选择你的租车</h1>
        <div className="search-container">
          {/* 城市选择 */}
          <select
            className="search-input city-select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="杭州">杭州</option>
            <option value="上海">上海</option>
            <option value="北京">北京</option>
          </select>

          {/* 服务点输入框 */}
          <input
            type="text"
            placeholder="输入服务点"
            className="search-input service-point-input"
            value={servicePoint}
            onChange={(e) => setServicePoint(e.target.value)}
          />

          {/* 取车时间显示 */}
          <div className="pickup-time">
            <span>取车时间：</span>
            <input
              type="date"
              value={date}
              className="date-picker"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* 搜索按钮 */}
          <button onClick={handleSearch} className="select-car-button">
            立即选车
          </button>
        </div>
      </div>

      {/* 车辆展示 */}
      <div className="vehicles">
        <h2>热门车型</h2>
        <div className="vehicle-list">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="vehicle-item">
              <img src={vehicle.image} alt={vehicle.name} />
              <h3>{vehicle.name}</h3>
              <p>{vehicle.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="process">
  <h2>租车流程</h2>
  <div className="process-steps">
    <div className="process-step">
      <div className="step-number">1</div>
      <h3>选择车辆</h3>
      <p>选择合适的车型进行租赁</p>
    </div>
    <span className="arrow">→</span>
    <div className="process-step">
      <div className="step-number">2</div>
      <h3>填写个人信息</h3>
      <p>提供您的个人信息以完成租车</p>
    </div>
    <span className="arrow">→</span>
    <div className="process-step">
      <div className="step-number">3</div>
      <h3>确认订单并支付</h3>
      <p>确认订单详情并进行支付</p>
    </div>
    <span className="arrow">→</span>
    <div className="process-step">
      <div className="step-number">4</div>
      <h3>提取车辆</h3>
      <p>取车并开始享受旅程</p>
    </div>
  </div>
</div>


      {/* 底部信息 */}
      <footer className="footer">
        <p>联系我们: 400-888-8888</p>
        <p>© 2024 神州租车</p>
      </footer>
    </div>
  );
};

export default Home;
