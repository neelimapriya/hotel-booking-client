import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import Swal from "sweetalert2";
import Login from "./Login";


const Register = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { createUser,googleLogin, login } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("register");
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
    
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, photo, email, password);
    
        if (password.length < 6) {
          Swal.fire({
            icon: "error",
            title: "Your password at least have 6 characters",
          });
        } else if (!/[A-Z]/.test(password)) {
          Swal.fire({
            icon: "error",
            title: "Your Password Should have at least one uppercase character",
          });
          return;
        } else if (!/[!@#$%^&*()_+]/.test(password)) {
          Swal.fire({
            icon: "error",
            title: "Your Password Should have at least one special character",
          });
          return;
        }
    
        createUser(email, password)
          .then((result) => {
            console.log(result.user);
    
            updateProfile(result.user, {
              displayName: name,
              photoURL: photo,
            })
            .then(()=>login(email,password))
              .catch((error) => {
                console.log(error);
              });
            Swal.fire({
              icon: "success",
              title: "Your account created successfully",
            });
    
              e.target.reset()
          })
    
          .catch((error) => {
            console.log(error);
            setErrorMessage(error.message);
          });
      };
      const handleSignInGoogle = () => {
        googleLogin()
          .then((result) => {
            const user = result.user;
            console.log(user);
            Navigate(location?.state ? location.state : "/");
          })
          .catch((error) => {
            console.error(error.message);
          });
      };
    return (
        <div>
        <div className="hero min-h-screen">
          <div className=" max-w-xl flex-shrink-0 w-full">
              <h2 className="text-center font-serif text-3xl"> Create Your account</h2>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-serif text-xl">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className=" w-full p-2 border focus border-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-serif text-xl">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder=" Photo Url"
                  className=" w-full p-2 border focus border-black"
                  
                />
              </div>
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
                <button className="py-3 text-2xl font-serif bg-black text-white hover:bg-slate-600">Register</button>
              </div>
            </form>
            <div onClick={handleSignInGoogle} className=" cursor-pointer max-w-3xl mx-auto flex  justify-center items-center">
              
                <p className="font-serif  text-xl  items-center justify-center   text-center">
                  
                or connect with :
                </p>
                <FcGoogle className="text-xl "></FcGoogle>
              </div>
              <br />
              
              <div className="text-center">
                    <p className="text-md ">
                     
                    Already Have Account in <span className="font-semibold font-serif">Lartisien</span> ?
                      <Link className="underline ml-2" to="/login">
                        
                      Please Login
                      </Link>
                    </p>
                  </div>
  
              <div>
                {/* {errorText && (
                  <p className="text-center text-xl text-red-600">{errorText}</p>
                )} */}
              </div>
          </div>
        </div>
      </div>
    );
};

export default Register;