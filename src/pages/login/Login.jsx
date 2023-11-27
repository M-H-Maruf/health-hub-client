import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Section from "../../components/utils/Section";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Particle from "../../components/utils/Particle";

const Login = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2500,
        text: "Password must be at least 6 characters long",
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2500,
        text: "Password must contain at least one capital letter",
      });
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Swal.fire({
        icon: "error",
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2500,
        text: "Password must contain at least one special character",
      });
      return;
    }

    signIn(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Sign In Succeeded",
          showConfirmButton: false,
          timer: 2500,
        });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        let errorSignIn = "";
        if (error.code == "auth/invalid-login-credentials") {
          errorSignIn = "Email or password doesn't match";
        } else {
          errorSignIn = error.code;
        }
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Oops! Something went wrong.\n" + errorSignIn,
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };
  return (
    <div className=" min-h-screen">
      <Helmet>
        <title>Health Hub | Login</title>
      </Helmet>
      <Particle></Particle>
      <Section
        subHeading={"Start the journey now!"}
        heading={"Login"}
        color={true}
      >
        <div className="hero">
          <div className="card bg-black/50 p-8 flex-shrink-0 w-full max-w-xl mx-4 my-10 shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="flex flex-col gap-8">
              <div className="grid justify-center grid-cols-1 items-center gap-6 my-6">
                <div className="form-control">
                  <label className="input-group">
                    <span className="text-accent">Email:</span>
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered input-accent w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span className="text-accent ">Password:</span>
                    <input
                      name="password"
                      type="password"
                      placeholder="Your Password"
                      className="input input-bordered input-accent w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="form-control -mt-6">
                <button className="btn glass text-white hover:text-accent">
                  Log in
                </button>
              </div>
            </form>
            <p className="mt-5 text-white/70">
              <small>
                New here at Health Hub{" "}
                <Link to="/register">
                  <span className="link link-accent">Register</span>
                </Link>
              </small>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Login;
