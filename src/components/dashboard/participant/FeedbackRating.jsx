import { useQuery } from "@tanstack/react-query";
import useAuth from "./../../../hooks/useAuth";
import { getAttendedCamps } from "./../../../api/camps";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";

const FeedbackRating = () => {
  const { user } = useAuth();
  const { data: camps = [] } = useQuery({
    queryKey: ["registered-camps", user.email],
    queryFn: () => getAttendedCamps(user.email),
    refetchInterval: 10000,
  });
  const [formData, setFormData] = useState({
    campName: "",
    feedback: "",
    rating: 0,
    date: new Date().toISOString(),
  });
  const handleCloseModal = () => {
    const modal = document.getElementById("post_review_modal");
    if (modal) {
      modal.close();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://health-hub-server.vercel.app/testimonials",
        formData
      );
      if (response.status == 200) {
        const modal = document.getElementById("post_review_modal");
        if (modal) {
          modal.close();
        }
        setFormData({
          displayName: "",
          photoURL: "",
        });
        Swal.fire({
          title: "Success!",
          text: "Request for joining the camp sent successfully!",
          icon: "success",
          position: "bottom-end",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: `Something went wrong!`,
        icon: "error",
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table text-white/80 font-semibold text-lg text-center uppercase w-full">
          <thead className="text-xl font-teko uppercase text-center text-black/70">
            <tr>
              <th>Camp Name</th>
              <th>Date and Time</th>
              <th>Venue</th>
              <th>Camp Fees</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {camps.map((camp, index) => (
              <tr key={index}>
                <td>{camp.campName}</td>
                <td>
                  {new Date(camp.scheduledDateTime).toLocaleDateString("en-GB")}
                </td>
                <td>{camp.venueLocation}</td>
                <td>{camp.campFees}</td>
                <td>
                  <button
                    className="btn btn-outline btn-accent"
                    onClick={() =>
                      document.getElementById("post_review_modal").showModal()
                    }
                  >
                    Review
                  </button>
                  <dialog
                    id="post_review_modal"
                    className="modal modal-bottom sm:modal-middle bg-black/50"
                  >
                    <div className="modal-box bg-black/50 p-4">
                      <div className="relative">
                        <h2 className="text-2xl font-bold mb-4 text-white/90">
                          Post Review
                        </h2>
                        <form onSubmit={handleSubmit}>
                          <div className="mb-4">
                            <label
                              htmlFor="displayName"
                              className="block text-sm font-medium text-white/70"
                            >
                              Camp Name:
                            </label>
                            <input
                              type="text"
                              id="campName"
                              name="campName"
                              placeholder="Name of the camp"
                              value={formData.campName}
                              onChange={handleChange}
                              className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
                            />
                          </div>

                          <div className="mb-4">
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-white/70"
                            >
                              Rating:
                            </label>
                            <input
                              type="number"
                              id="rating"
                              name="rating"
                              placeholder="Out of 5"
                              value={formData.rating}
                              onChange={handleChange}
                              className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
                            />
                          </div>

                          <div className="mb-4">
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-white/70"
                            >
                              Feedback:
                            </label>
                            <textarea
                              type="text"
                              id="feedback"
                              name="feedback"
                              value={formData.feedback}
                              placeholder="Your feedback"
                              onChange={handleChange}
                              className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
                            />
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedbackRating;
