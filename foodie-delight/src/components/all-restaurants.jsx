import React, { useEffect, useState } from 'react'
import "./all-restaurant.scss"
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantData } from '../api';
import { Loader, Modal } from './common/ui-widgets';
import { addRestaurants } from '../redux/restaurantSlice';
import { Link } from 'react-router-dom';

const AllRestuarants = () => {
    const restaurants = useSelector(state=>state.restaurant.restaurants);
    const [isLoading, setLoader] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setIdToDelete] = useState('');
    const dispatch = useDispatch();
    useEffect(()=>{
        if(restaurants.length === 0){
            setLoader(true);
            getRestaurantData()
            .then(res=>{
                console.log(res);
                dispatch(addRestaurants(res));
                setLoader(false);
            })
            .catch((err)=>{
                console.error('Error in getting restaurants data',err);
                setLoader(false);
            });
        }
    },[])
    const deleteHandler = (id) => {
        setShowModal(true);
        setIdToDelete(id);
    }
    const selectModal = () => {
        setShowModal(false);
    }
    const deleteConfirmHandler = () => {
        const restaurantUpdated = restaurants.filter(data=>data.id!==deleteId);
        dispatch(addRestaurants(restaurantUpdated));
        setIdToDelete('');
        setShowModal(false);
    }
    return (
        <div className='all-restaurants-container'>
            <div className="container">
                <p className='page-title'>All Restaurants</p>
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Sl No</div>
                        <div className="col col-2">Restaurant Name</div>
                        <div className="col col-3">Location</div>
                        <div className="col col-4">Owner Name</div>
                        <div className="col col-4">Mobile Number</div>
                        <div className="col col-4">Edit</div>
                        <div className="col col-4">Delete</div>
                    </li>
                    {restaurants.map((data,index)=>(
                        <li className="table-row" key={index}>
                        <div className="col col-1" data-label="Sl No">{index+1}</div>
                        <div className="col col-2" data-label="Restaurant Name">{data.restaurantName}</div>
                        <div className="col col-3" data-label="Location">{data.restaurantLocation}</div>
                        <div className="col col-4" data-label="Owner Name">{data.restaurantOwnerName}</div>
                        <div className="col col-4" data-label="Mobile Number">{data.contactNumber}</div>
                        <div className="col col-4 edit" data-label="Edit">
                            <Link to={{pathname:'/add-restaurant', test:'et'}} state={{data}}>Edit</Link>
                        </div>
                        <div className="col col-4 edit" data-label="Delete">
                            <p className='delete-link' onClick={()=>deleteHandler(data.id)}>Delete</p>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            <Modal
                 displayModal={showModal}
                 closeModal={selectModal}
                 confirmHandler = {deleteConfirmHandler}
             />
            {isLoading && <Loader loadingMsg="Getting All Restaurants..."/>}
        </div>
    )
}

export default AllRestuarants