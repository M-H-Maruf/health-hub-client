import { useQuery } from "@tanstack/react-query";
import { getRegisteredCamps } from "../../../api/camps";
import useAuth from "./../../../hooks/useAuth";
import { Link } from "react-router-dom";

const AcceptedCamps = () => {
  const { user } = useAuth();
  const { data: camps = [] } = useQuery({
    queryKey: ["registered-camps", user.email],
    queryFn: () => getRegisteredCamps(user.email),
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
                <td>
                  <Link to={`/camp-details/${camp.campId}`}>
                    <button className="btn btn-outline btn-accent">Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcceptedCamps;
