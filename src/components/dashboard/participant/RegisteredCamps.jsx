import { useQuery } from "@tanstack/react-query";
import { getRegisteredCamps } from "../../../api/camps";
import useAuth from "./../../../hooks/useAuth";
import { Link } from "react-router-dom";

const RegisteredCamps = () => {
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
                {camp.paymentStatus == "pending" ? (
                  <td>
                    <Link to={"/dashboard/payment"}>
                    <button className="btn btn-outline btn-accent">Pay</button></Link>
                  </td>
                ) : (<td>
                  <button className="btn btn-outline btn-accent" disabled>
                    Paid
                  </button></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredCamps;
