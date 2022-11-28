import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './EditCarPost.css'
import EditCarPostForm from './EditCarPostForm'

export default class EditCarPost extends React.Component {

    state = {

    }





    render() {

        return (
            <Card
                bg={"secondary"}
                text={"white"}
                className="car-card-style mt-3 col-12
                       col-lg-4 col-md-6"
            //    style={{ width: '50vw' }}
            >
                <Card.Img variant="top" src={this.props.car.image} />
                <Card.Body>
                    <Card.Title>Brand: {this.props.car.brand}</Card.Title>
                    <Card.Text>
                        <p>Model: {this.props.car.name_of_model}</p>
                        <p>Type: {this.props.car.type}</p>

                        <p>Year of Launch: {this.props.car.year_of_launch}</p>
                        <p>Rating: {this.props.car.rating} Stars</p>
                        <p>Price: $ {this.props.car.cost_price} </p>
                    </Card.Text>

                    <div>
                        <EditCarPostForm
                            key={this.props.car._id}
                            carStore={this.props.car}
                            
                            
                            



                        />

                        {/* Second attempt at edit button */}
                        {/* <Button variant='light'
                        onClick={props.sendModal3}
                    >

                        Edit this car
                    </Button> */}

                        <Button variant="light"
                            onClick={this.props.deleteCar}
                        >
                            Delete car
                        </Button>

                       
                    </div>



                </Card.Body>
            </Card>
        )






    }









}