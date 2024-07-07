import "./index.scss";

import React from 'react'

export const TextInput = (props) => {
    const { label, required, error } = props;
    return (
        <div className={`input-container ${required ? "required" : ""}`}>
            {label && <label className='label'>{label}</label>}
            <input className="text-input" {...props} />
            {error && <p className="error-msg">{error}</p>}
        </div>
    )
}

export const CustomButton = (props) => {
    const { label } = props;
    return (
        <div className="button-container">
            <button className="button" {...props}>{label}</button>
        </div>
    )
}

export const Loader = ({loadingMsg}) => {
    return <div className="loader-container">
        <p className="loading-msg">{loadingMsg || "Loading..."}</p>
    </div>
}

export const Modal = props => {

    const divStyle = {
        display: props.displayModal ? 'block' : 'none'
    };
    function closeModal(e) {
        e.stopPropagation()
        props.closeModal()
    }
    return (
        <div className="modal-container">
            <div
                className="modal"
                onClick={closeModal}
                style={divStyle} >
                <div
                    className="modal-content"
                    onClick={e => e.stopPropagation()} >
                    <span
                        className="close"
                        onClick={closeModal}>&times;
                    </span>
                    <div className="main-content-container">
                        <p className="confirm-string">Are you sure, Want to delete the restaurant?</p>
                        <div className="action-buttons" >
                            <CustomButton label="Yes" onClick={props.confirmHandler}></CustomButton>
                            <CustomButton label="No" onClick={closeModal}></CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
