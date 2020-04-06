import React, { useEffect,useState } from 'react';
import MapImg from '../../Images/ordercomplete.png';
import Rider from '../../Images/Image/rider.png';
import RiderHalmet from '../../Images/Image/helmet.png';
const OrderComplete = (props) => {
    const [orderId,setOrderId] = useState();
    useEffect(() => {
        setOrderId(props.orderId)
        window.scrollTo(0, 0)
        
    }, [props])
    
    return (
        <div className="container pt-5 my-5">
            <div className="row">
                <div className="col-md-8">
                    <img className="img-fluid" src={MapImg} alt=""/>
                </div>
                <div className="col-md-4 pl-md-5">
                    <div className="bg-light p-3 rounded">
                        <img className="w-25 ml-5" src={Rider} alt=""/>
                        <div className="bg-white  rounded p-3 my-3">
                            
                            <div>   
                                {
                                orderId ?
                                
                                <div>
                                    <h6>Order Id :</h6>
                                    <p>{props.orderId}</p>
                                </div>
                                :
                                <h6>Fetching Order Id ...</h6>
                                }
                                <h5>Your Location</h5>
                                {
                                    props.deliveryDetails  ?
                                   <p>{props.deliveryDetails.flat}, {props.deliveryDetails.road}</p> 
                                   : <p>Loading data ...</p>
                                } 
                            </div>
                            <div>
                                <h5>Shop Address</h5>
                                <p>Star Kabab and Restaura</p>
                            </div>
                        </div>
                        <h1>09:00</h1>
                        <p>Estimated Delivery</p>

                        <div className="bg-white rounded p-3 d-flex">
                            <img className="w-25 mr-2" src={RiderHalmet} alt=""/>
                            <div>
                                <h6>Hamim</h6>
                                <p>Your Rider</p>
                            </div>
                        </div>

                        <button className="btn btn-block my-3 btn-danger">Contact</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete;