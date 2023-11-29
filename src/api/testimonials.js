import axios from 'axios'

// Fetch all testimonials from db
export const getAllTestimonials = async () => {
    const { data } = await axios.get('http://localhost:5000/testimonials')
    return data
}