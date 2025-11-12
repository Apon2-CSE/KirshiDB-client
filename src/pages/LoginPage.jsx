import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import alert from "../lib/utils/alert";
import {
  loginUser,
  loginWithProvider,
  GoogleProvider,
} from "../services/firebase";
import { useAuth } from "../providers/AuthProvider";
import useToggle from "../hooks/useToggle";

import ScrollToTop from "../components/shared/ScrollToTop";
import PageTitle from "../components/shared/PageTitle";

const LoginPage = () => {
  const { setUser } = useAuth();
  const { value: showPassword, toggle: toggleShowPassword } = useToggle();
  const {
    register: registerFormField,
    reset: resetForm,
    watch,
    handleSubmit,
    formState: { errors: formErrors, isSubmitting: formIsSubmitting },
  } = useForm();
  const { state: redirectTo } = useLocation();
  const navigate = useNavigate();

  const email = watch("email");

  const handleAuthResult = (success, user, message) => {
    if (success) {
      setUser(user);
      resetForm();
      alert.success(
        "Logged In!",
        `You are successfully logged in as: ${user.displayName}.`
      );
      navigate(redirectTo || "/");
    } else {
      alert.error("Oops!", message);
    }
  };

  const handleLogin = async (formData) => {
    const { email, password } = formData;
    const { success, user, message } = await loginUser(email, password);
    handleAuthResult(success, user, message);
  };

  const handleLoginWithGoogle = async () => {
    const { success, user, message } = await loginWithProvider(GoogleProvider);
    handleAuthResult(success, user, message);
  };

  return (
    <>
      <ScrollToTop />
      <PageTitle title="Login" />

      <motion.form
        onSubmit={handleSubmit(handleLogin)}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full max-w-md mx-auto mt-10 p-4"
      >
        <fieldset className="fieldset bg-green-50 border border-green-200 rounded-2xl p-8 shadow-lg">
          <legend className="text-3xl font-extrabold text-green-800 text-center mb-6">
            🌾 Login
          </legend>

          <div className="flex flex-col gap-4">
            <label className="label font-semibold text-green-700">Email</label>
            <input
              {...registerFormField("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="input input-bordered w-full border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-300"
              placeholder="Enter your email"
            />
            {formErrors.email && (
              <p className="text-red-600 text-sm">{formErrors.email.message}</p>
            )}

            <label className="label font-semibold text-green-700">
              Password
            </label>
            <div className="relative">
              <input
                {...registerFormField("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "At least 6 characters" },
                  validate: {
                    hasUppercase: (v) => /[A-Z]/.test(v) || "Include uppercase",
                    hasLowercase: (v) => /[a-z]/.test(v) || "Include lowercase",
                    hasNumber: (v) => /[0-9]/.test(v) || "Include number",
                    hasSpecial: (v) =>
                      /[!@#$%^&*]/.test(v) || "Include special char",
                  },
                })}
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-300"
                placeholder="Enter your password"
              />
              {formErrors.password && (
                <p className="text-red-600 text-sm mt-1">
                  {formErrors.password.message}
                </p>
              )}
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute top-1/2 right-2 -translate-y-1/2 text-green-600 hover:text-green-800"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          <div className="mt-3 text-right">
            <Link
              to="/reset-password"
              state={email}
              className="link text-green-700 hover:underline text-sm"
            >
              Forgot password?
            </Link>
          </div>

          <div className="my-4 text-center text-sm">
            <span>Don't have an account? </span>
            <Link
              to="/register"
              className="text-green-800 font-semibold underline"
            >
              Register
            </Link>
          </div>

          <motion.button
            type="submit"
            className="btn bg-green-700 hover:bg-green-800 text-white w-full mb-3"
            disabled={formIsSubmitting}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {formIsSubmitting ? "Logging in..." : "Login"}
          </motion.button>

          <div className="divider text-green-600">OR</div>

          <button
            type="button"
            onClick={handleLoginWithGoogle}
            className="btn w-full border-green-600 text-green-700 hover:bg-green-100 gap-2"
          >
            <FcGoogle size={20} />
            <span className="text-sm">Continue with Google</span>
          </button>
        </fieldset>
      </motion.form>
    </>
  );
};

export default LoginPage;
