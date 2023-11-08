import { Helmet } from 'react-helmet';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Swal from "sweetalert2";
// contact
const Contact = () => {

  const handleSend = (e) => {
    e.preventDefault();
    const form= e.target;
    const name = form.name.value;
    const email = form.email.value;
    const text = form.text.value;
    console.log(email,name,text);
    const contactData={email, name, text}

    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Thank you!", "We will contact you soon!", "success");
          form.reset()
        }
      });
  };


  return (
    <div>
      <Helmet>
        <title>Lartisien | Contact</title>
      </Helmet>
      <div className="mt-20 p-5 flex flex-col md:flex-row max-w-5xl mx-auto text-black font-serif">
       
      <div className=" md:w-1/2">
        <img src="https://i.ibb.co/tMXk6D6/LogoL.png" alt="" className="w-16" />
        <h2 className="text-2xl font-semibold font-serif mb-3">Address</h2>
        <hr className="w-32 " />
        <h2 className="text-2xl font-semibold">+44 20 3519 2700</h2>
        <p className="text-base mb-3">Book online or call</p>
        <h2 className="text-2xl font-semibold">contact@lartisien.com</h2>
        <div className='flex items-center '>
        <p className="text-base mb-3">Send us an email or use contact form</p><AiOutlineArrowRight className='text-xl ml-2 '></AiOutlineArrowRight>
        </div>
        <h2 className="text-2xl font-semibold">Our address</h2>
        <p className="text-base mb-3">
          Grand Luxury. 228 Rue de Rivoli. Paris, 75002, FR · G.L.H Services ltd
        </p>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 md:ml-20">
        <h2 className="text-2xl font-semibold font-serif">SEND US A MESSAGE</h2>
        <hr className="w-52 " />
        <form onSubmit={handleSend} className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-serif">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="First and Last Name"
              className="border border-black p-2"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="border w-full border-black p-2"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="border border-black p-2"
              id="text"
              name="text"
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input type='submit' value='Send' className="btn bg-black text-white hover:bg-slate-700"/>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
