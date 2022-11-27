import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import css from './CarPost2.css'
import Modal3 from '../components/Modal3'

export default function CarPost2(props) {
    return (

        <Card
            bg={"secondary"}
            text={"white"}
            className="car-card-style mt-3 col-12
                   col-lg-4 col-md-6"
        //    style={{ width: '50vw' }}
        >
            <Card.Img variant="top" src={props.car.image} />
            <Card.Body>
                <Card.Title>Brand: {props.car.brand}</Card.Title>
                <Card.Text>
                    <p>Model: {props.car.name_of_model}</p>
                    <p>Type: {props.car.type}</p>

                    <p>Year of Launch: {props.car.year_of_launch}</p>
                    <p>Rating: {props.car.rating} Stars</p>
                    <p>Price: $ {props.car.cost_price} </p>
                </Card.Text>

                <div>
                    <Modal3 carStore={props.car} />
                    <Button variant="light"
                            onClick={props.deleteCar}
                    >
                        Delete car
                    </Button>

                </div>



            </Card.Body>
        </Card>





    )



}