import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const JoinNowButton = ({ camp }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    gender: "",
    address: "",
    emergencyContact: "",
    healthInfo: "",
  });
  const camp_Id = camp._id;
  const handleCloseModal = () => {
    const modal = document.getElementById("participant_modal");
    if (modal) {
      modal.close();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      userEmail: user.email,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(camp_Id);
      const response = await fetch("http://localhost:5000/participant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          campId: camp_Id,
          campData: camp,
          participantData: formData,
          confirmationStatus: "pending",
          paymentStatus: "pending",
        }),
      });

      if (response.ok) {
        const modal = document.getElementById("participant_modal");
        if (modal) {
          modal.close();
        }
        Swal.fire({
          title: "Success!",
          text: "Request for joining the camp sent successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: `Something went wrong!`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-accent hover:text-white/90 hover:bg-accent px-4 py-2 border-2 border-accent rounded"
        onClick={() => document.getElementById("participant_modal").showModal()}
      >
        Join Camp
      </motion.button>
      <dialog
        id="participant_modal"
        className="modal modal-bottom sm:modal-middle bg-black/50"
      >
        <div className="modal-box bg-black/50 p-4">
          <div className="relative">
            <h2 className="text-2xl font-bold mb-4 text-white/90">
              Participant Registration
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/70"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-white/70"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white/70"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-white/70"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="mt-1 select p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-white/70"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="emergencyContact"
                  className="block text-sm font-medium text-white/70"
                >
                  Emergency Contact
                </label>
                <input
                  type="text"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="healthInfo"
                  className="block text-sm font-medium text-white/70"
                >
                  Health Information
                </label>
                <textarea
                  id="healthInfo"
                  name="healthInfo"
                  value={formData.healthInfo}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-accent hover:text-white/90 hover:bg-accent px-4 py-2 border-2 border-accent rounded"
                type="submit"
              >
                Submit
              </motion.button>
            </form>
            <button
              onClick={handleCloseModal}
              className="btn btn-sm btn-circle btn-accent btn-outline z-50 absolute right-2 top-2"
            >
              ✕
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default JoinNowButton;
