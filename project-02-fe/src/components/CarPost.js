import React from 'react'


export default function CarPost(props) {
    return (
        <div className="card-body">
            <h3 className="card-title">Brand: {props.car.brand}</h3>
            <p>Model: {props.car.name_of_model}</p>
            <p>Type: {props.car.type}</p>

            <p>Year of Launch: {props.car.year_of_launch}</p>
            



        </div>


    )



}