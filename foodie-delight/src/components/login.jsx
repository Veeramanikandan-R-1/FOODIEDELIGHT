import React, { useState } from 'react'
import "./login.scss";
import { CustomButton, TextInput } from './common/ui-widgets';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({ userName: '', password: '' });
    const navigate = useNavigate();
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
            [`${name}Err`]: ""
        })
    }
    const { userName, password, userNameErr, passwordErr } = data;
    const submitHandler = () => {
        console.log(data)
        let updatedData = {...data};
        let isError = false;
        if(userName!=='admin'){
            isError = true;
            updatedData = {
                ...updatedData,
                userNameErr: 'Invalid Username'
            }
        }else if (password !== "admin@123"){
            isError = true;
            updatedData = {
                ...updatedData,
                passwordErr: 'Incorrect Password'
            }
        }
        if(!isError){
            navigate('/add-restaurant')
        }else{
            setData(updatedData);
        }
    }
    return (
        <div className='login-container'>
            <div className='login-form'>
                <div className='logo-container'>
                    <h2 className='logo'>Foodie Delight</h2>
                </div>
                <div className='title '>SIGN IN</div>
                <div className='sub-title'>Enter your credentials to access your account</div>
                <p>{}</p>
                <div className='input-container'>
                    <TextInput
                        type="text"
                        label="Username"
                        placeholder="Enter User name"
                        name="userName"
                        value={userName}
                        onChange={changeHandler}
                        error = {userNameErr}
                    />
                    <TextInput
                        type="password"
                        label="Password"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={changeHandler}
                        error = {passwordErr}
                    />
                </div>
                <div>
                    <CustomButton label="SIGN IN" onClick={submitHandler} disabled={!userName || !password}/>
                </div>
                <p className='note'>NOTE: sample login for demo -{'>'} Username: admin, Password: admin@123</p>
            </div>
        </div>
    )
}

export default Login