
import { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const RegistrationForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    gender: '',
    address: '',
    emergencyContact: '',
    healthInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Add logic to submit data to the backend (API endpoint for registration)

      // Assuming you have an API endpoint /participant
      const response = await fetch('http://localhost:5000/participant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campId: 'campId', // replace with the actual campId
          participantData: formData,
        }),
      });

      if (response.ok) {
        Swal.fire('Success!', 'Registration successful!', 'success');
        closeModal();
      } else {
        Swal.fire('Error!', 'Registration failed!', 'error');
      }
    } catch (error) {
      console.error('Error submitting registration:', error);
      Swal.fire('Error!', 'Registration failed!', 'error');
    }
  };

  return (
    <div className='relative z-50'>
      <h2 className="text-2xl font-bold mb-4">Participant Registration</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">
            Emergency Contact
          </label>
          <input
            type="text"
            id="emergencyContact"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="healthInfo" className="block text-sm font-medium text-gray-700">
            Health Information
          </label>
          <textarea
            id="healthInfo"
            name="healthInfo"
            value={formData.healthInfo}
            onChange={handleChange}
            rows="3"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-accent hover:text-white/90 hover:bg-accent px-4 py-2 border-2 border-accent rounded"
          onClick={handleSubmit}
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
};

export default RegistrationForm;
