import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-page d-flex align-items-center  text-center">
            <div className="container">
                <h1 className="display-6">404</h1>
                <p className="lead">Page Not Found</p>
                <Link className="btn btn-danger btn-rounded" to="/">Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;