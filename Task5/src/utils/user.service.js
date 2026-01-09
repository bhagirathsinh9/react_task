import axiosInstance from '../utils/axiosInstance'

export const getUsers = () => {
  return axiosInstance.get('/users')
}
