import React from 'react'
import Layout from './components/Layout'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Dashboard from './components/dashboard/Dashboard';
import Wallet from './components/Wallet';
import Profile from './components/Profile';

export default function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    )
  );  

  return (
    <RouterProvider router={router} />
  )
}
