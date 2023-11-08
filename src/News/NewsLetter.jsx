import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form= e.target;
    const email = form.email.value;
    console.log(email);
    const newsData={email}

    fetch("https://hotel-server-wheat.vercel.app/news", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newsData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Welcome!", "You are subscribed to our newsletter!", "success");
          form.reset()
        }
      });
  };

  return (
    <div className="relative ">
      

      <div className="">
        <img
          className="h-screen w-full"
          src="https://i.ibb.co/f2G3dWb/flower-product-backdrop-with-tulip-green.jpg"
          alt=""
        />
      </div>

      <div className="bg-white md:mb-5  absolute bottom-1 lg:w-1/2 ml-5 border border-slate-900">
        <p className="mt-10 w-3/4 mx-auto text-xl font-thin text-center">
          FOR EXCLUSIVE BENEFITS, INSIDER NEWS AND OUT-OF-THE-BOX TRAVEL
          INSPIRATIONS
        </p>
        <h2 className="w-3/4 mt-5 mx-auto font-bold text-3xl font-serif text-center ">
          Sign up for our newsletter
        </h2>
        <form onSubmit={handleSubmit} className="w-3/4 card-body   mx-auto">
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              className="underline text-center"
              value="SIGN UP"
            />
          </div>
        </form>
        <p className="text-xs w-3/4 mx-auto md:mt-10 mb-5">
          Your personal data is to be used by the legal entity LARTISIEN SARL in
          order to provide you with the LARTISIEN services that you requested,
          to send you information on LARTISIEN activities and services and to
          provide offers tailored to your interests. To find out more about
          LARTISIEN processing of your personal data and your rights, please
          consult our Privacy Policy at the following address:{" "}
          <Link to="/terms">
            <span className="text-base underline">Privacy policy</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
