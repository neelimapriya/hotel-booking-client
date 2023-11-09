import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "../hooks/useAxios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import BookingCard from "./BookingCard";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export const Bookings = () => {
  const { User } = useContext(AuthContext);
  const email = User?.email;
  console.log(email);

  const axios = useAxios();
  const { data: bookings } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axios.get(`/user/bookings?email=${email}`);
      return res;
    },
  });
  console.log(bookings?.data);

  //    delete operation
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["booking"],

    mutationFn: (id) => {
      return axios.delete(`/user/cancel-bookings/${id}`);
    },
    onSuccess: () => {
      Swal.fire("Deleted!", "Your Product has been deleted.", "success");
      queryClient.invalidateQueries({ queryKey: ["booking"] });
    },
  });

  return (
    <div>
      <Helmet>
        <title>Lartisien | My Bookings</title>
      </Helmet>
      <div className="mt-16 md:mt-32">
        {bookings?.data?.length == 0 && (
          <div>
            <h2 className="bg-orange-800 text-3xl font-serif text-center text-white py-3 ">
              Your Bookings : {bookings?.data?.length} Room
            </h2>
            <div className="flex justify-center mt-5 items-center gap-2 underline underline-offset-1">
              <FaArrowLeft></FaArrowLeft>
              <Link to="/room"> You can visit our available Rooms! </Link>
            </div>
          </div>
        )}
      </div>
      {bookings?.data?.length !== 0 && (
        <h2 className="bg-orange-800 text-3xl font-serif text-center text-white py-3 ">
          Your Bookings : {bookings?.data?.length} Rooms
        </h2>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 max-w-6xl mx-auto">
        {bookings?.data?.map((books) => (
          <BookingCard
            key={books._id}
            mutate={mutate}
            books={books}
          ></BookingCard>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
