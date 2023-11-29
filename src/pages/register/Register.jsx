import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "./../../hooks/useAuth";
import Section from "./../../components/utils/Section";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Particle from "../../components/utils/Particle";
const SignUp = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then(() => {
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            displayName: data.name,
            photoURL: data.photoURL,
            email: data.email,
            role: "participant",
          };
          axios.post("https://health-hub-server.vercel.app/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                icon: "success",
                title: "User created successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.error("Error creating user:", error);
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Oops! Something went wrong\n" + error.message,
            showConfirmButton: false,
            timer: 2500,
          });
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Health Hub | Register</title>
      </Helmet>
      <Particle></Particle>
      <Section subHeading={"Join us today!"} heading={"Register"} color={true}>
        <div className="hero min-h-screen">
          <div className="card bg-black/50 pb-8 flex-shrink-0 w-full max-w-xl mx-4 my-10 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white/80">Name:</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white/80">Photo URL:</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white/80">Email:</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white/80">Password:</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn w-full glass group text-white hover:text-accent"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="px-8 text-white/70">
              <small>
                Already have an account?{" "}
                <Link to="/login">
                  <span className="link link-accent">Login</span>
                </Link>
              </small>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SignUp;
