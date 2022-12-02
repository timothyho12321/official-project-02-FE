import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { render } from 'react-dom';
import './CarPost.css'
import CarPostDetails from './CarPostDetails'

export default class CarPost extends React.Component {

    state = {
        page: "general"
    }




    render() {
        return (


            <React.Fragment>


                <Card
                    bg={"secondary"}
                    text={"white"}
                    className="car-card-style mt-3 col-12
                       col-lg-6 col-md-6"

                >
                    <Card.Img variant="top"
                        src={this.props.car.image}
                        className="card-image-style"

                    />
                    <Card.Body>
                        <Card.Title>{this.props.car.brand} {this.props.car.name_of_model} </Card.Title>
                        <Card.Text>
                            <p>{this.props.car.rating}<i class="bi bi-dot"></i><i class="bi bi-star-fill"></i> </p>

                            <p><i class="bi bi-car-front-fill"></i>  {this.props.car.type}</p>

                            <p><i class="bi bi-rocket-takeoff-fill"></i> Launched: {this.props.car.year_of_launch}</p>

                            <p><i class="bi bi-currency-dollar"></i> {this.props.car.cost_price} </p>
                        </Card.Text>

                        <div>
                            <CarPostDetails carStore={this.props.car}


                            />

                            <Button variant='light'
                                carStore={this.props.car}

                                onClick={() => this.props.changeSearchStateDetailedPost(this.props.car._id)}


                            >
                                See Detailed Post</Button>
                        </div>

                    </Card.Body>
                </Card>





            </React.Fragment >



        )



    }




}