// services/api.js

// 假设你已经配置了后端接口的 URL
const API_URL = 'https://your-api-url.com'

// 获取所有汽车
export const getCars = async () => {
  const response = await fetch(`${API_URL}/cars`)
  const data = await response.json()
  return data
}

// 获取特定汽车的详细信息
export const getCarDetails = async (carId) => {
  const response = await fetch(`${API_URL}/cars/${carId}`)
  const data = await response.json()
  return data
}

// 你可以根据需求继续扩展更多 API 请求
