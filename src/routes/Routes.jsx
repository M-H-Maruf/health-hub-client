import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/login/Login";
import Register from "./../pages/register/Register";
import Dashboard from "../layouts/Dashboard";
import AvailableCamps from "../pages/availableCamps/AvailableCamps";
import Contact from "../pages/contact/Contact";
import CampDetails from "./../pages/campDetails/CampDetails";
import PrivateRoute from "./PrivateRoute";
import Profile from "./../components/dashboard/participant/Profile";
import RegisteredCamps from "./../components/dashboard/participant/RegisteredCamps";
import PaymentHistory from "./../components/dashboard/participant/PaymentHistory";
import FeedbackRating from "./../components/dashboard/participant/FeedbackRating";
import Payment from "./../components/dashboard/participant/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/available-camps",
        element: (
          <PrivateRoute>
            <AvailableCamps />
          </PrivateRoute>
        ),
      },
      {
        path: "/camp-details/:campId",
        element: (
          <PrivateRoute>
            <CampDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/camp-details/${params.campId}`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "registered-camps",
        element: (
          <PrivateRoute>
            <RegisteredCamps />
          </PrivateRoute>
        ),
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/registered/${params.id}`),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "feedback-and-ratings",
        element: (
          <PrivateRoute>
            <FeedbackRating />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
