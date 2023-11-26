import axiosSecure from '.'

// Fetch all testimonials from db
export const getAllTestimonials = async () => {
    const { data } = await axiosSecure('/testimonials')
    return data
}