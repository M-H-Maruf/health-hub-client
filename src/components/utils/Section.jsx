import Container from "./Container";
import "./section.css";

const Section = ({ children, heading, subHeading, color }) => {
  return (
    <Container>
      <div className="py-20 ">
        <div
          data-aos="fade-down"
          className="relative mb-16 mt-5 mx-auto text-center z-10"
        >
          <span
            className={`${
              color ? "text-white/70" : "text-white"
            } opacity-80 font-bold uppercase`}
          >
            {subHeading}
          </span>
          <h2
            className={`${
              color ? "text-black/80" : "text-accent"
            } text-6xl uppercase tracking-wider font-extrabold font-teko`}
          >
            {heading}
            <span className="animate-blink text-4xl font-orbitron">_</span>
          </h2>
        </div>
        <div className="relative my-16 z-10">{children}</div>
      </div>
    </Container>
  );
};

export default Section;
