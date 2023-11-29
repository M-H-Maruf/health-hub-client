import axios from 'axios'

const axiosSecure = axios.create({
  baseURL: "https://health-hub-server.vercel.app",
})

// intercept response and check for unauthorized responses.
axiosSecure.interceptors.response.use(
  response => response,
  async error => {
    console.log('Error tracked in the interceptor', error.response)
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      window.location.replace('/login')
    }

    return Promise.reject(error)
  }
)

export default axiosSecure
