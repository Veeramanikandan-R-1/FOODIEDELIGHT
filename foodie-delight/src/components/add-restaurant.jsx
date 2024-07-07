import React, { useEffect, useState } from 'react'
import { CustomButton, TextInput } from './common/ui-widgets'
import "./add-restaurant.scss"
import { useDispatch, useSelector } from 'react-redux'
import { addRestaurants } from '../redux/restaurantSlice'
import { useLocation } from 'react-router-dom'

const AddRestaurant = () => {
    const initialRestaurantData = {
        restaurantName: "",
        restaurantDesc: "",
        restaurantLocation: "",
        restaurantOwnerName: "",
        contactNumber: ""
    }
    const [data,setData] = useState(initialRestaurantData)
    const dispatch = useDispatch();
    const location = useLocation();
    const [statusMsg, setStatusMsg] = useState('');
    const [isEditFlow,setIsEditFlow] = useState(false);
    const restaurants = useSelector((state) => state.restaurant.restaurants);
    const {restaurantName,restaurantDesc,restaurantLocation,restaurantOwnerName, 
        restaurantNameErr, restaurantOwnerNameErr, contactNumber, contactNumberErr} = data;
    useEffect(()=>{
        console.log('state',location.state);
        if(location?.state?.data?.restaurantName){
            setIsEditFlow(true);
            setData(location?.state?.data);
        }
    },[])
    const changeHandler = (e) => {
        setStatusMsg("");
        const {value,name} = e.target;
        setData(prevData=>({
            ...prevData,
            [name]: value,
            [`${name}Err`]: ""
        }));
    }
    const submitHandler = () => {
        console.log(data)
        let isError = false;
        let updatedData = {...data};
        Object.entries(data).forEach(([key,value])=>{
            if(['restaurantName','restaurantOwnerName'].includes(key)){
                if(value.length<3){
                    isError = true;
                    updatedData = {
                        ...updatedData,
                        [`${key}Err`]: "Minimum 3 Chars required"
                    }
                }
            }else if(key === 'contactNumber'){
                const isMobileNoValid = /^(\+\d{1,3}[- ]?)?\d{10}$/.test(value);
                if(!isMobileNoValid){
                    isError = true;
                    updatedData = {
                        ...updatedData,
                        [`${key}Err`]: "Invalid Mobile Number"
                    }
                }
            }
        })
        if(isError){
            return setData(updatedData);
        }
        let updatedRestaurantData = [...restaurants];
        if(!isEditFlow){
            updatedRestaurantData = [...updatedRestaurantData,{...data, id: Date.now()}]
        }else{
            const restId = location.state.data.id;
            console.log('restId',restId)
            updatedRestaurantData = updatedRestaurantData.map((restData)=>{
                if(restData.id === restId){
                    return {...restData,...data}
                }
                return restData;
            })
        }
        dispatch(addRestaurants(updatedRestaurantData));
        setData(initialRestaurantData);
        setStatusMsg(`Restaurant ${!isEditFlow ? 'Added' : 'Updated'} Successfully`);
        setTimeout(()=>{setStatusMsg("")},2000)
    }
    const shouldDisableSubmitButton = (!restaurantName || !restaurantLocation || !contactNumber);
  return (
    <div className='add-restaurant-container'>
        <p className='page-title'>{`${isEditFlow ? "Update" : "Add"}`} Restaurant Details</p>
        <div className='field-container'>
            <p className='statusMsg'>{statusMsg}</p>
            <div className='row'>
                <TextInput 
                    required={true}
                    name="restaurantName"
                    type="text"
                    label="Name"
                    placeholder="Add Restaurant name"
                    value={restaurantName}
                    onChange = {changeHandler}
                    error = {restaurantNameErr}
                />
                <TextInput 
                    type="text"
                    label="Description"
                    placeholder="Add Description"
                    name="restaurantDesc"
                    value={restaurantDesc}
                    onChange = {changeHandler}
                />
            </div>
            <div className='row'>
                <TextInput 
                    type="text"
                    label="Owner Name"
                    placeholder="Add Owner name"
                    name="restaurantOwnerName"
                    value={restaurantOwnerName}
                    onChange = {changeHandler}
                    error = {restaurantOwnerNameErr}
                />
                <TextInput 
                    type="text"
                    label="Contact Number"
                    placeholder="Add Mobile Number"
                    name="contactNumber"
                    value={contactNumber}
                    onChange = {changeHandler}
                    error = {contactNumberErr}
                    required={true}
                />
            </div>
            <div className='row'>
                <TextInput 
                    required={true}
                    type="text"
                    label="Location"
                    placeholder="Add Location"
                    name="restaurantLocation"
                    value={restaurantLocation}
                    onChange = {changeHandler}
                />
            </div>
            <div className='add-button'>
                <CustomButton label={!isEditFlow ? "Add Restaurant" : "Update Details"} onClick={submitHandler} disabled={shouldDisableSubmitButton}/>
            </div>
        </div>

    </div>
  )
}

export default AddRestaurant