import React, { use, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { auth, AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const { signIn, googleSignIn, updateUser, setUser } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.pass.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          title: "Loged In Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
        });
      });
  };

  const handleForgetPass = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          title: "Password reset email sent!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          title: "Loged In Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
        });
      });
  };
  return (
    <div className="py-18 flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="fieldset bg-base-200 border-primary rounded-box w-sm border p-4"
      >
        <legend className="fieldset-legend justify-center text-xl font-bold">
          Login
        </legend>

        <label className="label font-semibold">Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Email"
          name="email"
          required
        />

        <label className="label font-semibold">Password</label>
        <div className="relative">
          <input
            name="pass"
            required
            type={showPass ? "text" : "password"}
            className="input w-full"
            placeholder="Password"
          />
          <div
            onClick={() => {
              setShowPass(!showPass);
            }}
            className="absolute top-0 right-0 btn btn-ghost"
          >
            {showPass ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
        <div onClick={handleForgetPass}>
          <a className="link link-hover">Forgot password?</a>
        </div>

        <button type="submit" className="btn btn-primary text-white mt-4">
          Login
        </button>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p className="text-center pt-5">
          Dont’t Have An Account ?<span> </span>
          <Link to={"/auth/registration"} className="text-primary font-bold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
