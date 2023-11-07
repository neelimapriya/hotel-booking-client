
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
          element:<Bookings></Bookings>
        },
        {
          path:'/gallary',
          element:<Gallary></Gallary>
        },
        {
          path:'/room',
          element:<Rooms></Rooms>,
          // loader:()=>fetch('http://localhost:5000/room')
        },
        {
          path:'/room/:id',
          element:<RoomDetails></RoomDetails>,
          loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/room/${params.id}`),
        }
      ]
    },
  ]);

export default router;