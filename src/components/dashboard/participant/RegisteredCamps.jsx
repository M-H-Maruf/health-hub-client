import { useQuery } from "@tanstack/react-query";
import { getRegisteredCamps } from "../../../api/camps";
import useAuth from './../../../hooks/useAuth';

const RegisteredCamps = () => {
  const { user } = useAuth()
  const { data: camps = [] } = useQuery({
    queryKey: ["registered-camps", user.email],
    queryFn: () => getRegisteredCamps(user.email),
    refetchInterval: 10000,
  });

  const handlePayment = ()=>{}

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
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
            {/* Map over camps and render each row */}
            {camps.map((camp, index) => (
              <tr key={index}>
                <td>{camp.campName}</td>
                <td>{new Date(camp.scheduledDateTime).toLocaleDateString('en-GB')}</td>
                <td>{camp.venueLocation}</td>
                <td>{camp.campFees}</td>
                <td>{camp.paymentStatus}</td>
                <td>{camp.confirmationStatus}</td>
                <td>
                  {/* Add your action buttons or links here */}
                  {/* For example: */}
                  <button onClick={() => handlePayment(camp.id)}>
                    Pay
                  </button>
                  {/* Add more actions as needed */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {camps.length}
    </div>
  );
};

export default RegisteredCamps;
