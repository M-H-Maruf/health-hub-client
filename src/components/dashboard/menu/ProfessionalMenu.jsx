import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProfessionalMenu = () => {
  return (
    <div>
      <div className="text-accent font-semibold opacity-80 flex flex-col gap-5">
        <Link to="/dashboard">
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            PROFILE
          </motion.p>
        </Link>
        <Link to="accepted-camps">
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            ACCEPTED CAMPS
          </motion.p>
        </Link>
      </div>
    </div>
  );
};

export default ProfessionalMenu;
