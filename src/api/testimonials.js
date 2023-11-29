import axios from 'axios'

// Fetch all testimonials from db
export const getAllTestimonials = async () => {
    const { data } = await axios.get('https://health-hub-server.vercel.app/testimonials')
    return data
}