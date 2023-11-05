
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import ErrorPage from '../Error/ErrorPage';
import Home from '../Home/Home/Home';
import Login from '../Login/Login';
import Register from '../Login/Register';
import About from '../Home/About/About';

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
        }
      ]
    },
  ]);

export default router;