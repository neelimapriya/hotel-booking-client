import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='p-10 flex flex-col justify-center '>
            <img className='w-1/2 mx-auto' src="https://i.ibb.co/LxhhbxD/404-error-with-landscape-concept-illustration-114360-7898.jpg" alt="" />
            <Link className="w-1/3 mx-auto" to="/"><button className="text-4xl text-center font-serif mt-4 bg-green-600 text-white p-3 rounded-lg ">GO BACK</button></Link>
        </div>
    );
};

export default ErrorPage;