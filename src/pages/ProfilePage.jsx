import { Link } from "react-router";
import { motion } from "framer-motion";

import { useAuth } from "../providers/AuthProvider";

import ScrollToTop from "../components/shared/ScrollToTop";
import PageTitle from "../components/shared/PageTitle";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <>
      <ScrollToTop />
      <PageTitle title="Profile" />

      <motion.div
        className="relative bg-green-50 border border-green-200 rounded-2xl shadow-xl w-fit p-16 mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <figure className="absolute -top-16 w-32 h-32 rounded-full overflow-hidden bg-green-100 shadow-md">
          <motion.img
            src={user.photoURL}
            alt="User Avatar"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.25 }}
            transition={{ type: "spring", stiffness: 250 }}
          />
        </figure>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-green-800">
            {user.displayName}
          </h2>
          <p className="text-green-700/70 mt-1">{user.email}</p>
        </div>

        <motion.button
          className="btn bg-green-700 hover:bg-green-800 text-white btn-wide mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/update-profile">Update Profile</Link>
        </motion.button>
      </motion.div>
    </>
  );
};

export default ProfilePage;
