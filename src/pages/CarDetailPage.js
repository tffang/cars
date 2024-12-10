import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function CarDetailPage() {
  const { carId } = useParams()
  const [carDetails, setCarDetails] = useState(null)

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/cars/${carId}/`)
      .then((response) => {
        setCarDetails(response.data)
      })
      .catch((error) => console.error('Error fetching car details:', error))
  }, [carId])

  if (!carDetails) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{carDetails.name}</h2>
      <p>Model: {carDetails.model}</p>
      <p>Description: {carDetails.description}</p>
      <p>Price: ${carDetails.price}</p>
      {/* 其他车辆详情 */}
    </div>
  )
}

export default CarDetailPage
