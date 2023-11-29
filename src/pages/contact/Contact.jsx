import Tilt from "react-parallax-tilt";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Section from "../../components/utils/Section";
import Particle from "./../../components/utils/Particle";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const AvailableCamps = () => {
  const form = useRef();
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://gist.githubusercontent.com/M-H-Maruf/3f8753a4cd504d5234521d200faa43b5/raw/6b50aea6af5bcfec22c083633183ec9715dfcc30/contact.json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
  const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        const formData = e.target;
        formData.user_name.value = "";
        formData.user_email.value = "";
        formData.message.value = "";
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Email sent successfully",
          showConfirmButton: false,
          timer: 2500,
        });
      },
      () => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Oops! Something went wrong",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    );
  };

  if (
    serviceId == undefined ||
    templateId == undefined ||
    publicKey == undefined
  ) {
    Swal.fire({
      icon: "error",
      title: "Sorry!",
      text: "Email service is not working",
      showConfirmButton: false,
      timer: 2500,
    });
  }

  return (
    <div className="bg-black/40 pt-10">
      <Helmet>
        <title>Health Hub | Contact us</title>
      </Helmet>
      <Particle></Particle>
      <Section
        heading={"Contact Us"}
        subHeading={"Reach Out for Health Support"}
      >
        <div className="hero bg-black/50 mt-10 rounded-lg px-4 md:px-8 lg:px-16 py-4 md:py-8 lg:py-16 ">
          <Tilt className="w-full" scale={1.05} tiltEnable={false}>
            <div className="hero-content bg-black/50 py-4 md:py-8 lg:py-16  px-4 md:px-8 lg:px-16  w-full rounded-lg grid gap-16 justify-center items-center lg:grid-cols-2 grid-cols-1">
              <div className="mx-auto w-fit">
                <Lottie
                  style={{ width: "100%", height: "100%" }}
                  animationData={data}
                ></Lottie>
              </div>
              <form
                data-aos="flip-left"
                className="flex flex-col gap-8"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="flex flex-col justify-center items-start">
                  <label className="w-full text-left text-accent">Name:</label>
                  <input
                    className="w-full text-white bg-white/30 rounded p-2 border border-gray-300 "
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label className="w-full text-left text-accent">Email:</label>
                  <input
                    className="w-full text-white bg-white/30 rounded p-2 border border-gray-300 "
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label className="w-full text-left text-accent">
                    Message:
                  </label>
                  <textarea
                    className="w-full text-white bg-white/30 rounded p-2 border border-gray-300  h-40"
                    name="message"
                    placeholder="Your Message..."
                    required
                  />
                </div>

                <input
                  className="btn btn-outline btn-accent text-white"
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
          </Tilt>
        </div>
      </Section>
    </div>
  );
};

export default AvailableCamps;
