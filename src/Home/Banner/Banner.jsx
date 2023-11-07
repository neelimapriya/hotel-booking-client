

const Banner = () => {
    return (
       <div>
        <div className='relative'>
      
      <div className="h-screen w-full flex ">
      <div className="w-1/2 h-full overflow-hidden relative cursor-pointer transition-[width] hover:w-[70vw] duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10 flex items-center justify-center flex-col px-6 py-8 font-bold text-white">
          <h1 className="[text-shadow:_0_0_10px_rgb(0_0_0_/_80%)] text-2xl  font-serif hover:text-orange-500 border border-black border-double">LARTISIEN</h1> 
          <p className="text-xs">GRAND LUXURY HOTELS REBORN</p>
        </div>
        <div className="w-[70vw] h-full absolute top-0 left-0"><img src="https://i.ibb.co/72VbYfS/PG-24-25-Spice-September-2021.jpg" className="w-full h-full object-cover" alt="" /></div>
      </div>
      <div className="w-1/2 h-full overflow-hidden relative cursor-pointer transition-[width] hover:w-[70vw] duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10 flex items-center justify-center text-center px-6 py-8 font-bold text-white">
          <h1 className="[text-shadow:_0_0_10px_rgb(0_0_0_/_80%)] text-xs">BOOK YOUR EXPERIENCES WITH <br /> <span className="text-2xl  font-serif hover:text-orange-500 border border-black">LARTISIEN !</span></h1>
        </div>
        <div className="w-[70vw] h-full absolute top-0 right-0"><img src="https://i.ibb.co/3r9WYVD/luxury-hotel.jpg" className="w-full h-full object-cover" alt="" /></div>
      </div>
    </div>
     </div>
     <div className="bg-orange-800 text-center text-white">
      <h2 className="text-2xl font-serif py-2">The World Is Right Here</h2>
      <h2 className="text-3xl font-serif font-bold">STOP CLICKING AROUND.START SAVING.</h2>
      <p className="bg-white text-orange-800 text-2xl font-serif font-semibold py-2 w-52 mx-auto">UP TO 10% OFF</p>
      <p className="text-2xl font-serif py-2">FLASH SALE LIMITED TIME ONLY</p>

     </div>
       </div>
    );
};

export default Banner;