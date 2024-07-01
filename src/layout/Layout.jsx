import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { clearStore } from '../reducers/user/userSlice';

const navMenus = [
    {
        name: 'Text Extract',
        path: '/text-extract'
    },
    {
        name: 'Recent Extracts',
        path: '/recent-extracts'
    }
];

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((store) => store.user);

    return (
        <LayoutStyles>
            <div className='navbar'>
                <div className='nav-menu'>
                    {navMenus.map((menu, i) => (
                        <div key={i} className={`menu ${location.pathname === menu.path && 'active'}`} onClick={() => navigate(menu.path)}>
                            {menu.name}
                        </div>
                    ))}
                </div>
                <div className='user-details'>
                    <div>
                        {user.username}
                    </div>
                    <button type='submit' className='btn logout' onClick={() => {
                        dispatch(clearStore('Logging Out...'));
                    }}>
                        Logout
                    </button>
                </div>
            </div>
            <div className='content'>
                <Outlet />
            </div>
        </LayoutStyles>
    );
}

const LayoutStyles = styled.main`
    height: 100vh;

    .navbar {
        height: 60px;
        box-shadow: 0 3px 10px 0 #d4d4d5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 30px;
    }
    .nav-menu, .user-details {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .menu {
        cursor: pointer;
        border-bottom: 3px solid transparent;
        transition: var(--transition);
    }
    .menu.active {
        border-bottom-color: var(--black);
    }
    .content {
        height: calc(100vh - 60px);
        overflow-y: auto;
    }
    .logout {
        background-color: var(--red-dark);
    }
    .logout:hover {
        color: var(--red-dark);
        background-color: var(--red-light);
    }
`;

export default Layout;