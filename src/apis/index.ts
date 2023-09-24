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
    const token = localStorage.getItem('__token')

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  })

  return customAxios
}

const customAxios = createApi()

export default customAxios
