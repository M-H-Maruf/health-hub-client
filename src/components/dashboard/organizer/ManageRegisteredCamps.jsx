import { useQuery } from "@tanstack/react-query";
import { getRegisteredCamps } from "../../../api/camps";
import useAuth from "./../../../hooks/useAuth";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageRegisteredCamps = () => {
  const [update, setUpdate] = useState(false);
  const { user } = useAuth();
  const { data: camps = [] } = useQuery({
    queryKey: ["registered-camps", user.email, update],
    queryFn: () => getRegisteredCamps(user.email),
    refetchInterval: 10000,
  });

  const handleConfirm = async (id) => {
    try {
      const response = await axios.put(
        `https://health-hub-server.vercel.app/participant-confirm/${id}`
      );
      if (response.status === 200) {
        setUpdate(!update);
        Swal.fire({
          title: "Success!",
          text: "Confirmation Successful!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Confirmation Failed!",
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

  const handleCancel = async (id) => {
    try {
        const response = await axios.delete(`https://health-hub-server.vercel.app/participants/${id}`);
        if (response.status === 200) {
            setUpdate(!update);
            Swal.fire({
              title: "Success!",
              text: "Cancellation Successful!",
              icon: "success",
              confirmButtonText: "OK",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Cancellation Failed!",
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
    <div>
      <div className="overflow-x-auto">
        <table className="table text-white/80 font-semibold text-lg text-center uppercase w-full">
          <thead className="text-xl font-teko uppercase text-center text-black/70">
            <tr>
              <th>Camp Name</th>
              <th>Date and Time</th>
              <th>Venue</th>
              <th>Camp Fees</th>
              <th>Payment Status</th>
              <th>Confirmation Status</th>
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
                <td>{camp.paymentStatus}</td>
                <td>{camp.confirmationStatus}</td>
                {camp.confirmationStatus == "pending" &&
                camp.paymentStatus == "paid" ? (
                  <td>
                    <button
                      className="btn btn-outline btn-accent"
                      onClick={() => handleConfirm(camp._id)}
                    >
                      Confirm
                    </button>
                  </td>
                ) : camp.paymentStatus == "pending" ? (
                  <td>
                    <button
                      className="btn btn-outline btn-accent"
                      onClick={() => handleCancel(camp._id)}
                    >
                      Cancel
                    </button>
                  </td>
                ) : (
                  <td>
                    <button className="btn btn-outline btn-accent" disabled>
                      Confirmed
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRegisteredCamps;
