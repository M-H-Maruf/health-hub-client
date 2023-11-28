import { useQuery } from "@tanstack/react-query";
import { getAllCamps } from "../../../api/camps";
import useAuth from "./../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const ManageCamps = () => {
  const { user } = useAuth();
  const { data: camps = [] } = useQuery({
    queryKey: ["camps", user.email],
    queryFn: () => getAllCamps(user.email),
    refetchInterval: 10000,
  });

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

                <td className="flex gap-4">
                  <Link to={`/dashboard/update-camp/${camp._id}`}>
                    <button className="btn btn-outline btn-accent">
                      <FaEdit className="text-2xl"></FaEdit>
                    </button>
                  </Link>

                  <button className="btn btn-outline btn-accent">
                    <FaTrashAlt className="text-2xl"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCamps;
