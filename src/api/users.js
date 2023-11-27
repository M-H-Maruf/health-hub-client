import axiosSecure from '.'

// Get specific user
export const getUser = async email => {
    const { data } = await axiosSecure(`/user/${email}`)
    return data
  }