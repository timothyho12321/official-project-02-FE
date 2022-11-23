import React from 'react'


export default function CarPost(props) {
    return (
        <div className="card-body">
            <h3 className="card-title">Brand: {props.car.brand}</h3>
            <h5 className="card-title">Model: {props.car.
name_of_model}</h5>


        </div>


    )



}