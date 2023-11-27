import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Section from "../../../utils/Section";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const camp = useLoaderData();
    return (
        <div>
            <Section heading="Payment" subHeading="Please pay to join">
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm camp={camp}></CheckoutForm>
                </Elements>
            </div></Section>
        </div>
    );
};

export default Payment;