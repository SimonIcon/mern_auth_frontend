import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import SignIn from "./authComponent/SignIn"
import SignUp from "./authComponent/SignUp"
import Dashboard from './homeComponets/Dashboard'
import HomePage from './pages/HomePage'
import ForgotPassword from './authComponent/ForgotPassword'
import ResetPassword from './authComponent/ResetPassword'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage />,
      children: [
        {
          path: "/",
          element: <SignIn />,
        },
        {
          path: "/signUp",
          element: <SignUp />
        }, {
          path: "/retrievePassword",
          element: <ForgotPassword />
        }, {
          path: "/reset",
          element: <ResetPassword />
        }
      ],
    }, {
      path: '/dashboard',
      element: <HomePage />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App