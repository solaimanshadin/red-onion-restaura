import React from 'react';
import foods from '../../Data/foods';
import features from '../../Data/features';
const AddProducts = () => {
    const dataPoster = (url, dataToPost) => {
        fetch(url , {
            method : "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(dataToPost)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err  => console.log(err))
    }


    return (
        <div className="container py-5">
            <h1>Inventory Management</h1>
            <button onClick={() => dataPoster('https://red-onion-backend.herokuapp.com/addfood',foods)} className="btn btn-danger mr-2">Add products</button>
            <button onClick={() => dataPoster('https://red-onion-backend.herokuapp.com/addfeatures', features)} className="btn btn-danger">Add Features</button>
        </div>
    );
};

export default AddProducts;