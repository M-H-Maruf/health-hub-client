import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ParticipantMenu = () => {
  return (
    <div>
      <div className="text-accent font-semibold opacity-80 flex flex-col gap-5">
        <Link to="participant-profile">
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            PROFILE
          </motion.p>
        </Link>
        <Link to="registered-camps">
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            REGISTERED CAMPS
          </motion.p>
        </Link>
        <Link to="payment-history">
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            PAYMENT HISTORY
          </motion.p>
        </Link>
        <Link to="feedback-and-ratings">
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            FEEDBACKS AND RATINGS
          </motion.p>
        </Link>
      </div>
    </div>
  );
};

export default ParticipantMenu;
