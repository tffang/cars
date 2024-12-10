// pages/HomePage.js
import React, { useState, useEffect } from 'react'
import CarCard from '../components/CarCard'
import SearchBar from '../components/SearchBar'
import { getCars } from '../services/api' // 引入 API 请求函数

const HomePage = () => {
  const [cars, setCars] = useState([])
  const [filteredCars, setFilteredCars] = useState([])

  useEffect(() => {
    // 获取所有车辆
    getCars().then((data) => {
      setCars(data)
      setFilteredCars(data) // 默认显示所有车辆
    })
  }, [])

  const handleSearch = (query) => {
    const filtered = cars.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase()),
    )
    setFilteredCars(filtered)
  }

  return (
    <div>
      <h1>Available Cars</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="car-list">
        {filteredCars.length ? (
          filteredCars.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <p>No cars found</p>
        )}
      </div>
    </div>
  )
}

export default HomePage
