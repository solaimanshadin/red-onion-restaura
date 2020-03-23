import React from 'react';
import AllFoods from '../../Data/foods.json';
import { useParams,Link } from 'react-router-dom';
import FoodItem from '../FoodItem/FoodItem';
import './SearchResult.css'

const SearchResult = () => {
    const {searchQuery} = useParams();
    const searchResult = AllFoods.filter(food => food.name.includes(searchQuery) );

    console.log(searchQuery, searchResult);
    return (
        <section className="food-area my-5">
            <div className="container">
                <h4 className="text-center search-res-title">Search Result</h4>
                <div className="row my-5">
                    {
                    searchResult.length === 0 && <h1 className="col-12 display-5 text-center">No food found!</h1>
                    }
                    
                    {
                        searchResult.map(food => <FoodItem key={food.id} food={food}></FoodItem>)
                    }
                </div>
                <div className="text-center">
                    <Link to="/">
                        <button  className="btn btn-danger btn-secondary">See Our all Foods</button>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default SearchResult;