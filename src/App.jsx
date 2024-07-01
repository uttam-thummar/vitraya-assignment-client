import React from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AuthRoutes, ProtectedRoutes } from './routes';
import { Auth, NotFound, RecentExtracts, TextExtract } from './views';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoutes>
            <Layout />
          </ProtectedRoutes>
        }>
          <Route index element={<Navigate to='/text-extract' />} />
          <Route path='text-extract' element={<TextExtract />} />
          <Route path='recent-extracts' element={<RecentExtracts />} />
        </Route>
        <Route path='/auth' element={
          <AuthRoutes>
            <Outlet />
          </AuthRoutes>
        }>
          <Route index element={<Navigate to='/auth/login' />} />
          <Route path='register' element={<Auth type='REGISTER' />} />
          <Route path='login' element={<Auth type='LOGIN' />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer
        position='top-right'
        theme='dark'
        autoClose={2000}
        transition={Flip}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  )
}

export default App;