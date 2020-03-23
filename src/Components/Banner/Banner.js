import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Banner = () => {
    const [searchQuery , setSearchQuery] = useState(null)
    const getQuery = e => setSearchQuery(e.target.value);
    return (
        <section className="banner d-flex align-items-center text-center">
            <div className="container">
                <h1>Best Food Waiting  for your Belly</h1>
                
                <div className="search-box col-md-6 my-5 mx-auto">
                    <input id="query" onChange={getQuery} type="text" className="form-control" placeholder="Search Food Item" />
                    <Link to={"/search="+searchQuery}>
                        <button onClick={() => window.scrollBy(0, 500)} className="btn btn-danger search-btn btn-rounded">Search</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;