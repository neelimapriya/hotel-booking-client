import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

const Login = () => {
  const { login, googleLogin, logOut } = useContext(AuthContext);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const axios = useAxios();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    setErrorText("");

    login(email, password)
      .then((result) => {
        console.log(result.user);
        // const user={email}
        const res = axios.post("/auth/access-token", { email: result.user }, {withCredentials:true}).then(res=>{
          console.log(res.data)
          if(res?.data?.success){
            Swal.fire({
              title: "Logged in!",
              
              icon: "success"
            });
            
            navigate(location?.state ? location.state : "/");
          }else{
            logOut()
          }
        });

        

        console.log(res);
        e.target.reset();
      })
      .catch((error) => {
        setErrorText(error.message);
      });
  };

  const handleSignInGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className=" max-w-xl flex-shrink-0 w-full">
          <h2 className="text-center font-serif text-3xl">Your account</h2>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-serif text-xl">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder=" Email Address*"
                className=" w-full p-2 border focus border-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-serif text-xl">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-2 border border-black"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="py-3 text-2xl font-serif bg-black text-white hover:bg-slate-600">
                Login
              </button>
            </div>
          </form>
          <div
            onClick={handleSignInGoogle}
            className=" cursor-pointer max-w-3xl mx-auto flex  justify-center items-center"
          >
            <p className="font-serif  text-xl  items-center justify-center   text-center">
              or connect with :
            </p>
            <FcGoogle className="text-xl "></FcGoogle>
          </div>
          <br />

          <div className="text-center">
            <p className="text-md ">
              You are not part of{" "}
              <span className="font-semibold font-serif">Lartisien</span> ?
              <Link className="underline ml-2" to="/register">
                CREATE AN ACCOUNT
              </Link>
            </p>
          </div>

          <div>
            {errorText && (
              <p className="text-center text-xl text-red-600">{errorText}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
