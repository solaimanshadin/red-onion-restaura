import React from 'react';
import './FoodDetails.css';
import allFoods from '../../Data/foods.json';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';


const FoodDetails = () => {
    const {id} = useParams();
    const currentFood = allFoods.find(food=> food.id == id);

    return (
        <div className="food-details my-5 container">
            <div className="row">
                <div className="col-md-6 pr-md-4">
                    <h1>{currentFood.name}</h1>
                    <p className="my-5">{currentFood.fullDescription}</p>
                    <div className="d-flex  my-4">
                        <h2 className="price">${currentFood.price}</h2>

                        <div className="cart-controller ml-3 btn">
                            <button className="btn">-</button> 1  <button className="btn">+</button>
                        </div>
                    </div>
                    <button className="btn btn-danger btn-rounded mb-2"><FontAwesomeIcon icon={faCartArrowDown} /> Add</button>

                    <div className="more-images mt-5">
                        {currentFood.images.map(img=> <img className="mr-4" height="150px" src={img} alt=""/>)}
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={currentFood.images[0]} alt=""/>
                </div>

            </div>
        </div>
    );
};

export default FoodDetails;