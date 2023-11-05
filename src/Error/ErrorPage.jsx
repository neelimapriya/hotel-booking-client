import img from '../assets/Error.jpg'

const ErrorPage = () => {
    return (
        <div className='p-10'>
            <img className='w-screen h-screen' src={img} alt="" />
        </div>
    );
};

export default ErrorPage;