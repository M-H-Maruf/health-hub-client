import axios from 'axios'
import axiosSecure from '.'

// Fetch all camps from db
export const getAllCamps = async () => {
    const { data } = await axiosSecure('/camps')
    return data
}

// Fetch registered camps from db
export const getRegisteredCamps = async (email) => {
    const { data } = await axiosSecure(`participant/${email}`)
    return data
}

// Fetch registered camps from db
export const getAttendedCamps = async (email) => {
    const { data } = await axiosSecure(`participant-attended/${email}`)
    return data
}

// Fetch popular camps
export const getPopularCamps = async () => {
    const { data } = await axios.get(`https://health-hub-server.vercel.app/popular-camps`)
    return data
}

// Fetch least popular camps
export const getLeastPopularCamps = async () => {
    const { data } = await axios.get(`https://health-hub-server.vercel.app/least-popular-camps`)
    return data
}

// Fetch all upcoming camps from db
export const getAllUpcomingCamps = async () => {
    const { data } = await axios.get('https://health-hub-server.vercel.app/upcoming-camps')
    return data
}