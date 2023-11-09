import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='p-10 flex flex-col justify-center bg-black h-screen'>
            {/* <img className='w-1/2 mx-auto' src="https://i.ibb.co/LxhhbxD/404-error-with-landscape-concept-illustration-114360-7898.jpg" alt="" /> */}
            <div className=" h-72 w-2/3 mx-auto">
        <h2 className="text-9xl text-center font-extrabold animate-bounce opacity-75 text-red-700">404</h2>
        <p className="text-5xl text-gray-200 text-center font-bold hover:text-red-600 hover:outline-white hover:outline">NOT FOUND</p>
            </div>
            <Link className="w-1/3 mx-auto flex justify-center" to="/"><button className="text-4xl text-center font-serif mt-4 bg-green-600 text-white p-3 rounded-lg animate-pulse">GO BACK</button></Link>
        </div>
    );
};

export default ErrorPage;