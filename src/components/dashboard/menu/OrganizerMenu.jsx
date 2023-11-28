import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OrganizerMenu = () => {
  return (
    <div>
      <div className="text-accent uppercase font-semibold opacity-80 flex flex-col gap-5">
        <Link to="/dashboard">
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            PROFILE
          </motion.p>
        </Link>
        <Link to="add-camp">
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Add a Camp
          </motion.p>
        </Link>
        <Link to="manage-camps">
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Manage Camps
          </motion.p>
        </Link>
        <Link to="manage-registered-camps">
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Manage Registered Camps
          </motion.p>
        </Link>
        <Link to="add-upcoming-camp">
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Add an Upcoming Camp
          </motion.p>
        </Link>
        <Link to="manage-upcoming-camps">
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Manage Upcoming Camps
          </motion.p>
        </Link>
      </div>
    </div>
  );
};

export default OrganizerMenu;
