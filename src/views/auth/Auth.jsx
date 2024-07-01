import React, { useEffect, useState } from 'react';
import { AuthStyles } from './styles/AuthStyles';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../../reducers/user/userSlice';

const initialState = {
    username: '',
    email: '',
    password: ''
};

const Auth = ({ type }) => {
    const { isLoading, user } = useSelector((store) => store.user);
    const [values, setValues] = useState(initialState);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = values;
        if (!email || !password || (type !== 'LOGIN' && !username)) {
            toast.error('Please Fill Out All Fields');
            return;
        }
        if (type === 'LOGIN') {
            dispatch(loginUser({ email, password }));
            return;
        }

        dispatch(registerUser({ username, email, password }));
    }

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/');
            }, 2000)
        }
        // eslint-disable-next-line
    }, [user]);

    return (
        <AuthStyles className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <h3>{type === 'LOGIN' ? 'Login' : 'Register'}</h3>
                {/* name field */}
                {type !== 'LOGIN' && (
                    <div className='form-row'>
                        <label htmlFor='username' className='form-label'>
                            username
                        </label>
                        <input
                            id='username'
                            type='text'
                            value={values.username}
                            name='username'
                            onChange={handleChange}
                            className='form-input'
                        />
                    </div>
                )}
                {/* email field */}
                <div className='form-row'>
                    <label htmlFor='email' className='form-label'>
                        email
                    </label>
                    <input
                        id='email'
                        type='email'
                        value={values.email}
                        name='email'
                        onChange={handleChange}
                        className='form-input'
                    />
                </div>
                {/* password field */}
                <div className='form-row'>
                    <label htmlFor='password' className='form-label'>
                        password
                    </label>
                    <input
                        id='password'
                        type='password'
                        value={values.password}
                        name='password'
                        onChange={handleChange}
                        className='form-input'
                    />
                </div>
                <button type='submit' className='btn btn-block' disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
                <p>
                    {type === 'LOGIN' ? "Haven't registered yet?" : 'Already registered?'}{' '}
                    <Link to={type === 'LOGIN' ? '/auth/register' : '/auth/login'} type='button' className='member-btn'>
                        {type === 'LOGIN' ? 'Register' : 'Login'}
                    </Link>
                </p>
            </form>
        </AuthStyles>
    )
}

export default Auth;