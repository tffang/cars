import React from 'react'

function CarCard({ car }) {
  return (
    <div className="car-card">
      <h2>{car.name}</h2>
      <p>型号: {car.model}</p>
      <p>价格: ¥{car.price}/天</p>
      <button>查看详情</button>
    </div>
  )
}

export default CarCard
