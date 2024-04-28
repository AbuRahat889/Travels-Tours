import {
    sendPasswordResetEmail,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
  } from "firebase/auth";
  import { Helmet } from "react-helmet-async";
  import { useContext, useRef, useState } from "react";
  import { FaEye, FaEyeSlash } from "react-icons/fa";
  import auth from "../firebase";
  import { Link, useLocation, useNavigate } from "react-router-dom";
  import { AuthContex } from "../../Contex/AuthProvider";
  
  
  const SignIn = () => {
    const [showError, setShowError] = useState();
    const [success, setSuccess] = useState();
    const [showPass, setShowPass] = useState(true);
    const [user, setUser] = useState({});
    const emailRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
  
    const {signIn} = useContext(AuthContex);
  
    //sigb in facebook
    const fbProvider = new FacebookAuthProvider();
    const hendleFaceBookForm = () => {
      signInWithPopup(auth, fbProvider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;
  
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          alert("successfully sign in!!!")
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);
          alert(errorMessage);
        });
    };
  
  
    //sign in google
    const provider = new GoogleAuthProvider();
  
    const hendleGoogleForm = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const logInUsesr = result.user;
          console.log(logInUsesr);
          setUser(logInUsesr);
          alert("sign in successfully!!")
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    };
  
    const handleSignIn = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      if (password.length < 6) {
        setShowError("PassWord Should be at least 6 charecter!!");
        return;
      } else if (!/[A-Z]/.test(password)) {
        setShowError("PassWord must be one upercase!!");
        return;
      }
  
      //reset user
      setShowError(" ");
      setSuccess(" ");
  
      //sign in
      signIn( email, password)
        .then((res) => {
          // const user = res.user;
          alert("Successfully sign in your account");
          e.target.reset();
  
          //logain page redirect this page
          navigate(location?.state ? location.state : '/');
          
          
  
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    };
  
    //handle Forgot Password
    const handleForgotPass = () => {
      const email = emailRef.current.value;
      if (!email) {
        alert("please provide an email!!")
        return;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("please write a valied email");
        return;
      }
  
      //send Forgot Password
      sendPasswordResetEmail(auth, email)
        .then(() =>toast.success("check your email"))
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    };
  
    return (
      <div>
        <Helmet>
          <title>WanderWise | sign in</title>
        </Helmet>
  
        <div className=" text-center bg-[#004c85]">
          <h1 className="text-4xl font-semibold p-5 text-white">Sign In</h1>
        </div>
        <div className="hero bg-base-200 ">
          <div className="card w-full max-w-sm shadow-2xl bg-base-100 my-10">
            <form className="card-body" onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  ref={emailRef}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
  
                <div className="input input-bordered flex items-center justify-between">
                  <input
                    name="password"
                    type={showPass ? "password" : "text"}
                    placeholder="password"
                    required
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="cursor-pointer"
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
  
                <label onClick={handleForgotPass} className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div>
                <input type="checkbox" name="terms" id="" required />
                <label htmlFor="terms" className="ml-2">
                  accept our <a href="#">trems and condition</a>
                </label>
              </div>
  
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign in"
                />
              </div>
  
              <div className="mt-4 text-center">
                <button onClick={hendleGoogleForm} className="text-red-600 w-10 mr-3">
                  <img src="https://i.ibb.co/RjhSfHz/googlelogo.jpg" alt="" />
                </button>
  
                <button>
                  <img onClick={hendleFaceBookForm} className="text-red-600 w-10" src="https://i.ibb.co/1ztV5Pf/Facebook-icon-svg.webp" alt="" />
                </button>
              </div>
  
              <p>
                If you new to this website?{" "}
                <Link to="/signup" className="underline font-bold">
                  Please Sign up
                </Link>
              </p>
            </form>
  
            {showError && <p className="text-red-600 pl-8 pb-5">{showError}</p>}
            {success && <p className="text-green-600 pl-8 pb-5">{success}</p>}
          </div>
        </div>
      </div>
    );
  };
  
  export default SignIn;
  