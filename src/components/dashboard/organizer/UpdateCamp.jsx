import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const UpdateCamp = () => {
  const { _id:campId, ...camp } = useLoaderData();
  console.log(campId);
  const [formData, setFormData] = useState({
    ...camp,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateCamp = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/camps/${campId}`,
        formData
      );

      if (response.status === 200) {
        setFormData({
          campName: "",
          image: "",
          scheduledDateTime: "",
          venueLocation: "",
          specializedServices: "",
          healthcareProfessionals: "",
          targetAudience: "",
          comprehensiveDescription: "",
          organizerName: "",
          peopleAttended: 0,
          campFees: 0,
        });

        Swal.fire({
          title: "Success!",
          text: "Camp Updated Successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed To Update Camp!",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error adding camp:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <div className=" w-full text-white flex flex-col justify-center items-center tracking-normal text-justify">
      <div
        data-aos="zoom-in"
        className="bg-black/50 rounded-lg w-full max-w-4xl m-8 md:m-24 p-6 md:p-10"
      >
        <form onSubmit={handleUpdateCamp} className="flex flex-col gap-8">
          <div>
            <label
              htmlFor="campName"
              className="block text-sm font-medium text-white/70"
            >
              Camp Name:
            </label>
            <input
              type="text"
              id="campName"
              name="campName"
              value={formData.campName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-white/70"
            >
              Image URL:
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
            />
          </div>

          <div>
            <label
              htmlFor="scheduledDateTime"
              className="block text-sm font-medium text-white/70"
            >
              Scheduled Date and Time:
            </label>
            <input
              type="text"
              id="scheduledDateTime"
              name="scheduledDateTime"
              value={formData.scheduledDateTime}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
            />
          </div>

          <div>
            <label
              htmlFor="venueLocation"
              className="block text-sm font-medium text-white/70"
            >
              Venue Location:
            </label>
            <input
              type="text"
              id="venueLocation"
              name="venueLocation"
              value={formData.venueLocation}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
            />
          </div>

          <div>
            <label
              htmlFor="specializedServices"
              className="block text-sm font-medium text-white/70"
            >
              Specialized Services:
            </label>
            <input
              type="text"
              id="specializedServices"
              name="specializedServices"
              value={formData.specializedServices}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
            />
          </div>

          <div>
            <label
              htmlFor="healthcareProfessionals"
              className="block text-sm font-medium text-white/70"
            >
              Healthcare Professionals:
            </label>
            <input
              type="text"
              id="healthcareProfessionals"
              name="healthcareProfessionals"
              value={formData.healthcareProfessionals}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
            />
          </div>

          <div>
            <label
              htmlFor="targetAudience"
              className="block text-sm font-medium text-white/70"
            >
              Target Audience:
            </label>
            <input
              type="text"
              id="targetAudience"
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
            />
          </div>

          <div>
            <label
              htmlFor="comprehensiveDescription"
              className="block text-sm font-medium text-white/70"
            >
              Comprehensive Description:
            </label>
            <textarea
              id="comprehensiveDescription"
              name="comprehensiveDescription"
              value={formData.comprehensiveDescription}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
            />
          </div>

          <div>
            <label
              htmlFor="organizerName"
              className="block text-sm font-medium text-white/70"
            >
              Organizer Name:
            </label>
            <input
              type="text"
              id="organizerName"
              name="organizerName"
              value={formData.organizerName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
            />
          </div>

          <div>
            <label
              htmlFor="peopleAttended"
              className="block text-sm font-medium text-white/70"
            >
              People Attended:
            </label>
            <input
              type="number"
              id="peopleAttended"
              name="peopleAttended"
              value={formData.peopleAttended}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="campFees"
              className="block text-sm font-medium text-white/70"
            >
              Camp Fees:
            </label>
            <input
              type="number"
              id="campFees"
              name="campFees"
              value={formData.campFees}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 bg-white/20 text-accent rounded-md w-full"
            />
          </div>

          <div className="form-control -mt-6">
            <button className="btn glass text-white hover:text-accent">
              Update Camp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCamp;
