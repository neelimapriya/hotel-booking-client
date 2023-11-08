
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import ErrorPage from '../Error/ErrorPage';
import Home from '../Home/Home/Home';
import Login from '../Login/Login';
import Register from '../Login/Register';
import About from '../Home/About/About';
import Contact from '../Home/About/Contact';
import Rooms from '../Rooms/Rooms';
import RoomDetails from '../Rooms/RoomDetails';
import Bookings from '../Booking/Bookings';
import Gallary from '../Gallary/Gallary';
import Update from '../Booking/Update';
import SingleRoomReview from '../Rooms/SingleRoomReview';
import Review from '../Review/Review';
import Terms from '../Terms&Condition/Terms';
import PrivateRoute from '../Provider/PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/booking',
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path:'/gallary',
          element:<Gallary></Gallary>
        },
        {
          path:'/room',
          element:<Rooms></Rooms>,
         
        },
        {
          path:'/room/:id',
          element:<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
          loader: ({ params }) =>
          fetch(`https://hotel-server-wheat.vercel.app/api/v1/room/${params.id}`),
        },
        {
          path: "/update/:id",
          element:<Update></Update>,
          loader: ({ params }) =>
            fetch(`https://hotel-server-wheat.vercel.app/Booking/${params.id}`),
        },
        {
          path:'/review/:code',
          element:<SingleRoomReview></SingleRoomReview>,
         
        },
        {
          path:'/allreview',
          element:<Review></Review>,
          
        },
        {
          path:'/terms',
          element:<Terms></Terms>
        }
      ]
    },
  ]);

export default router;