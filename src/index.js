import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Update from './pages/Update';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Sorry</h1>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <h1>Sorry</h1>,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <h1>Sorry</h1>,
  },
  {
    path: "/update",
    element: <Update />,
    errorElement: <h1>Sorry</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

