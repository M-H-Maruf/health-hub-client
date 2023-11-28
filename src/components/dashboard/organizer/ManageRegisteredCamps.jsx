import { useQuery } from "@tanstack/react-query";
import { getRegisteredCamps } from "../../../api/camps";
import useAuth from "./../../../hooks/useAuth";

const ManageRegisteredCamps = () => {
  const { user } = useAuth();
  const { data: camps = [] } = useQuery({
    queryKey: ["registered-camps", user.email],
    queryFn: () => getRegisteredCamps(user.email),
    refetchInterval: 10000,
  });

  const handleConfirm = () => {};

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
                      onClick={handleConfirm}
                    >
                      Confirm
                    </button>
                  </td>
                ) : (
                  <td>
                    <button className="btn btn-outline btn-accent" disabled>
                      Confirm
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
