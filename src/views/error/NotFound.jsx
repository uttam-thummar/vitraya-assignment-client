import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorPageWrapper } from './styles/ErrorPageWrapper';

const NotFound = () => {
    return (
        <ErrorPageWrapper className='full-page'>
            <div>
                <img src={'assets/images/not-found.svg'} alt="Not Found" />
                <h3>Ohh! Page Not Found</h3>
                <p>We can't seem to find the page you're looking for</p>
                <Link to='/'>Go Back</Link>
            </div>
        </ErrorPageWrapper>
    )
}

export default NotFound;