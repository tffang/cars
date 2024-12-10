import axios from 'axios'

export const fetchCars = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/cars/')
    return response.data
  } catch (error) {
    console.error('Error fetching cars:', error)
    throw error
  }
}
