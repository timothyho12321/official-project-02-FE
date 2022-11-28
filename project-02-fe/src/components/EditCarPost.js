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
                            editYearOfLaunch2={this.props.editYearOfLaunch}
                            updateFormField={this.props.updateFormField}
                            changeStateToEachCarYear={this.props.changeStateToEachCarYear}



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

                        {/* Add Modal to EditCarPost now */}
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Launch demo modal
                        </button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>



                </Card.Body>
            </Card>
        )






    }









}