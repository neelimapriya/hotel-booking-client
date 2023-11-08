import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxios = () => {
    const {logOut}=useContext(AuthContext)
    const navigate=useNavigate()

    useEffect(()=>{
      instance.interceptors.response.use(
        function (response) {
          return response;
        },
        function (error) {
            if(error.response.status === 401|| error.response.status===403){
                logOut()
                .then(()=>{
                  navigate('/login')
                })
                .catch(error=>console.log(error))
            }
        //   return Promise.reject(error);
        });
    },[])
 
  
  return instance;
};

export default useAxios;
