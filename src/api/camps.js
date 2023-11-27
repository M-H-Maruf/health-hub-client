import axiosSecure from '.'

// Fetch all camps from db
export const getAllCamps = async () => {
    const { data } = await axiosSecure('/camps')
    return data
}

// Fetch all camps from db
export const getCamp = async (_id) => {
    const { data } = await axiosSecure(`/camp-details/${_id}`)
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

// Fetch all upcoming camps from db
export const getAllUpcomingCamps = async () => {
    const { data } = await axiosSecure('/upcoming-camps')
    return data
}