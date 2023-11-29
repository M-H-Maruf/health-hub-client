import Swal from "sweetalert2";
import Section from "./../utils/Section";
import { motion } from "framer-motion";
import axios from "axios";

const NewsLetter = () => {
  const handleNewsletter = async (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;

    const newEmail = {
      email,
    };

    try {
      const response = await axios.post(
        "https://health-hub-server.vercel.app/newsletter",
        JSON.stringify(newEmail),
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(response);

      if (response.status == 201) {
        form.email.value = "";
        Swal.fire({
          title: "Success!",
          text: "Thank you for subscribing to our newsletter!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to subscribe to newsletter!",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.response.data.error}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <Section
        heading={"Newsletter"}
        subHeading={"Stay tuned with us"}
        color={true}
      >
        {" "}
        <div className="py-24 px-4 md:px-28 flex justify-center items-center z-20">
          <div
            data-aos="flip-right"
            className=" bg-black/80 bg-[url('https://i.postimg.cc/sgNF6ptt/retrosupply-j-Lw-VAUt-LOAQ-unsplash.jpg')] bg-cover bg-center bg-blend-darken shadow-2xl min-h-[400px] py-24 px-4 md:px-28 gap-4 rounded-lg w-full h-full flex flex-col justify-center items-center"
          >
            <h2
              data-aos="fade-up"
              className="font-teko tracking-wider text-white/90 text-center text-3xl font-semibold uppercase"
            >
              Sign up to our newsletter today and get the latest updates on
              HEALTH HUB.
            </h2>
            <form
              onSubmit={handleNewsletter}
              data-aos="fade-up"
              className="w-3/4 flex justify-center"
            >
              <input
                name="email"
                className="h-12 placeholder:text-accent text-white/80 bg-black/60 flex-1 rounded-l-lg px-4 focus:outline-accent"
                placeholder="Please enter your email address"
                type="email"
                required
              />
              <motion.input
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="hover:text-accent h-12 hover:bg-black/60 text-white/80 bg-accent px-4 py-2 border-2 border-accent rounded-r-lg"
              />
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default NewsLetter;
