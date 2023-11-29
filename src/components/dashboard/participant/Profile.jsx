import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../api/users";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Swal from "sweetalert2";

const Profile = () => {
  const { user: currentUser, update, setUpdate } = useAuth();

  const { data: user = {} } = useQuery({
    queryKey: ["user", update],
    queryFn: () => getUser(currentUser.email),
  });
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  const [formData, setFormData] = useState({
    displayName: "",
    photoURL: "",
  });

  const handleCloseModal = () => {
    const modal = document.getElementById("participant_update_modal");
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
      const response = await fetch(`https://health-hub-server.vercel.app/user/${user.email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserData: formData,
        }),
      });

      if (response.ok) {
        setUpdate(!update);
        setImageError(!imageError);
        const modal = document.getElementById("participant_update_modal");
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
    <div className="w-full md:w-96">
      <div data-aos="fade-up" className=" h-full">
        <Tilt tiltEnable={false} className="w-full" scale={1.03}>
          <div
            data-aos="flip-left"
            className="bg-black/50 h-full space-y-4 rounded-lg"
          >
            <img
              src={
                imageError
                  ? "https://i.ibb.co/MVzMp2j/alternative-image.jpg"
                  : user?.photoURL
              }
              alt="User Profile"
              onError={handleImageError}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6 pt-0 text-white/70">
              {" "}
              <h2 className="text-2xl min-h-16 text-white/95 uppercase font-extrabold min-h-[64px] mb-2">
                {user?.displayName}
              </h2>
              <p className="mb-1">{`Email: ${user?.email}`}</p>
              <p className="mb-1">{`Role : ${user?.role}`}</p>
              <div className="mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 bg-accent text-white/95 rounded mr-2"
                  onClick={() =>
                    document
                      .getElementById("participant_update_modal")
                      .showModal()
                  }
                >
                  Update
                </motion.button>
                <dialog
                  id="participant_update_modal"
                  className="modal modal-bottom sm:modal-middle bg-black/50"
                >
                  <div className="modal-box bg-black/50 p-4">
                    <div className="relative">
                      <h2 className="text-2xl font-bold mb-4 text-white/90">
                        Profile Update
                      </h2>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label
                            htmlFor="displayName"
                            className="block text-sm font-medium text-white/70"
                          >
                            Name:
                          </label>
                          <input
                            type="text"
                            id="displayName"
                            name="displayName"
                            value={formData.displayName}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-white/70"
                          >
                            Photo URL:
                          </label>
                          <input
                            type="text"
                            id="photoURL"
                            name="photoURL"
                            value={formData.photoURL}
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
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Profile;
