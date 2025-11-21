import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

import './index.css'
import MainLayouts from './Layouts/MainLayouts';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import ErrorPage from './Pages/ErrorPage';
import Faq from './Pages/Faq';
import ServicesPage from './Pages/ServicesPage';
import Appointment from './Pages/Appointment';
import AppProvider from './Context/AppContext';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ServiceDetails from './CardDetails/ServiceDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/services",
        element: <ServicesPage></ServicesPage>
      },
      {
        path: "/service/:id",
        element: <PrivateRoute>
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>
      },
      {
        path: "/faq",
        element: <Faq></Faq>
      },
      {
        path: "/appointment",
        element: (
          <PrivateRoute>
            <Appointment></Appointment>
          </PrivateRoute>
        )
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

AOS.init({
  duration: 1000, // animation duration (ms)
  offset: 100,    // distance from top
  once: true,     // animate only once
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
)
