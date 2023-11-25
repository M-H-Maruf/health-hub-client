import axiosSecure from '.'

// Fetch all camps from db
export const getAllCamps = async () => {
    const { data } = await axiosSecure('/camps')
    return data
}

// Fetch popular camps
export const getPopularCamps = async () => {
    const { data } = await axiosSecure(`/popular-camps`)
    return data
}

// Fetch least popular camps
export const getLeastPopularCamps = async () => {
    const { data } = await axiosSecure(`/least-popular-camps`)
    return data
}