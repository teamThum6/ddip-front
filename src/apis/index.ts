import Axios, { AxiosInstance } from 'axios'

export const createApi = (): AxiosInstance => {
  const customAxios = Axios.create({
    baseURL: 'http://13.125.131.81',
  })

  customAxios.interceptors.response.use(
    (response) => {
      return Promise.resolve(response.data)
    },

    async (error) => {
      return Promise.reject(error)
    }
  )

  customAxios.interceptors.request.use((config) => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZXhwIjoxNzEzNTA3ODI3fQ.RAagDZAzHX5vz9sy5WyhIbX1DzP1kfA8Hdd9_A191-I'

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  })

  return customAxios
}

const customAxios = createApi()

export default customAxios
