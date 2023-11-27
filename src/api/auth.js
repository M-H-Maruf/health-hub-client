import axiosSecure from '.'

// Get user role
export const getRole = async email => {
    const { data } = await axiosSecure(`/user/${email}`)
    return data.role
  }