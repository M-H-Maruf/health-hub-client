import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axiosSecure from "../../../../api";
import useAuth from "../../../../hooks/useAuth";

const CheckoutForm = ({ camp }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: camp.campFees })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [camp.campFees]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user.email,
          price: camp.campFees,
          transactionId: paymentIntent.id,
          date: new Date(),
          campId: camp._id,
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        if (res.data?.paymentResult?.campId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for the Payment",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/payment-history");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              fontWeight: "700",
              color: "#fff",
              "::placeholder": { fontWeight: "700", color: "#fff" },
            },
            invalid: { fontWeight: "700", color: "#DC143C" },
          },
        }}
      />
      <button
        className="btn btn-md btn-accent text-white/80 my-4 text-lg font-semibold"
        type="submit"
      >
        Pay
      </button>
      <p className="text-red-700 text-lg font-semibold">{error}</p>
      {transactionId && (
        <p className="text-white text-lg font-semibold"> Your transaction id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
