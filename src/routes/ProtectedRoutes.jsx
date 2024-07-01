import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const { user } = useSelector((store) => store.user);

    if (!user) {
        return <Navigate to='/auth/login' />;
    }

    return children;
}

export default ProtectedRoutes;