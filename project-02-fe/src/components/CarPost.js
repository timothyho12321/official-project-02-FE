import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import css from './CarPost.css'

export default function CarPost(props) {
    return (
        
            <Card 
                   bg = {"secondary"}
                   text = {"white"}
                   className ="car-card-style mt-3 col-12
                   col-lg-4 col-md-6" 
                //    style={{ width: '50vw' }}
                   >
                <Card.Img variant="top" src={props.car.image}/>
                <Card.Body>
                    <Card.Title>Brand: {props.car.brand}</Card.Title>
                    <Card.Text>
                        <p>Model: {props.car.name_of_model}</p>
                        <p>Type: {props.car.type}</p>

                        <p>Year of Launch: {props.car.year_of_launch}</p>
                        <p>Rating: {props.car.rating} Stars</p>
                        <p>Price: $ {props.car.cost_price} </p>
                    </Card.Text>
                    <Button variant="primary">See details</Button>
                </Card.Body>
            </Card>


            


    )



}